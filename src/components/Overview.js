import { ConnectButton } from '@rainbow-me/rainbowkit';
import  List_transaction  from '../components/List_transaction';
export default function Overview() {

    return (
        <>
            <div className='mx-[92px] my-[55px] font-Kanit '>
                <div className="flex flex-row justify-between ">
                    <p className=' text-[40px]'>Overview</p>
                    <ConnectButton/>
                </div>
                <div className=' w-[421px] h-[56px] rounded-[15px] bg-[#4566E1] flex justify-between items-center text-white font-normal text-[20px] my-[60px]'>
                    <h1 className='ms-[18px]'>Current Balance :  </h1>
                    <h1 className='me-[18px]'>3,000,000 GoerliETH</h1>
                </div>
                <div>
                    <h1 className='text-[28px] mb-[32px]'>Recent transactions</h1>
                    <div className='flex justify-start items-center border-b-2 border-[#D9D9D9] pb-[5px] text-[#8F8F8F]'>
                        <p className='me-[225px]'>Transaction Hash</p>
                        <ul className='flex flex-row justify-center items-center gap-[90px]'>
                            <li>Value</li>
                            <li>Txn Fee</li>
                            <li className='ps-[40px]'>Date</li>
                            <li className='ps-[25px]'>Time</li>
                            <li className='ps-[60px]'>Detail</li>
                        </ul>
                    </div>
                    <div className='h-[345px] overflow-y-auto px-2'>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                        <List_transaction hash ="0x347347f27374199...." value = " 0 " txn = " 0.00993209 " date = " 25/9/64 " time = " 9.00 PM " detail = "#"/>
                    </div>
                </div>
            </div>
        </>
    )
}
