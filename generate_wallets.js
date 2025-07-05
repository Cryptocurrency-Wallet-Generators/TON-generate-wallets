const { TonClient, WalletContractV4 } = require('@ton/ton');
const { mnemonicNew, mnemonicToPrivateKey } = require('@ton/crypto');
const fs = require('fs');

async function generateWallets(count) {
    const wallets = [];
    for (let i = 0; i < count; i++) {
        // Generate a 24-word mnemonic
        const mnemonic = await mnemonicNew();

        // Derive a keypair from the mnemonic
        const keyPair = await mnemonicToPrivateKey(mnemonic);

        // Create a wallet contract (using Wallet V4, the latest standard)
        const workchain = 0; // Standard workchain for most wallets
        const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });

        // Save wallet info
        wallets.push({
            address: wallet.address.toString({ urlSafe: true, bounceable: true, testOnly: false }),
            privateKey: Buffer.from(keyPair.secretKey).toString('hex'),
            mnemonic: mnemonic.join(' ')
        });
    }

    return wallets;
}

async function main() {
    const walletCount = 50; // Number of wallets to generate
    const wallets = await generateWallets(walletCount);

    // Save wallets to a file
    const outputFileName = 'ton_wallets.json';
    fs.writeFileSync(outputFileName, JSON.stringify(wallets, null, 2));

    console.log(`Generated ${walletCount} TON wallets and saved to ${outputFileName}`);
}

main().catch(console.error);
