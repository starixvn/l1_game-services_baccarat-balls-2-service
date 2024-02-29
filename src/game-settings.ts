export default {
    id: 1001,
    name: "BacBall",
    durations: {
        wholeRound: 142,
        placingBets: 25,
        lockingBet: 3,
        showingResult: 5,
        wholeTurn: 35,
        startingRound: 2,
    },
    choices: ["player", "banker", "tie"],
    choicesMapper: { player: 1, banker: 2, tie: 3 },
    hedgeBetGroups: [["player", "banker"]],
    numberOfTurnsPerRound: 4,
    numberOfRoundHistory: 108,
    provablyFair: true,
};
