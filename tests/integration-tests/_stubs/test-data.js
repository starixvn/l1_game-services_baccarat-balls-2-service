import gameSetting from "./game-settings";

const game = {
    id: gameSetting.id,
    name: gameSetting.name,
};

const currencyData = { code: "USD", name: "$US" };

const socketOptionsFunc = (port) => {
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
    margin: [
        {
            max: 10,
            player: 0.05,
            banker: 0.05,
            tie: -0.5,
        },
        {
            max: 100,
            player: 0.05,
            banker: 0.05,
            tie: 0.2,
        },
    ],
    botenabled: true,
    hour_maxbot: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bot_maxbet: 1000,
    choices_maxbet: { player: 3000, banker: 3000, tie: 3000 },
};

const tempRoundResult = [
    { drawId: 1, player: 1, banker: 1 },
    { drawId: 2, player: 2, banker: 2 },
    { drawId: 3, player: 3, banker: 3 },
];

const pfResults = [
    {
        clientSeeds: [],
        roundId: 1,
        drawId: 1,
        serverSeedHash: "278feb80145bbf2ba2c9fd9e904b8c2b2d04dd1b1fc46057914658d863312529",
        encryptedServerSeed: {
            iv: "40340c0e53b5f4de135310eff28ad1fb",
            content:
                "1aab65773f10df363d5bc28c4d9e29a5b5dc35226e9942e62e6544a2283d852402a63c02266589ff4e98ea2c6289ab63b2eb01b2cd5eb340b9c168ea23f8c17f14684a01934ce49ae00838b691dae6a2e6b139422b222ecbdcba0344881ee660055c4883bf77bc8ade93107cd1c218baac50bb21b72157058b674afe92b41f8463fed3ceadbb0750ee8d55b4a04e6d823c31417f50d7215d6367bc5d05f6344b8b2db6c62601694286107d012ddf6f6e4bb65a5663595d45d51dfa6e22a97ce63feff288ddf8f40b981e2af6461ab9ac50c32ee893b1d0a1b74abd92b161468505af573296bf63ff233c007bcb939b3c960d14983eacc63fe9f3452aa5001222a347e6b8da21b2ade156f5bcf78b0195581fca560c6dd7cfcb62ea4063d846d62088d7d1deb24c8cb0f29fb92966e88902c129393d8d34ca0e6d39de12965a4db037b8331ad4ca2d6dcba0d675f9aa8dcb78fd375d0c7666f732264184fb7a6ab8733f1c14adb94333ff4d2b8ee25a0fa7771bd708f1ccfa7521799297cd27c0bb4d353461d12d923f460033a01be4f4a9160ac1564fa2a0caa5c0e36ff975f92a23a6787ace0021a84412ab061e1197bfed0fb4c71889b73d7dc0e478fea520d180d1157062f8a41802d0d46ab70bcf361e74d549ae6f8250be590d642cb019963850f29301ee7b6ccf15e759e99c23e21b02470feb72c2d9",
        },
        finalHash:
            "972c6b8c61e743c38697a09cfc5ee7932fd1c3cf7c8dbb09ae537ff0bf5235d01a0edfe8291f80daec376e1a9c9ba1794249ab1e223ad36ddb09ddfbd39eb5ef",
        mergeSeed:
            '{"random":"73;54","remain":"1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75","secret":"XurdJPUvhIeLzwlJC8_5OjBPbwk3DEOb"}',
    },
    {
        clientSeeds: [],
        roundId: 1,
        drawId: 2,
        serverSeedHash: "d75a7705621aba0320af2c5d0b6f534f48b9c90f3d8619b79b5b574990528d4e",
        encryptedServerSeed: {
            iv: "0a39e450c766b3a1f362cdc58229b2fb",
            content:
                "2fff955b14affaf2f2e9c4b17c78e72a51af3132fa77ee2f7184f6c51d443f0c7e3bb1d7daae139d1608c0cb48929cc3d499db3641911e9c12c4e075f834fba8c224fef192d6e269840834ea0e3670f1210303cacdbb219424bbba3cf6a2afdd09142cfe2cf61c31e0bfa88ceb9c29e5dbbebb6f628992900d664c0345c5701d8bc61ced09ff3b2cfe807fac0471a6d9b8de66f241ae31845f86e00a195f6cd35dfd3d212acd05f87c3e021a9c50ee815c0952d91bcc7c4d24585e4dce795ab559a6c2cca5d328de03d72c243d1e9379d221be9811f0baa795872f2879076b578ef918d1a38d47e0a2cb39b4cd228d176630fc765abf95a9d18380862df0802dfe0af701e2d4d2fe66fde4e02522f1cd822619736587116b8ebba2d77a3c098f03c0b14cfa12cef68735dfc7076f8a4092285ed31189714c7c589afe04ab6ca456a35337912fc9ab4f066d332e561351137a6acacc48988175c0bc42674966c884921629bff3eaa7497a2fc0c35173cf18479cf436cc1bf97afb0e45b2117d422fa44b997d6567a1885def76d547c4e4ef5efe899ee53ed9381fc5e4b13bcdaeb8d930bef56a7a8f58a41eb58ca66939b65e37b0f7ee390042d38f1191b0b49f1433a986f0af1294bff024dbecddaa655822f42f37b6dc653a61355d65c44d62657d7cbd55991ad32873c1fd079453c4dae6",
        },
        finalHash:
            "50f62388850016c3c975464e983f4448d56c3e756e33b8deac97f88ca1ad5758ff56f5e0e300ad75dea6a16a54bc2489f634e869fb5945676e5b4e33f847cc88",
        mergeClientSeed: "",
        mergeSeed:
            '{"random":"3;16","remain":"1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75","secret":"Su4rMOrlI1rsZTCEbqpmejCGIDDPE5FU"}',
    },
    {
        clientSeeds: [],
        roundId: 1,
        drawId: 3,
        serverSeedHash: "dc5ab499512d04e1d1d0dcde53f65bee6c52a9114e675c87a7a9e85f22b7e23a",
        encryptedServerSeed: {
            iv: "e021344d10f097aef113bf7e5e11cf76",
            content:
                "96f770cbbc6e12a21f701f5547ce49cb026dba55e58e02e7fcbbf4fef8bb6ae627ce521e6f71b9dec48fe2c8ff657ae9ed15e839f601d2ac8994d57e4910e20b93ed007f24aa60a3179d2e49cb8c362da87ea46f671db0241adf7f3f6a084608fdea849f90e381de25b30090834224ec2c76e4cc7259296f0e1343966882efff1048eacdca7072efbda144168e948ae873296ac7e8aad1390eeb688503552ff315ce61025d090fd8fb02909bdd213329aacec5d92ace0f44446f787ef161311b93999bd1f6931a50741e25025a7a06639faa80df29902417fca4196b768b1489abe2d6152bd6dfc7564ed0c6d7e6dceebbc4f2a43383c1c2e76e905ac86ef14b4eb7742edda6f89250ea6fa4b22feb216408a243bd168b43ce61c17c7f2ff822567e44f1a56bce39a2044f34a056bb9447c6c65c6c62ed6af979b30729359c9e658ed21ddc9b2587698135afb35f3f3ce2f38356dd756b5b77b7f34c4248afa657bcb95860331f39af0016d298e280462a53f6b7a12a36b34af97f65a3f7cc8c536a53357f448ddc8a6619252c606fc25e2fda2ed46f8f637bb62bbcb5dd6588e5d9595f8b76bc05616c120ed377e50b335053220020ff29625e65fd3eb13d0165927d4ab5da62acab3fe598fdaa405df31886870d873978b3a91ca7af13e6562c61885c299ee6fc2d7f6ae0",
        },
        finalHash:
            "0088a3afa3833d16d49f2e0d790b5373091a234c5500270b218acfbe86a45e1c9024e803ba574258fdfc7806278ff45dd38d21ece1ed4099424776f62ae15186",
        mergeClientSeed: "",
        mergeSeed:
            '{"random":"33;8","remain":"1:2:3:4:5:6:7:8:9:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75","secret":"VO0LSOa6XQH7yxw3gRzWkdDqC3gi5PoN"}',
    },
    {
        clientSeeds: [],
        roundId: 1,
        drawId: 4,
        serverSeedHash: "ae662d55d61fbd40e4455f66acbaedb6f9fbd442cf3f471610ce2585d09c45dc",
        encryptedServerSeed: {
            iv: "73802083246decdefc543971c6931d93",
            content:
                "c808d6aa77e95a32b372a526c1716f36e9553ab20c11a8fb22b815985ae4ce8d85682b76d76f73088510a4f06ad352c9f25a682ff9c14d64ef5ef9bbdbf99088bde1c75fd3ed0a82e7d56e95ff410f3adec19903703da0386d28532ac26c10ef808482c9e9792287be272bf28fbd0b6d15f9e5258de7d077833c1b74659a4bbcc76f231dbba1535aec6e2097f07977cab2b95078ea7676a21bedede348d6a038029358e1ce5df973b50c7e34370768ceff9cd222840bb86296a1eb11143b5ae91d7d27b36229b32fbcfcb2dc4b8adf0dc90cc374c2f7612eeb5a3c62c28877575d6d627b978667e47e5f28e3fa5885a8434de4670ed91ed7c04f6acaa9bafb5b10e681deaf4f207dde075813800f5a5ecd30feecd31f60834ba023bfe97502d40f48dae527d9ba061812184ffa58c6a95fb1edd9839e763c0fb63a4854b89e3be223f15fad98d329c9dfd3373c6129e9068ad05ee6bade4966f7abed4446dd7c36bc525b8157640026d69432c9a3d27e721524fec65fb345d0c9b0128e2933217c677d1f3bbb6e09cf86621649a71cce4129f516d5756438a1fc786784278861c89fc9900aa6dda28748b4cbd5b6c1bd4b1cdff739ac5b73def589b64d6b6417330ff8f756c03fe71c949899f3ac3a9fe151538238e546e0cd4abb8373327b2a921ee0e949d087ed",
        },
        __v: 0,
        finalHash:
            "bd9e07384ca6f2ee6709f5bbb11805b84a2a33295055cf4e4727de8897454b6c75356e5ddb7cc29c4cb78d51c03ae34fcda63ef9a75cc67474253015f41ffcef",
        mergeClientSeed: "",
        mergeSeed:
            '{"random":"25;46","remain":"1:2:3:4:5:6:7:8:9:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74;1:2:3:4:5:6:7:8:10:11:12:13:14:15:16:17:18:19:20:21:22:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75","secret":"*%!4EQA%M0G%C4wCIVJEEV!^4802lB0j"}',
    },
];

