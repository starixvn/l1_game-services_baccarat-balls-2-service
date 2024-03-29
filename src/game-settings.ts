import { BET_CHOICES } from "./constants";

export default {
    id: 1002,
    name: "BacBall2",
    durations: {
        wholeRound: 92,
        placingBets: 15,
        lockingBet: 3,
        showingResult: 3,
        wholeTurn: 22,
        startingRound: 4,
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
