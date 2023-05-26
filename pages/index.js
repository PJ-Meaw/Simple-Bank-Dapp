import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useIsMounted } from './hooks/useIsMounted';

export default function Home() {

    const mounted = useIsMounted();
    const {address} = useAccount();
    return (
        <>
            <div className='h-screen'>
                <div className=' w-full h-[60px]  
                 bg-gray-400'>
                    <div className='w-full h-full 
                                    flex justify-between items-center
                                    px-[15%]'>
                        <h1 className='ms-[15px] 
                                        font-Kanit text-[24px]'>BankBlock</h1>
                        <div className='me-[15px]'> 
                            <ConnectButton showBalance={true}/>
                        </div>
                    </div>
                </div>
            
                <div className=' w-full h-full bg-cover ' style={{ backgroundImage: `url("/bg.jpg")` }}>
                    <div className=" text-red-600">Test</div>
                    <p>{mounted ? address:null}</p>
                </div>
            </div>
            
        </>
    )
}
