const chainsByOracle = {
  "Supra": [
    "Aptos",
    "Aurora",
    "Arbitrum",
    "Arbitrum Nova",
    "Avalanche",
    "Base",
    "Beam",
    "BSC",
    "Canto",
    "Celo",
    "CORE",
    "Cronos",
    "DefiChain",
    "DFK",
    "Dogechain",
    "Evmos",
    "Ethereum",
    "Fantom",
    "FunctionX",
    "Fuse",
    "Hedera",
    "ShimmerEVM",
    "IoTeX",
    "JBC",
    "Kava",
    "Klaytn",
    "Kroma",
    "Linea",
    "Mantle",
    "Meld",
    "Metis",
    "Milkomeda C1",
    "Mode",
    "Moonbeam",
    "Nordek",
    "opBNB",
    "Optimism",
    "Polygon",
    "Rollux",
    "Sui",
    "Syscoin",
    "Telos",
    "Tron",
    "Manta",
  ],
  "Stork": [
    "Arbitrum",
    "Aurora",
    "Avalanche",
    "Base",
    "BSC",
    "Ethereum",
    "Mantle",
    "opBNB",
    "Polygon zkEVM",
    "Starknet",
    "Tron",
    "Sui",
    "zkSync Era",
  ],
  "Pyth": [
    "Arbitrum",
    "Astar zkEVM",
    "Aurora",
    "Avalanche",
    "Blast",
    "BSC",
    "Bittorrent",
    "Base",
    "Boba",
    "Canto",
    "Celo",
    "Chiliz",
    "Conflux",
    "CORE",
    "Cronos",
    "EOS",
    "Evmos",
    "Ethereum",
    "Fantom",
    "Filecoin",
    "Gnosis",
    "Hedera",
    "Horizen EON",
    "inEVM",
    "KCC",
    "Kava",
    "LightLink",
    "Linea",
    "Manta",
    "Mantle",
    "Merlin",
    "Meter",
    "Mode",
    "Neon",
    "Optimism",
    "Polygon",
    "Polygon zkEVM",
    "Ronin",
    "Scroll",
    "ShimmerEVM",
    "Viction",
    "WEMIX3.0",
    "Zkfair",
    "zkSync Era",
    "Zetachain",
    "Solana",
    "Aptos",
    "Sui",
    "CosmosHub",
    "Injective",
    "Osmosis",
    "Neutron",
    "Sei",
    "Juno",
    "Near",
  ],
  "Chainlink": [
    "Ethereum",
    "BSC",
    "Polygon",
    "Gnosis",
    "Avalanche",
    "Fantom",
    "Arbitrum",
    "Optimism",
    "Moonriver",
    "Moonbeam",
    "Metis",
    "Base",
    "Celo",
    "Scroll",
    "Linea",
    "zkSync Era",
    "Polygon zkEVM",
    "Starknet",
    "Solana",
  ],
  "Switchboard": ["Solana", "Ethereum", "CORE", "Arbitrum", "Optimism", "Base", "Aurora", "Aptos", "Sui"],
  "RedStone": [
    "Ethereum",
    "Arbitrum",
    "Optimism",
    "Blast",
    "Mantle",
    "BSC",
    "Manta",
    "opBNB",
    "Merlin",
    "Mode",
    "Avalanche",
    "Kava",
    "Base",
    "Linea",
    "zkSync Era",
    "Polygon",
    "Polygon zkEVM",
    "TON",
    "Celo",
    "Scroll",
    "Canto",
    "Gnosis",
    "Fantom",
    "Starknet",
    "Telos",
    "Boba",
    "Chiliz",
    "Conflux",
    "Cronos",
    "EOS",
    "Hedera",
    "Horizen EON",
    "Stacks",
    "Moonriver",
    "Moonbeam",
    "Rootstock",
    "ShimmerEVM",
    "Zetachain",
    "CosmosHub",
    "Injective",
    "Near",
    "Tron",
    "Klaytn",
    "Evmos",
    "Aurora",
    "Metis",
    "Astar zkEVM",
    "Syscoin",
    "Arbitrum Nova",
    "Meld",
    "Harmony",
    "Polkadot",
    "Beam",
    "Milkomeda C1",
    "Dogechain",
    "Sei"
  ],
  "UMA": ["Ethereum", "Polygon", "Boba", "Optimism", "Arbitrum", "Gnosis", "Avalanche"],
  "API3": [
    "Arbitrum",
    "Avalanche",
    "Base",
    "BSC",
    "Ethereum",
    "Fantom",
    "Gnosis",
    "Kava",
    "Linea",
    "Mantle",
    "Moonbeam",
    "Moonriver",
    "Optimism",
    "Polygon",
    "Polygon zkEVM",
    "Rootstock",
    "Sei"
  ],
  "Band": [
    "CLV",
    "Fantom",
    "Secret",
    "Godwoken",
    "Sora",
    "Avalanche",
    "Ethereum",
    "Horizen",
    "Astar",
    "Bitgert",
    "Bittorrent",
    "Findora",
    "Icon",
    "Meter",
    "Oasis",
    "Celo",
    "Harmony",
    "Moonriver",
    "OKTChain",
    "Platon",
    "BSC",
    "Optimism",
    "Cronos",
  ],
  "DIA": [
    "Ethereum",
    "Polygon",
    "BSC",
    "Optimism",
    "Avalanche",
    "Fantom",
    "Arbitrum",
    "Solana",
    "Near",
    "Polkadot",
    "Kusama",
    "CosmosHub",
    "Celo",
    "Moonbeam",
    "zkSync Era",
    "Metis",
    "Gnosis",
    "Injective",
    "Acala",
    "Astar",
    "Aurora",
    "Base",
    "Boba",
    "CLV",
    "Conflux",
    "Evmos",
    "Fuse",
    "Neon",
    "Nervos",
    "OKTChain",
    "Polygon zkEVM",
    "Pontem",
    "Shiden",
    "Shibuya",
    "Telos",
    "Vara",
    "Velas",
    "Wanchain",
  ],
  "Witnet": [
    "Arbitrum",
    "Avalanche",
    "Boba",
    "Celo",
    "Conflux",
    "Cronos",
    "Cube",
    "Dogechain",
    "Elastos",
    "Ethereum",
    "Fuse",
    "Gnosis",
    "Harmony",
    "Hoo",
    "Kava",
    "KCC",
    "Klaytn",
    "Meter",
    "Metis",
    "Moonbeam",
    "OKTChain",
    "Optimism",
    "Polygon",
    "Reef",
    "Scroll",
    "smartBCH",
    "Syscoin",
    "Ultron",
  ],
  "WINkLink": ["Tron"],
  "Scope": ["Solana"],
  "Acurast": [
    "Tezos",
    "Arbitrum",
    "Astar",
    "Base",
    "BSC",
    "Ethereum",
    "Moonbeam",
    "Optimism",
    "Pendulum",
    "Polygon",
    "Aeternity",
  ],
  "Ojo Network": ["Ethereum", "Arbitrum", "Archway", "Comdex", "Injective", "Juno", "Neutron", "Osmosis", "Secret", "Stargaze"],
  "Pragma": ["Starknet"],
  "Harbinger": ["Tezos"],
  "SEDA": ["Aurora", "Evmos", "Optimism"],
  "Nest": ["Ethereum", "BSC", "Aurora", "KCC", "CLV", "Polygon"],
  "Chronicle": [
    "Ethereum",
    "Polygon",
    "Optimism",
    "Arbitrum",
    "zkSync Era",
    "Gnosis",
    "Base",
    "Polygon zkEVM",
    "Mantle"
  ],
};

export { chainsByOracle };
