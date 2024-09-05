import WalletComponent from './WalletComponent'
import { CanvasWalletProvider } from './CanvasWalletProvider';
import { MintedTokens } from './MintedTokens';
import { useEffect, useState } from 'react';
import NFTDisplay from './NftTokens';
import {MintData1} from './MintData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [MintData, setMintData] = useState(null);
  console.log(MintData)
  return (
    <CanvasWalletProvider>
      <div className="container h-full">
        <div className="flex justify-center gap-5 w-full mt-5 max-h-[280px]">
          <div className={`${walletAddress && "border-slate-700 bg-gray-800 border"} rounded-lg  p-4`}>
            <WalletComponent setWalletAddress={setWalletAddress} />
          </div>

          {walletAddress && <div className='border border-slate-700 rounded-lg p-4'>
            {MintData && <MintedTokens MintData={MintData} />}
          </div>}
        </div>
        {walletAddress && <div className='w-full flex flex-col justify-center mt-5'>
          {MintData && <NFTDisplay mintData={MintData} />}
        </div>}
        <MintData1 setMintData={setMintData} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition="bounce"
        />
      </div>
    </CanvasWalletProvider>
  )
}

export default App