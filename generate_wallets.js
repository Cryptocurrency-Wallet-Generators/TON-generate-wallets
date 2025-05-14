const crypto = require('crypto');
const fs = require('fs');

// Telegram uses MTProto protocol with 2048-bit RSA keys for authentication
function generateWallets(count) {
    const wallets = [];
    
    for (let i = 0; i < count; i++) {
        // Generate random API ID and API hash (simulating Telegram API credentials)
        const apiId = Math.floor(Math.random() * 1000000) + 10000;
        const apiHash = crypto.randomBytes(16).toString('hex');
        
        // Generate phone number-like identifier (not real phone numbers)
        const phoneId = `+${Math.floor(Math.random() * 999999999999) + 100000000000}`;
        
        // Generate authentication key (used in MTProto)
        const authKey = crypto.randomBytes(32).toString('hex');
        
        // Generate secret phrase (24 words)
        const words = [];
        const wordlist = [
            'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
            'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act',
            'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit',
            'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent',
            'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert',
            'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter',
            'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger',
            'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique',
            'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic',
            'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest',
            'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset',
            'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction',
            'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
            'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge',
            'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain'
        ];
        
        for (let j = 0; j < 24; j++) {
            const randomIndex = Math.floor(Math.random() * wordlist.length);
            words.push(wordlist[randomIndex]);
        }
        const mnemonic = words.join(' ');
        
        // Save wallet info
        wallets.push({
            walletId: `tg-${crypto.randomBytes(8).toString('hex')}`,
            apiId,
            apiHash,
            phoneId,
            authKey,
            mnemonic
        });
    }
    
    return wallets;
}

function main() {
    const walletCount = 50; // Number of wallets to generate
    const wallets = generateWallets(walletCount);
    
    // Save wallets to a file
    const outputFileName = 'telegram_wallets.json';
    fs.writeFileSync(outputFileName, JSON.stringify(wallets, null, 2));
    
    console.log(`Generated ${walletCount} wallets and saved to ${outputFileName}`);
}

main();
