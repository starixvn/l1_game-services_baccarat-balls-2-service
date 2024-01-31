import { NumberWar } from "@rd/numbers-game-probabilities";

export const generateResult = () => {
    return { player: 1, banker: 2 };
};

export const getSettlementResult = () => {
    return { player: false, banker: true, tie: false };
};

export const generateRawResultForHash = () => {};

export const getProbabilities = () => {
    return NumberWar.getProbabilities([], []);
};
