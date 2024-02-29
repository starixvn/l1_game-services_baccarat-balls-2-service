import { EventConsumers } from "sc-number-game-base";

export default class PlaceBetConsumer extends EventConsumers.PlaceBetConsumer {
    validateClientSeed(_: any) {
        return [];
    }

    consume(player: any, payload: any) {
        Object.assign(payload, {
            clientSeed: payload.clientSeed ?? "0",
        });
        super.consume(player, payload);
    }
}
