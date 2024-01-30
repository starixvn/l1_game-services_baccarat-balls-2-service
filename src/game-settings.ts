export default {
  id: 1001,
  name: "BacBall",
  durations: {
    wholeRound: 132,
    placingBets: 25,
    lockingBet: 3,
    showingResult: 5,
    wholeTurn: 33,
  },
  choices: ["player", "banker", "tie"],
  choicesMapper: { player: 1, banker: 2, tie: 3 },
  hedgeBetGroups: [["player", "banker"]],
  numberOfTurnsPerRound: 4,
  numberOfRoundHistory: 100,
};
