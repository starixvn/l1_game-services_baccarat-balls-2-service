import { calculateOddsRange } from "../../../src/helpers/calculate-odds-range";
import { Helpers } from "sc-number-game-base";

jest.mock("sc-number-game-base", () => ({
    Helpers: { getBetOdds: jest.fn() },
}));

describe("calculateOddsRange tests", () => {
    it("should call Helpers.getBetOdds", () => {
        // arrange
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

        const margin = [
            {
                player: 0.05,
                banker: 0.05,
                tie: 0.2,
                max: 10,
            },
            {
                player: 0.05,
                banker: 0.05,
                tie: 0.2,
                max: 10,
            },
        ];

        // act
        calculateOddsRange(margin);

        // assert
        expect(Helpers.getBetOdds).toHaveBeenNthCalledWith(1, MaxProbability, margin);
        expect(Helpers.getBetOdds).toHaveBeenNthCalledWith(2, MinProbability, margin);
    });
});
