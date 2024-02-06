import { EventConsumers, GameData } from "sc-number-game-base";
import { DrawResult } from "../models/rounds";

export default class InGameConsumer extends EventConsumers.InGameConsumer {
    async consume(realPlayer: any) {
        const { gameConfigs } = this.gameData;
        console.log(JSON.stringify(gameConfigs));
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
