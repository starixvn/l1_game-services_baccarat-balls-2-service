import { GameClientDriver, normalUser, eventTypes } from "sc-game-service-integration-utils";
import gameSettings from "../../src/game-settings";
import { startService } from "./_stubs/test-jobs";
import { getProcessId, buildConfigs, getTimeOutToPlacingBetTime, initUserSession, checkConnect } from "./_stubs/helper";
import { socketOptionsFunc } from "./_stubs/test-data";
const path = require("path");
const scriptName = path.basename(__filename);
const processId = getProcessId(scriptName);
const overrideGameConfigs = { botenabled: false };
startService(processId, overrideGameConfigs);

const appConfigs = buildConfigs(processId);
const socketOptions = socketOptionsFunc(appConfigs.hostingPort);

describe("when settle", () => {
    it("check connect", (done) => {
        checkConnect(processId, done);
    });

    describe("test data settle", () => {
        let client: any;
        const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 5000000;

        beforeEach(async () => {
            client = new GameClientDriver(socketOptions, initUserSession(normalUser));
            await client.handleSignedInEvent();
            client.sendInGameEvent();
        }, JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);

        afterEach(() => {
            client.close();
            client = null;
        });

        it("should return settled status data", async () => {
            // Arrange

            const inGameData = await client.handleGameEvent((data: any) => data.remainingTime);
            setTimeout(() => {
                client.emit(eventTypes.bet, { betChoice: "player", amount: 100 });
            }, getTimeOutToPlacingBetTime(inGameData.remainingTime, gameSettings.durations) * 1000);

            // Act
            const result = await client.handleGameEvent((data: any) => data.status);
            const { status } = result;

            // Assert
            expect(status.bet).toBeGreaterThan(0);
        });
    });
});
