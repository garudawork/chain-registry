module.exports = {
    chainID: 'archway-1',
    lcd: 'https://api.mainnet.archway.io',
    gasAdjustment: 1.75,
    gasPrices: {aarch: 1500000000000},
    prefix: 'archway',
    coinType: '118',
    baseAsset: 'aarch',
    name: 'Archway',
    chainRegistryName: 'archway',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Archway.svg',
    gitRepo: 'https://github.com/archway-network/archway.git',
    autoCompound: {
        enabled: true,
        minRewards: 100000000000000000
    },
    ibc: {},
    channels: {
        'axelar-dojo-1': 'channel-13',
        'cosmoshub-4': 'channel-0',
        'kaiyo-1': 'channel-11',
        'osmosis-1': 'channel-1',
        'juno-1': 'channel-15',
        'crescent-1': 'channel-6',
    },
    explorer: {
        address: 'https://www.mintscan.io/archway/account/{}',
        tx: 'https://www.mintscan.io/archway/txs/{}',
        validator: 'https://www.mintscan.io/archway/validators/{}',
        block: 'https://www.mintscan.io/archway/blocks/id/{}',
    },
    tokens: [
        {
            token: 'aarch',
            symbol: 'ARCH',
            name: 'Archway',
            icon: process.env.CF_PAGES_URL + '/img/coins/Aarch.png',
            decimals: 18,
            coinGeckoID: 'archway',
        },
    ],
}
