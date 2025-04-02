import { useState } from "react";

declare global {
    interface Window {
        ethereum?: any;
    }
}


const WalletButton: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("MetaMask is required!");
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>
                {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...` : "Connect Wallet"}
            </button>
        </div>
    );
};

export default WalletButton;
