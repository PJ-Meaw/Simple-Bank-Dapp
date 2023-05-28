import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
export default function Transfer({balance}) {
    const [success, setSuccess] = useState(false);
    const handleSend = () =>{
        setSuccess(!success);
        alert("Send Success");
    }
    const handleBack = () =>{
        setSuccess(!success);
        alert("Back to Transfer");
    }

    return (
        <>
            
            <div className='mx-[92px] my-[55px] font-Kanit '>
                {success ? 
                <>
                    <div className=' flex flex-col justify-center items-center' >
                        <img src='/Correct_1.png' className='w-[110px] h-[105px]'></img>
                        <h1 className=' mt-[24px] text-[50px] text-[#7C56A9]'>Transfer Successful !</h1>
                        <div className='flex flex-row gap-[17px] text-[25px] text-[#838383]'>
                            <p>31 May 23</p>
                            <p>7:00 P.M.</p>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-[43px]'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src='/account.png'></img>
                                <img src='/Arrow1.png' className='my-[10px]'></img>
                                <img src='/account.png'></img>
                            </div>
                            <div className='flex flex-col gap-[43px]'>
                                <div className='flex flex-row justify-center items-center '>
                                    <div className=' text-[25px] ms-[23px]'>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[51px]'>Name:</label>
                                            <p>Pathinya and his friends</p>
                                        </div>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[25px]'>Address:</label>
                                            <p>0xD39776289A6F1bc672C7093BAD8A67b84062C4F7</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center mt-[10px]'>
                                    <div className=' text-[25px] ms-[23px]'>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[51px]'>Name:</label>
                                            <p>Jansiri and her friends</p>
                                        </div>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[25px]'>Address:</label>
                                            <p>0xD39776289A6F1bc672C7093BAD8A67b84062C4F7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='w-[314px] h-[58px] mt-[82px] bg-[#DE7272] rounded-[20px] text-white text-[30px] hover:bg-[#af5959] transition-all duration-200' onClick={handleBack}>Back to Transfer</button>
                    </div>
                            
                </> :
                <>
                    <div className="flex flex-row justify-between ">
                        <p className=' text-[40px]'>Transfer</p>
                        <ConnectButton/>
                    </div>
                    <div className=' w-[345px] h-[56px] rounded-[15px] bg-[#4566E1] flex justify-start items-center text-white font-normal text-[20px] my-[60px]'>
                        <h1 className='ms-[18px]'>Current Balance :  </h1>
                        <h1 className='ms-[10px]'>{ (parseFloat(balance)/Math.pow(10,18)).toFixed(4) }</h1>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-[40px] mb-[32px] text-[#7C56A9] '>Send  to</h1>
                        <div className='justify-center'>
                            <div className='flex flex-row items-center'>
                                <label className='me-[17px] text-[32px]'>Address :</label>
                                <input type="text" className=' w-[671px] h-[35px] border-[1px] rounded-[10px] border-[#60C3E1] p-[10px] outline-none' />
                            </div>
                            <div className='flex flex-row items-center mt-[23px]'>
                                <label className='me-[17px] text-[32px]'>Amount :</label>
                                <input type="number" className=' w-[235px] h-[35px] border-[1px] rounded-[10px] border-[#60C3E1] p-[10px] outline-none' />
                            </div>
                        </div>
                            <button className=' w-[186px] h-[58px] mt-[60px] bg-[#74DE72] rounded-[20px] text-[25px] text-white hover:bg-[#429740] transition duration-300' onClick={handleSend} >Transfer</button>
                    </div>
                </>
                }
                
            </div>
        </>
    )
}
