import { Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function List_transaction({ hash, value, txn, timeStamp, detail }) {
    const [currentdate, setCurrentdate] = useState(new Date())
    useEffect(()=>{
        const currentdate = new Date(parseInt(timeStamp));
        setCurrentdate(currentdate);
        console.log(currentdate)
        // console.log()
    },[])

    return (
        <>
            <div className='flex justify-between items-center text-[20px] my-[30px]'>
                <Tooltip hasArrow label={hash} bg='#7C56A9' placement='top-start' openDelay={300} borderRadius="10px" p="10px" width="100%">
                    <div className="truncate w-[230px]">{hash}</div>
                </Tooltip>
                <div className='flex flex-row justify-center items-center gap-[80px]'>
                    <div>{value/Math.pow(10,18)}</div>
                    <div>{txn}</div>
                    <div>{currentdate?.getDate()}/{currentdate?.getMonth()}/{currentdate?.getFullYear()}</div>
                    <div>{currentdate?.getHours()} : {currentdate?.getMinutes()}</div>
                    <div className=' text-[#60C3E1] border-2 border-[#60C3E1] h-[53px] w-[141px] rounded-[40px] flex justify-center items-center'><a href="`${detail}`">Detail</a></div>
                </div>
            </div>
        </>
    )
}
