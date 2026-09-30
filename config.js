// Configuration Data File (config.js)

const cryptoWallets = {
    USDT_TRC20: {
        label: "USDT (TRC20):",
        address: "TX1z9ShawoN772TRC20SecureVaultX99"
    },
    USDT_ERC20: {
        label: "USDT (ERC20):",
        address: "0x71C9482ShawoN772ERC20WalletB428"
    },
    USDT_BEP20: {
        label: "USDT (BEP20):",
        address: "0x99482103ShawoN772BSCWallet9104"
    },
    USDC_ERC20: {
        label: "USDC (ERC20):",
        address: "0x3310924ShawoN772USDCEthVault77"
    },
    USDC_SOL: {
        label: "USDC (Solana):",
        address: "SolShawoN772USDCVault991045SolanaKey"
    },
    USDC_POLYGON: {
        label: "USDC (Polygon):",
        address: "0x55291084ShawoN772PolygonUSDCVault"
    }
};

const investorPlatforms = {
    XM: {
        platform: "XM Global MT5",
        server: "XM-Global-MT5 03",
        login: "84291045",
        pass: "Shawon#Quant99!"
    },
    WeMasterTrade: {
        platform: "WeMasterTrade Evaluation",
        server: "WeMasterTrade-Server",
        login: "99482103",
        pass: "WMT#Trader2026!"
    },
    FundingTraders: {
        platform: "FundingTraders Pro",
        server: "FundingTraders-Live",
        login: "77310924",
        pass: "FT#Alpha777!"
    },
    AquaFunded: {
        platform: "AquaFunded Challenge",
        server: "AquaFunded-MT5Server",
        login: "55291084",
        pass: "Aqua#Trader99!"
    }
};

function initConfigData() {
    updateCryptoPayment();
    updateInvestorPlatform();
}