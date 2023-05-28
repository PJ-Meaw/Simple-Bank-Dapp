export default function List_transaction({hash,value,txn,date,time,detail}) {

    return (
        <>
            <div  className='flex justify-between items-center text-[20px] my-[30px]'>
                <div>{hash}</div>
                <div className='flex flex-row justify-center items-center gap-[80px]'>
                    <div>{value}</div>
                    <div>{txn}</div>
                    <div>{date}</div>
                    <div>{time}</div>
                    <div className=' text-[#60C3E1] border-2 border-[#60C3E1] h-[53px] w-[141px] rounded-[40px] flex justify-center items-center'><a href="`${detail}`">Detail</a></div>
                </div>
            </div>
        </>
    )
}
