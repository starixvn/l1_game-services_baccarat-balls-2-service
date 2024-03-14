import gameSetting from "./game-settings";

const game = {
    id: gameSetting.id,
    name: gameSetting.name,
};

const currencyData = { code: "USD", name: "$US" };

const socketOptionsFunc = (port: any) => {
    return {
        socketUri: `http://localhost:${port}/user/${gameSetting.name.toLowerCase()}`,
        gameName: game.name,
        proxyRoute: "/socket.io",
    };
};

const gameConfig = {
    type: 0,
    name: gameSetting.name.toLowerCase(),
    minBet: 1,
    maxBet: 3000,
    maxBetPerChoices: { player: 3000, banker: 3000, tie: 3000 },
    odds: { player: 2, banker: 2, tie: 70 },
    botenabled: true,
    hour_maxbot: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bot_maxbet: 1000,
    choices_maxbet: { player: 3000, banker: 3000, tie: 3000 },
};

const tempRoundResult = [
    { drawId: 1, player: 1, banker: 1 },
    { drawId: 2, player: 2, banker: 2 },
    { drawId: 3, player: 3, banker: 3 },
    { drawId: 4, player: 4, banker: 4 },
];

const roundsData = [
    {
        id: 1,
        result: [...tempRoundResult],
        settlementResult: [
            { drawId: 1, player: true, banker: false, tie: false },
            { drawId: 2, player: true, banker: false, tie: false },
            { drawId: 3, player: true, banker: false, tie: false },
            { drawId: 4, player: true, banker: false, tie: false },
        ],
        exchangeRateId: 1,
    },
];

const userBetData = (uid: any) => {
    return [
        {
            uid: uid,
            drawId: 2,
            freeBet: false,
            roundId: 2,
            banker: 0,
            betwin: 195.6,
            clientSeed: "0",
            currency: "INH",
            name: "Draco",
            odds: gameConfig.odds,
            operatorId: "ONEworksVGCash",
            paid: true,
            player: 120,
            playerId: 70000,
            rate: 1000,
            siteId: "4100300",
            tie: 140,
            totalAmount: 260,
        },
        {
            uid: uid,
            drawId: 3,
            freeBet: false,
            roundId: 2,
            banker: 0,
            betwin: 195.6,
            clientSeed: "0",
            currency: "INH",
            name: "Draco",
            odds: gameConfig.odds,
            operatorId: "ONEworksVGCash",
            paid: true,
            player: 120,
            playerId: 70000,
            rate: 1000,
            siteId: "4100300",
            tie: 140,
            totalAmount: 260,
        },
    ];
};

const userBetLogData = (uid: any) => {
    return [
        {
            amount: 196.8,
            rebet: false,
            roundId: 2,
            drawId: 4,
            uid: uid,
            name: "Tornado45411",
            time: "2024-03-06T02:08:29.598Z",
            choice: "banker",
            siteId: "4100300",
            currency: "INH",
            rate: 1000,
            operatorId: "ONEworksVGCash",
            playerId: 666,
        },
        {
            amount: 20,
            rebet: false,
            roundId: 3,
            drawId: 8,
            uid: uid,
            name: "Bird4252",
            time: "2024-03-06T02:10:48.915Z",
            choice: "banker",
            siteId: "4100300",
            currency: "INH",
            rate: 1000,
            operatorId: "ONEworksVGCash",
            playerId: 2609,
        },
    ];
};

const promotions = [
    {
        gameId: gameSetting.id,
        startDateTime: new Date(new Date().setSeconds(new Date().getSeconds() + 15)),
        endDateTime: new Date(new Date().setSeconds(new Date().getSeconds() + 15 + 6)),
        isDaily: false,
        odds: gameConfig.odds,
        status: "enabled",
    },
];

export { game, currencyData, socketOptionsFunc, gameConfig, roundsData, userBetData, promotions, userBetLogData };
