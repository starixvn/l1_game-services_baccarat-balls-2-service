import { ProvablyFair } from "sc-game-base/src/core/game-data";
import { generateResult } from "../../src/helpers/result-helper";
import { ServerSeedHelper } from "sc-game-base/src/core/helpers";

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
            serverSeedHash: "",
            clientSeeds: [
                { name: "player1", clientSeed: "1" },
                { name: "player2", clientSeed: "2" },
                { name: "player3", clientSeed: "3" },
                { name: "player4", clientSeed: "4" },
                { name: "player5", clientSeed: "5" },
            ],
            mergeClientSeed: "",
            mergeSeed: "",
            finalHash: "",
        } as ProvablyFair;

        // act
        const actual = generateResult(finalSeeds);

        // assert
        expect(actual).toEqual({ player: 26, banker: 41 });
    });
});
