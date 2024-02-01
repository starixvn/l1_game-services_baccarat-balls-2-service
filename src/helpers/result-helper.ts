import { BacBall } from "@rd/numbers-game-probabilities";

export const generateResult = (mode: number) => {
    return { player: 1, banker: 2 };
};

export const getSettlementResult = () => {
    return { player: false, banker: true, tie: false };
};

export const generateRawResultForHash = () => {};

export const getProbabilities = (roundResult: any[]) => {
    const player = roundResult.map((drawResult) => Number(drawResult.player));
    const banker = roundResult.map((drawResult) => Number(drawResult.banker));
    return BacBall.getProbabilities(player, banker);
};
