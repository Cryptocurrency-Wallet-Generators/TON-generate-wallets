# Telegram Generate Wallets

This repository allows you to generate 50 Telegram wallets along with their associated 24-word secret phrases, API credentials, and authentication keys.

## Setup Instructions

### 1. Fork the Repository
Fork this repository to your own GitHub account.

### 2. Configure Repository Visibility
1. Navigate to **Settings**.
2. Scroll down to **Change repository visibility**.
3. Set the visibility to **Private**.

### 3. Adjust Workflow Permissions
1. Go to **Settings** > **Actions** > **General**.
2. Scroll down to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Click **Save**.

### 4. Run the Workflow
1. Navigate to **Actions** > **Generate Telegram Wallets**.
2. Click the **Run Workflow** dropdown.
3. Select **Run Workflow** to generate the wallets.

### The wallets and secrets will be saved in the file `telegram_wallets.json`.

## About Telegram Wallets
Each generated wallet includes:
- Wallet ID: A unique identifier for the wallet
- API ID and API Hash: Simulated API credentials (similar to what you would get from Telegram)
- Phone ID: A unique phone number-like identifier 
- Auth Key: An authentication key used in the MTProto protocol
- Mnemonic: A 24-word secret phrase for wallet recovery

## License
This project is licensed under the terms of the [MIT License](LICENSE.txt).

## Notes
- Ensure your repository is set to **Private** to maintain the security of the generated wallets and secret phrases.
- These are simulated Telegram wallets for development and testing purposes.
