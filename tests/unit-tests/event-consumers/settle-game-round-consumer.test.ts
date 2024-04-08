import { SettleGameRoundConsumer } from "../../../src/event-consumers";
import { GameData, GameDefinition } from "sc-number-game-base";
import { stub } from "jest-auto-stub";
import GameManagementApiClientFactory from "sc-game-base/src/core/game-management-api";
import { Core } from "sc-game-base";

const definition = stub<GameDefinition>();
const gameData = stub<GameData>();
const gameManagementApiClientFactory = stub<GameManagementApiClientFactory>();
const roundResultPublisher = stub<Core.BaseEventPublishers.RoundResultPublisher>();
const userBetResultPublisher = stub<Core.BaseEventPublishers.UserBetResultPublisher>();

const consumer = new SettleGameRoundConsumer({
    definition,
    gameData,
    roundResultPublisher,
    userBetResultPublisher,
    endGame: null,
    roundsRepository: null,
    betsRepository: null,
    tempBetsRepository: null,
    gameManagementApiClientFactory,
});
describe("SettleGameRoundConsumer test", () => {
    describe("calculateBetResult", () => {
        it("should return correct", () => {
            // Arrange
            const settlementResult = {
                player: true,
                tie: false,
                banker: false,
            };

            const bet = {
                player: 15,
                tie: 10,
            };

            const odds = {
                player: 2,
                banker: 2,
                tie: 30,
            };

            const expected = {
                totalBetAmount: 25,
                totalWin: 30,
                netWin: 15,
                totalLost: 10,
                winningByChoices: {
                    banker: 0,
                    player: 30,
                    tie: 0,
                },
            };

            // Act
            const actual = consumer.calculateBetResult(settlementResult, bet, odds);

            // Assert
            expect(actual).toEqual(expected);
        });

        it("should return correct", () => {
            // Arrange
            const settlementResult = {
                player: false,
                tie: true,
                banker: false,
            };

            const bet = {
                player: 15,
                tie: 10,
            };

            const odds = {
                player: 2,
                banker: 2,
                tie: 30,
            };

            const expected = {
                totalBetAmount: 25,
                totalWin: 315,
                netWin: 290,
                totalLost: 15,
                winningByChoices: {
                    banker: 0,
                    player: 0,
                    tie: 300,
                },
            };

            // Act
            const actual = consumer.calculateBetResult(settlementResult, bet, odds);

            // Assert
            expect(actual).toEqual(expected);
        });
    });
});
