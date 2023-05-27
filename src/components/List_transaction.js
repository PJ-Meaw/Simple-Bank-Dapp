export default function List_transaction({hash,value,txn,date,time,detail}) {

    return (
        <>
            <div  className='flex justify-between items-center text-[20px] my-[30px]'>
                <p>{hash}</p>
                <ul className='flex flex-row justify-center items-center gap-[80px]'>
                    <li>{value}</li>
                    <li>{txn}</li>
                    <li>{date}</li>
                    <li>{time}</li>
                    <li className=' text-[#60C3E1] border-2 border-[#60C3E1] h-[53px] w-[141px] rounded-[40px] flex justify-center items-center'><a href="`${detail}`">Detail</a></li>
                </ul>
            </div>
        </>
    )
}
