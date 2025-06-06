module.exports = {
    chainID: 'mars-1',
    lcd: 'https://mars-api.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {umars: 0},
    prefix: 'mars',
    coinType: '330',
    baseAsset: 'umars',
    name: 'Mars',
    chainRegistryName: 'mars',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Mars.svg',
    gitRepo: 'https://github.com/mars-protocol/hub.git',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    // ibc: {
    //   fromTerra: 'channel-78',
    //   toTerra: 'channel-2',
    // },
    channels: {
        'phoenix-1': 'channel-2',
        'crescent-1': 'channel-5',
        'kaiyo-1': 'channel-0',
        'osmosis-1': 'channel-1',
    },
    explorer: {
        address: 'https://explorer.marsprotocol.io/accounts/{}',
        tx: 'https://explorer.marsprotocol.io/transactions/{}',
        validator: 'https://explorer.marsprotocol.io/validators/{}',
        block: 'https://explorer.marsprotocol.io/blocks/{}',
    },
    tokens: [
        {
            token: 'umars',
            symbol: 'MARS',
            name: 'Mars',
            icon: process.env.CF_PAGES_URL + '/img/coins/Mars.svg',
            decimals: 6,
            coinGeckoID: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
        },
    ],
}
