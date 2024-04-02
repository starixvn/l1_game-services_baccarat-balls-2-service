import { roundBetPercentage } from "../../../src/helpers/round-bet-percentage";

describe("round bet percentage tests", () => {
    const testCases = [
        {
            betPercentage: {
                player: 40.5,
                banker: 24.5,
                tie: 20.5,
            },

            expected: {
                player: 40,
                banker: 40,
                tie: 20,
            },
        },
        {
            betPercentage: {
                player: 50.9,
                banker: 28.2,
                tie: 20.9,
            },

            expected: {
                player: 50,
                banker: 30,
                tie: 20,
            },
        },
    ];
    it.each(testCases)("should return expected", ({ betPercentage, expected }) => {
        // act
        const actual = roundBetPercentage(betPercentage);

        // assert
        expect(actual).toEqual(expected);
    });
});
