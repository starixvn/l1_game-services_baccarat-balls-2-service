import { Helpers } from "sc-number-game-base";

const MinProbability = {
    player: 2346 / (72 * 72),
    banker: 2346 / (72 * 72),
    tie: 69 / (72 * 72),
};

const MaxProbability = {
    player: 2769 / (72 * 72),
    banker: 2769 / (72 * 72),
    tie: 1 / 72,
};

export const calculateOddsRange = (margin?: Record<string, number>[]) => {
    return {
        min: Helpers.getBetOdds(MaxProbability, margin),
        max: Helpers.getBetOdds(MinProbability, margin),
    };
};
