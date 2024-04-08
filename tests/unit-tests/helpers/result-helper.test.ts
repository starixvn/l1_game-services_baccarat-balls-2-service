import * as Helpers from "../../../src/helpers/result-helper";
import { ServerSeedHelper } from "sc-game-base/src/core/helpers";

jest.mock("sc-game-base/src/core/helpers", () => ({
    ServerSeedHelper: { generateServerSeed: jest.fn().mockReturnValue("123asd") },
}));

describe("helpers tests", () => {
    describe("generateResult", () => {
        it("should return expected", () => {
            // arrange
            const playerRandom = 10;
            const bankerRandom = 25;

            const playerRemainingBalls = [...Array(75 + 1).keys()].slice(1).join(":");
            const bankerRemainingBalls = [...Array(75 + 1).keys()].slice(1).join(":");

            const serverSeedSecret = ServerSeedHelper.generateServerSeed(1, 32);

            const serverSeed = `{"random":"${playerRandom};${bankerRandom}","remain":"${playerRemainingBalls};${bankerRemainingBalls}","secret":"${serverSeedSecret}"}`;

            const finalSeeds = {
                serverSeed: serverSeed,
                finalHash: "0f0f0f",
            };

            // act
            const actual = Helpers.generateResult(finalSeeds);

            // assert
            expect(actual).toEqual({ player: 26, banker: 41 });
        });
    });

    describe("getSettlementResult", () => {
        const testCases = [
            {
                drawResult: {
                    player: 10,
                    banker: 15,
                    drawId: 1,
                },
                settlementResult: {
                    player: false,
                    banker: true,
                    tie: false,
                },
            },
            {
                drawResult: {
                    player: 15,
                    banker: 10,
                    drawId: 2,
                },
                settlementResult: {
                    player: true,
                    banker: false,
                    tie: false,
                },
            },
            {
                drawResult: {
                    player: 20,
                    banker: 20,
                    drawId: 3,
                },
                settlementResult: {
                    player: false,
                    banker: false,
                    tie: true,
                },
            },
        ];

        it.each(testCases)("should return correct", ({ drawResult, settlementResult }) => {
            // Act
            const actual = Helpers.getSettlementResult(drawResult);

            // Assert
            expect(actual).toEqual(settlementResult);
        });
    });
});
