import { BacBall } from "@rd/numbers-game-probabilities";
import { DrawResult } from "../models/rounds";
import { ProvablyFair } from "sc-game-base/src/core/game-data";

export const generateResult = (finalSeeds: ProvablyFair) => {
    const serverSeed = JSON.parse(finalSeeds.serverSeed);

    const [playerRemainingBalls, bankerRemainingBalls] = serverSeed.remain.split(";");
    const playerBalls = playerRemainingBalls.split(":").map((x: string) => +x);
    const bankerBalls = bankerRemainingBalls.split(":").map((x: string) => +x);

    const [playerRandom, bankerRandom] = serverSeed.random.split(";").map((x: string) => +x);

    const sumClientSeeds = finalSeeds.clientSeeds.reduce((sumClientSeeds, clientSeed) => sumClientSeeds + Number(clientSeed.clientSeed), 0);

    const totalRemainingBalls = playerBalls.length;

    const playerIndex = (playerRandom + sumClientSeeds) % totalRemainingBalls;

    const bankerIndex = (bankerRandom + sumClientSeeds) % totalRemainingBalls;

    return { player: playerBalls[playerIndex], banker: bankerBalls[bankerIndex] };
};

export const getSettlementResult = (result: DrawResult) => {
    return {
        player: result.player > result.banker,
        banker: result.banker > result.player,
        tie: result.player === result.banker,
    };
};

export const getProbabilities = (roundResult: DrawResult[]) => {
    const player = roundResult.map((drawResult) => +drawResult.player);
    const banker = roundResult.map((drawResult) => +drawResult.banker);
    return BacBall.getProbabilities(player, banker);
};
