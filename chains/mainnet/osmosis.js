module.exports = {
    chainID: 'osmosis-1',
    lcd: 'https://lcd.osmosis.zone',
    gasAdjustment: 2.2,
    gasPrices: {uosmo: 0.025},
    prefix: 'osmo',
    coinType: '118',
    baseAsset: 'uosmo',
    name: 'Osmosis',
    chainRegistryName: 'osmosis',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Osmosis.svg',
    gitRepo: 'https://github.com/osmosis-labs/osmosis',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    ibc: {
        fromTerra: 'channel-28',
        toTerra: 'channel-209',
        // icsFromTerra: {
        //   contract:
        //     'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        //   toTerra: 'channel-341',
        //   fromTerra: 'channel-26',
        // },
    },
    channels: {
        'columbus-5': 'channel-72',
        'phoenix-1': 'channel-251',
        'axelar-dojo-1': 'channel-208',
        'carbon-1': 'channel-188',
        'akashnet-2': 'channel-1',
        'cheqd-mainnet-1': 'channel-108',
        'chihuahua-1': 'channel-113',
        'comdex-1': 'channel-87',
        'cosmoshub-4': 'channel-0',
        'crescent-1': 'channel-297',
        'mainnet-3': 'channel-181',
        'juno-1': 'channel-42',
        'kaiyo-1': 'channel-259',
        'mars-1': 'channel-557',
        'migaloo-1': 'channel-642',
        'stride-1': 'channel-326',
        'archway-1': 'channel-1429',
        'neutron-1': 'channel-874',
        'noble-1': 'channel-750',
    },
    explorer: {
        address: 'https://www.mintscan.io/osmosis/account/{}',
        tx: 'https://www.mintscan.io/osmosis/txs/{}',
        validator: 'https://www.mintscan.io/osmosis/validators/{}',
        block: 'https://www.mintscan.io/osmosis/blocks/id/{}',
    },
    tokens: [
        {
            token: 'uosmo',
            symbol: 'OSMO',
            name: 'Osmosis',
            icon: process.env.CF_PAGES_URL + '/img/coins/Osmo.svg',
            decimals: 6,
            coinGeckoID: 'osmosis',
        },
        {
            token: 'uion',
            symbol: 'ION',
            name: 'Ion',
            icon: process.env.CF_PAGES_URL + '/img/coins/Ion.svg',
            decimals: 6,
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/osmosis'),
}
