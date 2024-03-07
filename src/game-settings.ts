import { BET_CHOICES } from "./constants";

export default {
    id: 1001,
    name: "BacBall",
    durations: {
        wholeRound: 122,
        placingBets: 20,
        lockingBet: 3,
        showingResult: 5,
        wholeTurn: 30,
        startingRound: 2,
    },
    choices: Object.values(BET_CHOICES),
    choicesMapper: { player: 1, banker: 2, tie: 3 },
    hedgeBetGroups: [["player", "banker"]],
    numberOfTurnsPerRound: 4,
    numberOfRoundHistory: 108,
    historyPageSize: 30,
    provablyFair: true,
    botSettings: {
        ratio: { mainBetOptions: 99, rareBetOptions: 1 },
        mainBetOptions: ["player", "banker"],
        rareBetOptions: ["tie"],
    },
};
