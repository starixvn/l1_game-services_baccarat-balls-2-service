import { generateResult } from "../../../src/helpers/result-helper";
import { ServerSeedHelper } from "sc-game-base/src/core/helpers";

jest.mock("sc-game-base/src/core/helpers", () => ({
    ServerSeedHelper: { generateServerSeed: jest.fn().mockReturnValue("123asd") },
}));

describe("GenerateResult tests", () => {
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
        const actual = generateResult(finalSeeds);

        // assert
        expect(actual).toEqual({ player: 26, banker: 41 });
    });
});
