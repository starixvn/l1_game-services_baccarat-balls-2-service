import { asClass, asValue } from "awilix";
import { bets, rounds, tmpBets, betLogs, results } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer, RoundResultConsumer, SettleGameRoundConsumer } from "./event-consumers";
import RunningRoundInfoPublisher from "./event-publishers/running-round-info-publisher";

export default class BaccaratBallsContainerRegistry extends ContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(rounds),
            betsRepository: asValue(bets),
            tempBetsRepository: asValue(tmpBets),
            betLogsRepository: asValue(betLogs),
            resultsRepository: asValue(results),
        });
    }

    registerConsumers(): void {
        super.registerConsumers();
        this.container.register({
            inGameConsumer: asClass(InGameConsumer).singleton(),
            roundResultConsumer: asClass(RoundResultConsumer).singleton(),
            settleGameRoundConsumer: asClass(SettleGameRoundConsumer).singleton().proxy(),
        });
    }

    registerPublishers() {
        super.registerPublishers();

        this.container.register({
            runningRoundInfoPublisher: asClass(RunningRoundInfoPublisher).singleton(),
        });
    }
}
