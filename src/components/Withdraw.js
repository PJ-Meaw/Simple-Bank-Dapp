import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function Withdraw() {
    const handleSend = () =>{
        alert("send saccess");
    }

    return (
        
        <>
            <div className='mx-[92px] my-[55px] font-Kanit '>
                <div className="flex flex-row justify-between ">
                    <p className=' text-[40px]'>Withdraw</p>
                    <ConnectButton/>
                </div>
                <div className=' w-[345px] h-[56px] rounded-[15px] bg-[#4566E1] flex justify-start items-center text-white font-normal text-[20px] my-[60px]'>
                    <h1 className='ms-[18px]'>Current Balance :  </h1>
                    <h1 className='ms-[10px]'>3,000,000.1234</h1>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] mb-[32px] text-[#7C56A9] '>Current Balance to Send coin </h1>
                    <div className='flex flex-row items-center'>
                        <label className='me-[17px] text-[32px]'>Amount :</label>
                        <input type="number" className=' w-[235px] h-[35px] border-[1px] rounded-[10px] border-[#60C3E1] p-[10px] outline-none' />
                    </div>
                    <button className=' w-[186px] h-[58px] mt-[60px] bg-[#60C3E1] rounded-[20px] text-[25px] text-white hover:bg-[#1fafdb] transition duration-300' onClick={handleSend} >Send coin</button>
                </div>
            </div>
        </>
    )
}
