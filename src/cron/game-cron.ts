import { Crons } from "sc-number-game-base";

export default class GameCron extends Crons.GameCron {
    async start() {
        try {
            await super.start();
        } catch (e) {
            console.log(e);
        }
    }

    async proceed() {
        try {
            await this.proceed();
        } catch (e) {
            console.log(e);
        }
    }

    async checkGameStatus() {
        await super.checkGameStatus();
        console.log(this.gameData.gameConfigs);
    }
}
