import { EventConsumers, GameData } from "sc-number-game-base";
import { DrawResult } from "../models/rounds";
import { calculateOddsRange } from "../helpers";

export default class InGameConsumer extends EventConsumers.InGameConsumer {
    getOddsRange(margin?: Record<string, number>[]) {
        return calculateOddsRange(margin);
    }

    getCurrentRoundData() {
        const payload = super.getCurrentRoundData();
        const { roundResult }: { roundResult: DrawResult[] } = this.gameData as GameData;
        const playerBalls = roundResult.map((result) => +result.player);
        const bankerBalls = roundResult.map((result) => +result.banker);

        return { ...payload, playerBalls, bankerBalls };
    }
}
