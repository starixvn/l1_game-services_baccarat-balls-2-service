import { GameData, GameDefinition } from "sc-number-game-base";
import { stub } from "jest-auto-stub";
import * as Helpers from "../../../src/helpers";
import { InGameConsumer } from "../../../src/event-consumers";
import { Core } from "sc-game-base";
import GameManagementApiClientFactory from "sc-game-base/src/core/game-management-api";
import { EventConsumers } from "sc-number-game-base";

describe("InGameConsumer test", () => {
    let consumer: InGameConsumer;
    const definition = stub<GameDefinition>();
    const gameData = stub<GameData>();
    const roundQuery = stub<Core.QueryApis.RoundQuery>();
    const publisher = stub<Core.BaseEventPublishers.BaseEventPublisher>();
    const getBalance = jest.fn();
    const gameManagementApiClientFactory = stub<GameManagementApiClientFactory>();

    beforeEach(() => {
        consumer = new InGameConsumer(definition, gameData, roundQuery, publisher, getBalance, gameManagementApiClientFactory);
    });

    it("inherit InGameConsumer of sc-number-game-base", () => {
        expect(consumer instanceof EventConsumers.InGameConsumer);
    });

    describe("getOddsRange", () => {
        jest.spyOn(Helpers, "calculateOddsRange").mockReturnValue({
            min: { player: 1.5, banker: 1.5, tie: 20 },
            max: { player: 2, banker: 2, tie: 30 },
        });

        it("should return correct", () => {
            // Arrange
            const expectedOddsRange = {
                min: { player: 1.5, banker: 1.5, tie: 20 },
                max: { player: 2, banker: 2, tie: 30 },
            };
            // Act
            const actual = consumer.getOddsRange();

            // Assert
            expect(actual).toEqual(expectedOddsRange);
        });
    });

    describe("getBetPercentage", () => {
        jest.spyOn(EventConsumers.InGameConsumer.prototype, "getBetPercentage").mockReturnValue({
            player: 40.5,
            banker: 40.5,
            tie: 19,
        });

        it("should call super.getBetPercentage", () => {
            // act
            const actual = consumer.getBetPercentage({});

            // assert
            expect(EventConsumers.InGameConsumer.prototype.getBetPercentage).toHaveBeenCalled();
        });

        it("should return correct", () => {
            // act
            const actual = consumer.getBetPercentage({});

            // assert
            expect(actual).toStrictEqual({ player: 40, banker: 41, tie: 19 });
        });
    });

    describe("getCurrentRoundData", () => {
        beforeEach(() => {
            jest.spyOn(EventConsumers.InGameConsumer.prototype, "getCurrentRoundData").mockReturnValue({
                drawId: 3,
            });
            (consumer.gameData as GameData).roundResult = [
                {
                    drawId: 1,
                    player: 1,
                    banker: 4,
                },
                {
                    drawId: 2,
                    player: 2,
                    banker: 5,
                },
                {
                    drawId: 3,
                    player: 3,
                    banker: 6,
                },
            ];
        });

        it("should call super.getCurrentRoundData", () => {
            // act
            consumer.getCurrentRoundData();

            // assert
            expect(EventConsumers.InGameConsumer.prototype.getCurrentRoundData).toHaveBeenCalled();
        });

        it("should return correct", () => {
            //Arrange
            const expectedRoundData = {
                drawId: 3,
                playerBalls: [1, 2, 3],
                bankerBalls: [4, 5, 6],
            };
            // Act
            const actual = consumer.getCurrentRoundData();

            // Assert
            expect(actual).toEqual(expectedRoundData);
        });
    });
});
