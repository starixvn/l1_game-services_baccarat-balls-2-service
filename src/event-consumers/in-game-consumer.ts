import { EventConsumers, GameData } from "sc-number-game-base";
import { DrawResult } from "../models/rounds";
import { logger } from "sc-common";

export default class InGameConsumer extends EventConsumers.InGameConsumer {
    async consume(realPlayer: any) {
        logger.log(JSON.stringify(this.gameData.gameConfigs), "info");
        await super.consume(realPlayer);
    }

    getCurrentRoundData() {
        const payload = super.getCurrentRoundData();
        const { roundResult }: { roundResult: DrawResult[] } = this.gameData as GameData;
        const playerBalls = roundResult.map((result) => +result.player);
        const bankerBalls = roundResult.map((result) => +result.player);

        return { ...payload, playerBalls, bankerBalls };
    }
}
