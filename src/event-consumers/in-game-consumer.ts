import { EventConsumers, GameData } from "sc-number-game-base";
import { DrawResult } from "../models/rounds";

export default class InGameConsumers extends EventConsumers.InGameConsumer {
    getCurrentRoundData() {
        const payload = super.getCurrentRoundData();
        const { roundResult }: { roundResult: DrawResult[] } = this.gameData as GameData;
        const playerBalls = roundResult.map((result) => +result.player);
        const bankerBalls = roundResult.map((result) => +result.player);

        return { ...payload, playerBalls, bankerBalls };
    }
}
