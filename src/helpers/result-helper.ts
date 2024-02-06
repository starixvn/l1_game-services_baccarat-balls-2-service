import { BacBall } from "@rd/numbers-game-probabilities";
import { DrawResult } from "../models/rounds";
import { generateRandomNumbers } from "sc-number-game-base/dist/helpers";
import { randomModes } from "sc-number-game-base/dist/helpers/random-helper";
import { TOTAL_BALLS } from "../constants";

export const generateResult = (mode: number) => {
    const numberOfPicked = 1;
    const player = generateRandomNumbers(randomModes, numberOfPicked, TOTAL_BALLS)[0];
    const banker = generateRandomNumbers(randomModes, numberOfPicked, TOTAL_BALLS)[0];
    return { player, banker };
};

export const getSettlementResult = (result: DrawResult) => {
    return {
        player: result.player > result.banker,
        banker: result.banker > result.player,
        tie: result.player === result.banker,
    };
};

export const generateRawResultForHash = () => {};

export const getProbabilities = (roundResult: DrawResult[]) => {
    // const player = roundResult.map((drawResult) => +drawResult.player);
    // const banker = roundResult.map((drawResult) => +drawResult.banker);
    // return BacBall.getProbabilities(player, banker);
    return BacBall.getProbabilities([], []);
};
