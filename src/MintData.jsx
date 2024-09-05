import React, { useEffect } from "react";
import idl from "./idl.json";
import {
    PublicKey,
    clusterApiUrl,
    Connection,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import {
    AnchorProvider,
    Program,
} from "@coral-xyz/anchor";
import { Buffer } from "buffer";
import useCanvasWallet from "./CanvasWalletProvider";

// This is to fix an issue where Buffer might not be available globally
window.Buffer = Buffer;

export const MintData1 = ({ setMintData }) => {
    const { walletAddress, signTransaction } = useCanvasWallet();
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    async function init() {
        try {
            if (!walletAddress) {
                console.error("Wallet address is not available");
                return;
            }

            const provider = new AnchorProvider(connection, {
                publicKey: new PublicKey(walletAddress),
                signTransaction,
              }, {
                commitment: "confirmed",
              });

            const program = new Program(idl, provider);

            const res = await program.account.database.fetch(
                new PublicKey('8oPtWBtTKohRGqUDwC2f5JFUgUH5mqBy1vAPzBFFGhzH')
            );
            console.log("Fetched data:", res);

            setMintData(res);
        } catch (error) {
            console.error("Error initializing program:", error);
        }
    }

    useEffect(() => {
        if (walletAddress) {
            init();
        }
    }, [walletAddress]);

    return <div></div>;
};
