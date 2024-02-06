import { asClass, asValue } from "awilix";
import { bets, rounds, tmpBets, betLogs } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer } from "sc-game-base/src/core/event-consumers";

export default class BaccaratContainerRegistry extends ContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(rounds),
            betsRepository: asValue(bets),
            tempBetsRepository: asValue(tmpBets),
            betLogsRepository: asValue(betLogs),
        });
    }

    registerConsumers(): void {
        super.registerConsumers();
        this.container.register({
            inGameConsumer: asClass(InGameConsumer).singleton(),
        });
    }
}
