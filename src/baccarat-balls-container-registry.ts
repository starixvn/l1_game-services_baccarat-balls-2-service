import { asClass, asValue } from "awilix";
import { bets, rounds, tmpBets, betLogs } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer } from "./event-consumers";
import RunningRoundInfoPublisher from "./event-publishers/running-round-info-publisher";

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

    registerPublishers() {
        super.registerPublishers();
        this.container.register({
            runningRoundInfoPublisher: asClass(RunningRoundInfoPublisher).singleton(),
        });
    }

    registerConsumers(): void {
        super.registerConsumers();
        this.container.register({
            inGameConsumer: asClass(InGameConsumer).singleton(),
        });
    }
}