const roundsData = [
    {
        id: 1,
        result: [...tempRoundResult],
        settlementResult: [
            { drawId: 1, player: true, banker: false, tie: false },
            { drawId: 2, player: true, banker: false, tie: false },
            { drawId: 3, player: true, banker: false, tie: false },
        ],
        drawId: 3,
        ended: false,
        exchangeRateId: 1,
    },
];

const userBetData = (uid) => {
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
            drawId: 4,
            freeBet: false,
            roundId: 1,
            banker: 0,
            betwin: 0,
            clientSeed: "0",
            currency: "INH",
            name: "Draco",
            odds: { player: 1.5, banker: 2, tie: 30 },
            operatorId: "ONEworksVGCash",
            paid: false,
            player: 120,
            playerId: 70000,
            rate: 1000,
            siteId: "4100300",
            tie: 140,
            totalAmount: 260,
        },
        {
            uid: uid,
            drawId: 4,
            freeBet: false,
            roundId: 1,
            banker: 120,
            betwin: 0,
            clientSeed: "0",
            currency: "INH",
            name: "Draco",
            odds: { player: 2, banker: 1.5, tie: 30 },
            operatorId: "ONEworksVGCash",
            paid: false,
            player: 0,
            playerId: 70000,
            rate: 1000,
            siteId: "4100300",
            tie: 140,
            totalAmount: 260,
        },
    ];
};

const userBetLogData = (uid) => {
    return [
        {
            amount: 196.8,
            rebet: false,
            roundId: 1,
            drawId: 2,
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
            roundId: 1,
            drawId: 2,
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

export { game, currencyData, socketOptionsFunc, gameConfig, roundsData, userBetData, promotions, userBetLogData, pfResults };
