import { EventConsumers } from "sc-number-game-base";
import { ServerSeedHelper } from "sc-game-base/src/core/helpers";
import { SERVER_SEED_SECRET_LENGTH, TOTAL_BALLS } from "../constants";
import { generateRemainingBalls, getRandomIndex } from "sc-number-game-base/dist/helpers";
import { DrawResult } from "../models/rounds";

export default class RoundResultConsumer extends EventConsumers.RoundResultConsumer {
    generateServerSeed() {
        const { randomMode } = this.gameData.gameConfigs;
        const { roundResult } = this.gameData;
        const totalDrawnBalls: number = roundResult.length ?? 0;
        const totalRemainingBalls = TOTAL_BALLS - totalDrawnBalls;

        const playerDrawn = (roundResult as DrawResult[]).map((res) => +res.player);
        const bankerDrawn = (roundResult as DrawResult[]).map((res) => +res.banker);

        const playerRandom = getRandomIndex(randomMode, totalRemainingBalls);
        const bankerRandom = getRandomIndex(randomMode, totalRemainingBalls);

        const playerRemainingBalls = generateRemainingBalls(TOTAL_BALLS, playerDrawn).join(":");
        const bankerRemainingBalls = generateRemainingBalls(TOTAL_BALLS, bankerDrawn).join(":");

        const serverSeedSecret = ServerSeedHelper.generateServerSeed(randomMode, SERVER_SEED_SECRET_LENGTH);

        return `{"random":"${playerRandom};${bankerRandom}","remain":"${playerRemainingBalls};${bankerRemainingBalls}","secret":"${serverSeedSecret}"}`;
    }
}
