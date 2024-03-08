import { BacBall } from "@rd/numbers-game-probabilities";
import { DrawResult } from "../models/rounds";

export type FinalSeeds = {
    serverSeed: string;
    finalHash: string;
};

export const generateResult = (finalSeeds: FinalSeeds) => {
    const serverSeed = JSON.parse(finalSeeds.serverSeed);

    const [playerRemainingBalls, bankerRemainingBalls] = serverSeed.remain.split(";");
    const playerBalls = playerRemainingBalls.split(":").map((x: string) => +x);
    const bankerBalls = bankerRemainingBalls.split(":").map((x: string) => +x);

    const [playerRandom, bankerRandom] = serverSeed.random.split(";").map((x: string) => +x);

    const increment = finalHashToNumber(finalSeeds.finalHash);

    const totalRemainingBalls = playerBalls.length;

    const playerIndex = (playerRandom + increment) % totalRemainingBalls;

    const bankerIndex = (bankerRandom + increment) % totalRemainingBalls;

    return { player: playerBalls[playerIndex], banker: bankerBalls[bankerIndex] };
};

export const finalHashToNumber = (finalHash: string) => {
    return parseInt(finalHash.slice(0, 2), 16);
};

export const getSettlementResult = (result: DrawResult) => {
    return {
        player: +result.player > +result.banker,
        banker: +result.banker > +result.player,
        tie: +result.player === +result.banker,
    };
};

export const getProbabilities = (roundResult: DrawResult[]) => {
    const player = roundResult.map((drawResult) => +drawResult.player);
    const banker = roundResult.map((drawResult) => +drawResult.banker);
    return BacBall.getProbabilities(player, banker);
};

export const generateRawResultForHash = () => {};
