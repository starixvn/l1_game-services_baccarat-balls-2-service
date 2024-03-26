import { Helpers } from "sc-number-game-base";

const MinProbability = {
    player: 0.3786008230452675,
    banker: 0.3786008230452675,
    tie: 0.03292181069958848,
};

const MaxProbability = {
    player: 0.588477366255144,
    banker: 0.588477366255144,
    tie: 0.037037037037037035,
};

export const calculateOddsRange = (margin?: Record<string, number>[]) => {
    return {
        min: Helpers.getBetOdds(MaxProbability, margin),
        max: Helpers.getBetOdds(MinProbability, margin),
    };
};
