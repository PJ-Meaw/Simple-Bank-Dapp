import { Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function List_transaction({ hash, value, txn, timeStamp, address }) {
    const [currentdate, setCurrentdate] = useState(new Date())
    useEffect(()=>{
        const currentdate = new Date(parseInt(timeStamp*1000));
        setCurrentdate(currentdate);
        console.log(currentdate)
        // console.log()
    },[])
    const baseURL = "https://goerli.etherscan.io/tx/"

    return (
        <>
            <div className='flex justify-between items-center text-[20px] my-[30px]'>
                <Tooltip hasArrow label={hash} bg='#7C56A9' placement='top-start' openDelay={300} borderRadius="10px" p="10px" width="100%">
                    <div className="truncate w-[230px]">{hash}</div>
                </Tooltip>
                <div className='flex flex-row justify-center items-center gap-[80px]'>
                    <div>{value/Math.pow(10,18)}</div>
                    <div>{txn}</div>
                    <div>{currentdate?.getDate()}/{ (currentdate?.getMonth())+1}/{currentdate?.getFullYear()}</div>
                    <div>{currentdate?.getHours()}:{ ( parseInt(currentdate?.getMinutes())) > 9 ? currentdate?.getMinutes() : `0${currentdate?.getMinutes()}`}:{currentdate?.getMinutes()}</div>
                    <a href={baseURL+hash}  target="_blank" ><button className=' text-[#60C3E1] border-2 border-[#60C3E1] h-[53px] w-[141px] rounded-[40px] flex justify-center items-center cursor-pointer'>Detail</button></a>
                </div>
            </div>
        </>
    )
}
