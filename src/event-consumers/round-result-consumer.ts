import BaseEventConsumers from "sc-number-game-base/dist/event-consumers";
import { SeedHelper, ServerSeedHelper } from "sc-game-base/src/core/helpers";
import { SERVER_SEED_SECRET_LENGTH, TOTAL_BALLS } from "../constants";
import { generateRemainingBalls, getRandomIndex } from "sc-number-game-base/dist/helpers";

export default class RoundResultConsumer extends BaseEventConsumers.RoundResultConsumer {
    async generateServerSeedAndPublishHash() {
        const serverSeed = this.generateSeverSeed();
        const serverSeedHash = SeedHelper.getSHA256Hash(serverSeed);

        this.gameData.pf = { ...this.gameData.pf, serverSeed, serverSeedHash };

        await this.createResultRecord(serverSeed, serverSeedHash);

        this.roundResultPublisher.publishServerSeedHash();
    }

    generateSeverSeed() {
        const { randomMode } = this.gameData.gameConfigs;
        const { gameState } = this.gameData;
        const totalDrawnBalls: number = gameState.player?.length ?? 0;
        const totalRemainingBalls = TOTAL_BALLS - totalDrawnBalls;

        const playerRandom = getRandomIndex(randomMode, totalRemainingBalls);
        const bankerRandom = getRandomIndex(randomMode, totalRemainingBalls);

        const playerRemainingBalls = generateRemainingBalls(TOTAL_BALLS, gameState.player).join(":");
        const bankerRemainingBalls = generateRemainingBalls(TOTAL_BALLS, gameState.banker).join(":");

        const serverSeedSecret = ServerSeedHelper.generateServerSeed(randomMode, SERVER_SEED_SECRET_LENGTH);

        const serverSeed = `{"random":"${playerRandom};${bankerRandom}","remain":"${playerRemainingBalls};${bankerRemainingBalls}","secret":"${serverSeedSecret}"}`;

        return serverSeed;
    }
}
