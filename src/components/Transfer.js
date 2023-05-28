import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function Transfer() {

    return (
        <>
            <div className='mx-[92px] my-[55px] font-Kanit '>
                <div className="flex flex-row justify-between ">
                    <p className=' text-[40px]'>Transfer</p>
                    <ConnectButton/>
                </div>
                <div className=' w-[345px] h-[56px] rounded-[15px] bg-[#4566E1] flex justify-start items-center text-white font-normal text-[20px] my-[60px]'>
                    <h1 className='ms-[18px]'>Current Balance :  </h1>
                    <h1 className='ms-[10px]'>3,000,000.1234</h1>
                </div>
                <div>
                    <h1 className='text-[28px] mb-[32px]'>Recent transactions</h1>


                </div>
            </div>
        </>
    )
}
