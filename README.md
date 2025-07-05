# TON Wallet Generator

This tool generates multiple TON (The Open Network) wallets with mnemonic phrases, private keys, and addresses. The generated wallets are saved to a JSON file for easy access.

## Prerequisites

- Node.js and npm installed on your system

## Installation

1. Clone this repository or download the script.
2. Run `npm install` to install the required dependencies.

## Usage

1. Run the script with `node generate_wallets.js`.
2. The script will generate 50 TON wallets by default.
3. Wallet information (address, private key, and mnemonic phrase) will be saved to `ton_wallets.json`.

## Output Format

The generated `ton_wallets.json` file will contain an array of wallet objects, each with the following properties:
- `address`: The TON wallet address
- `privateKey`: The private key in hexadecimal format
- `mnemonic`: The 24-word mnemonic phrase for wallet recovery

## Disclaimer

This tool is for educational and testing purposes only. Always secure your private keys and mnemonic phrases, and do not share them with anyone. Use at your own risk.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
