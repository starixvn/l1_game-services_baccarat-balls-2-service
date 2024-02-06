import { BacBall } from "@rd/numbers-game-probabilities";
import { DrawResult } from "../models/rounds";

export const generateResult = (mode: number) => {
    return { player: 1, banker: 2 };
};

export const getSettlementResult = () => {
    return { player: false, banker: true, tie: false };
};

export const generateRawResultForHash = () => {};

export const getProbabilities = (roundResult: DrawResult[]) => {
    // const player = roundResult.map((drawResult) => +drawResult.player);
    // const banker = roundResult.map((drawResult) => +drawResult.banker);
    // return BacBall.getProbabilities(player, banker);
    return BacBall.getProbabilities([], []);
};
