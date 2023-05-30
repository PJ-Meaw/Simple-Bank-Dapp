import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import { contract } from '@/contractConfig';
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount, useWaitForTransaction } from 'wagmi';
import { parseUnits } from 'viem';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import Router from 'next/router'

export default function Transfer({balance}) {
    const [success, setSuccess] = useState(false);
    const [oppositeAdress, setOppsiteAddress] = useState(null);
    const [amount, setAmount] = useState("");

    const { address } = useAccount();
    const toast = useToast()


    const { data: accountName, isSuccess: ownerExist } = useContractRead({
        address: contract.address,
        abi: contract.abi,
        functionName: 'getAccountName',
        args: [address]
    });

    const { data: oppositename, isSuccess: oppositeExist } = useContractRead({
        address: contract.address,
        abi: contract.abi,
        functionName: 'getAccountName',
        args: [oppositeAdress]
    });


    const { config } = usePrepareContractWrite({
        address: contract.address,
        abi: contract.abi,
        functionName: 'transfer',
        args: [oppositeAdress, parseUnits(amount, 18)]
    });

    const { writeAsync, data: transactionData, isSuccess: transferSuccessful} = useContractWrite(config);

    const waitForTransaction = useWaitForTransaction({
        confirmations: 5,
        hash: transactionData?.hash
    });

    const successful = () => {
        toast({
          title: 'Transfer Success.',
          description: "We've Transfer coin from your current balance to friend.",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
    }
    useEffect(()=>{
        if(waitForTransaction.isSuccess == true) {
            setSuccess(!success);
            //alert("Send Success");
            successful();
        }
    },[waitForTransaction])

    const handleSend = async () =>{
        
        try {
            await writeAsync?.();
            
        } catch (err) {
            alert("Send Failed");
        }
    }

    const handleBack = () =>{
        setSuccess(!success);
        Router.reload(window.location.pathname)
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
                                            {ownerExist && <p> {accountName}</p>}
                                        </div>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[25px]'>Address:</label>
                                            { address && <p>{address}</p> }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center mt-[10px]'>
                                    <div className=' text-[25px] ms-[23px]'>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[51px]'>Name:</label>
                                            {oppositeExist && <p> {oppositename}</p>}
                                        </div>
                                        <div className='flex flex-row'>
                                            <label className=' font-bold me-[25px]'>Address:</label>
                                            { oppositeAdress && <p>{oppositeAdress}</p> }
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
                                <input onChange={e=>setOppsiteAddress(e.target.value)} type="text" className=' w-[671px] h-[35px] border-[1px] rounded-[10px] border-[#60C3E1] p-[10px] outline-none' />
                            </div>
                            <div className='flex flex-row items-center mt-[23px]'>
                                <label className='me-[17px] text-[32px]'>Amount :</label>
                                <input onChange={e=>setAmount(e.target.value)}type="number" className=' w-[235px] h-[35px] border-[1px] rounded-[10px] border-[#60C3E1] p-[10px] outline-none' />
                            </div>
                        </div>
                            <button disable={waitForTransaction.isLoading} className=' w-[186px] h-[58px] mt-[60px] bg-[#74DE72] rounded-[20px] text-[25px] text-white hover:bg-[#429740] transition duration-300' onClick={handleSend} >{waitForTransaction.isLoading ? "please waiting" : "transfer"}</button>
                    </div>
                </>
                }
                {/* { 
                    waitForTransaction.isLoading ? 
                    <>
                        <div className="w-full h-full flex flex-row justify-center items-center font-Kanit text-[40px]">Loading <div className="ml-[20px]"><CircularProgress isIndeterminate color='#000000' /></div></div>  
                    </>
                    :
                    <>
                        <div></div>
                    </>
                } */}
                
            </div>
        </>
    )
}
