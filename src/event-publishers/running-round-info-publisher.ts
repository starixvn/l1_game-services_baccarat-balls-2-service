import { EventPublishers } from "sc-number-game-base";
import { BET_CHOICES } from "../constants";

export default class RunningRoundInfoPublisher extends EventPublishers.RunningRoundInfoPublisher {
    getBetPercentageAndPlayerBetCount() {
        const { betPercentage, playerBetCount } = super.getBetPercentageAndPlayerBetCount();
        betPercentage[BET_CHOICES.player] && (betPercentage[BET_CHOICES.player] = parseInt(betPercentage[BET_CHOICES.player].toString()));
        betPercentage[BET_CHOICES.tie] && (betPercentage[BET_CHOICES.tie] = parseInt(betPercentage[BET_CHOICES.tie].toString()));
        if (betPercentage[BET_CHOICES.banker] > 0) {
            betPercentage[BET_CHOICES.banker] = 100 - (betPercentage[BET_CHOICES.player] ?? 0) - (betPercentage[BET_CHOICES.tie] ?? 0);
        }

        return { betPercentage, playerBetCount };
    }
}
