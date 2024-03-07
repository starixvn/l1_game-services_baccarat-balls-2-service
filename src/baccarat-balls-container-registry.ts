import { asClass, asValue } from "awilix";
import { bets, rounds, tmpBets, betLogs, results } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer, PlaceBetConsumer, RoundResultConsumer, SettleGameRoundConsumer } from "./event-consumers";
import { GameDefinition, GameData } from "sc-game-base/src/core";
import RunningRoundInfoPublisher from "./event-publishers/running-round-info-publisher";
import Bot from "./crons/bot";

export default class BaccaratBallsContainerRegistry extends ContainerRegistry {
    register(appConfigs: any, definition: GameDefinition, gameData: GameData) {
        super.register(appConfigs, definition, gameData);

        this.container.register({
            maxCombinedClientSeeds: asValue(5),
        });

        return this.container;
    }
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
            placeBetConsumer: asClass(PlaceBetConsumer).singleton(),
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

    registerCrons() {
        super.registerCrons();
        this.container.register({
            bot: asClass(Bot).singleton(),
        });
    }
}
