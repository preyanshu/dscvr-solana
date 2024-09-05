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
  BN,
  Program,
} from "@coral-xyz/anchor";
import { Buffer } from "buffer";
import useCanvasWallet from "./CanvasWalletProvider";

export const MintData1 = ({setMintData}) => {
    const { walletAddress, signTransaction } = useCanvasWallet();
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    async function init(){

        // console.log("Initializing AnchorProvider", walletAddress);

        const provider = new AnchorProvider(connection, {
            publicKey: new PublicKey('FxU6YSqksPvQNxKFQmPbxkVYafz4VNDJ6dLd93BPXiZR'),
            signTransaction,
        }, {
            commitment: "confirmed",
        });

        const program = new Program(idl, provider);
        // console.log("fsvdfvdfvdfvd",program);

        const res = await program?.account?.database.fetch(new PublicKey('8oPtWBtTKohRGqUDwC2f5JFUgUH5mqBy1vAPzBFFGhzH'))
        console.log("a",res);

        setMintData(res);

    }
useEffect(() =>{
    init()
}, [walletAddress])
    
        return (
            <div>
            </div>
        )
    }