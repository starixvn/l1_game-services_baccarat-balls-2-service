import { helpers } from "sc-common";
import { EventConsumers, GameData, GameDefinition } from "sc-number-game-base";

export default class PlaceBetConsumer extends EventConsumers.PlaceBetConsumer {
    validateClientSeed(_: any) {
        return [];
    }

    composeBettingTimeValidationCriteria(_: number) {
        const configs = this.gameData.gameConfigs;
        const numberOfTurnsPerRound = (this.definition as GameDefinition).numberOfTurnsPerRound;
        const turn = (this.gameData as GameData).drawId % numberOfTurnsPerRound || numberOfTurnsPerRound;
        const { placingBets, showingResult, wholeTurn, lockingBet } = this.definition.durations as any;
        const remainingTime = this.gameData.remainingTime - wholeTurn * (numberOfTurnsPerRound - turn);
        const showingResultTime = placingBets + showingResult;
        console.log({ remainingTime, turn, time: this.gameData.remainingTime });
        return [
            {
                failure: !configs.enabled,
                notice: this.getNoticeObj(helpers.noticeHelper.invalidBet),
            },
            {
                failure: remainingTime >= placingBets && remainingTime <= showingResultTime,
                notice: this.getNoticeObj(helpers.noticeHelper.cannotPlaceBet),
            },
            {
                failure: remainingTime < lockingBet || remainingTime > showingResultTime,
                notice: this.getNoticeObj(helpers.noticeHelper.placeBetNextRound),
            },
        ];
    }

    consume(player: any, payload: any) {
        Object.assign(payload, {
            clientSeed: payload.clientSeed ?? "0",
        });
        super.consume(player, payload);
    }
}
