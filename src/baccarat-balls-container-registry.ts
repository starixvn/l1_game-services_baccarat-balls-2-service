import { AwilixContainer, asClass, asValue } from "awilix";
import { bets, rounds, tmpBets, betLogs } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer, RoundResultConsumer } from "./event-consumers";
import { GameDefinition, GameData } from "sc-game-base/src/core";

export default class BaccaratContainerRegistry extends ContainerRegistry {
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
        });
    }

    registerConsumers(): void {
        super.registerConsumers();
        this.container.register({
            inGameConsumer: asClass(InGameConsumer).singleton(),
            roundResultConsumer: asClass(RoundResultConsumer).singleton(),
        });
    }
}
