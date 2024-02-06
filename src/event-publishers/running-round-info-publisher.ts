import { BaseEventPublisher } from "sc-game-base/src/core/event-publishers";

export default class RunningRoundInfoPublisher extends BaseEventPublisher {
    // return temp value
    publish() {
        this.publishToAllUsers({
            totalBets: {
                player: Math.floor(Math.random() * 100),
                banker: Math.floor(Math.random() * 100),
                tie: 0,
            },
        });
    }
}
