import { GameData } from "sc-number-game-base";
import { GameStatusPublisher } from "../../../src/event-publishers";
import { stub } from "jest-auto-stub";
import * as Helpers from "../../../src/helpers";

describe("running-round-info-publisher test", () => {
    let publisher: GameStatusPublisher;
    const gameData = stub<GameData>();

    beforeEach(() => {
        publisher = new GameStatusPublisher("NextBall1", gameData);
    });

    describe("getOddsRange", () => {
        jest.spyOn(Helpers, "calculateOddsRange").mockReturnValue({
            min: { player: 1.5, banker: 1.5, tie: 20 },
            max: { player: 2, banker: 2, tie: 30 },
        });

        it("should return correct", () => {
            // act
            const actual = publisher.getOddsRange();

            // assert
            expect(actual).toStrictEqual({
                min: { player: 1.5, banker: 1.5, tie: 20 },
                max: { player: 2, banker: 2, tie: 30 },
            });
        });
    });
});
