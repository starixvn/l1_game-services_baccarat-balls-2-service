import { helpers } from "sc-common";
import { getOrDefault, post } from "sc-game-base/src/core/game-management-api";
import { Crons } from "sc-number-game-base";

export default class Bot extends Crons.Bot {
    async run() {
        try {
            if (this.gameData.gameConfigs?.botenabled && this.isDuringBetTime()) {
                const random = this.chance.integer({ min: 0, max: 5 });

                if (this.shouldAddBot(random)) {
                    console.log("joinRoom");
                    await this.joinRoom();
                    console.log("joinRoom", this.botsInRoom);
                }

                if (this.shouldRemoveBot(random)) {
                    console.log("leaveRoom");
                    await this.leaveRoom();
                }
                console.log(this.botsInRoom);
                const botsToBet = this.getBotsToBet();

                botsToBet.length > 0 && (await this.placeBets(botsToBet));
            }
        } catch (e) {
            console.log("run", e);
        }
    }

    getNumberOfBotsToJoin() {
        try {
            const remainingBots = this.maxNumberOfBots - Object.keys(this.botsInRoom).length;
            const remainingTime = this.getCurrentTimeOfTurn();
            const maxBotRandom =
                remainingBots > 0
                    ? Math.min(Math.max(1, this.maxNumberOfBots / remainingTime), remainingBots)
                    : Math.max(1, this.maxNumberOfBots / remainingTime);
            console.log({ maxNumberOfBots: this.maxNumberOfBots, remainingBots, remainingTime });
            return this.chance.integer({ min: 1, max: maxBotRandom });
        } catch (e) {
            console.log("getNumberOfBotsToJoin", e);
        }
        return 0;
    }

    async joinRoom() {
        try {
            const numberOfBots = this.getNumberOfBotsToJoin();
            const newBots = await getOrDefault(this.gameManagementApiClient.users.getAllBots(numberOfBots), []);
            console.log({ numberOfBots, newBots });

            if (newBots.length > 0) {
                await post(
                    this.gameManagementApiClient.users.updateBotsJoinRoom({
                        botIds: newBots.map((bot: any) => bot.id),
                        gameName: this.definition.configName,
                    })
                );

                newBots.forEach((bot: any) => this.botJoinRoom(bot));
            }
        } catch (e) {
            console.log("joinRoom", e);
        }
    }

    async reset() {
        try {
            const configs = this.gameData.gameConfigs;
            console.log({ botenabled: configs.botenabled });
            if (configs.botenabled) {
                const botRatio = helpers.configHelper.getMaxBotForCurrentHour(configs);

                if (this.currentBotRatio !== botRatio) {
                    this.currentBotRatio = botRatio;

                    this.totalBots = await getOrDefault(this.gameManagementApiClient.users.getTotalBots(), this.totalBots);

                    this.maxNumberOfBots = Math.floor(this.totalBots * this.currentBotRatio);
                }

                await this.processDisabledBots();
            } else {
                await this.removeAllBots();
            }

            this.resetAllBotData();
        } catch (e) {
            console.log("reset", e);
        }
    }
}
