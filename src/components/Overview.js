import { ConnectButton } from '@rainbow-me/rainbowkit';
import List_transaction from '../components/List_transaction';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Overview({ balance, address }) {
    const [data, setData] = useState();
1685177940
    useEffect(() => {
        const getTransaction = async () => {
            const res = await axios.get("https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0x48B4Bba7323528b6B916c232a2e86d5505b69a88&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken")
            const result = res.data.result?.filter((value) => {
                console.log(value.from + " "  + address.toLowerCase())
                return (value.from == address.toLowerCase())
            })
            setData(result)
            console.log(result)
        }
        getTransaction()
    }, [])
    return (
        <>
            <div className='mx-[92px] my-[55px] font-Kanit '>
                <div className="flex flex-row justify-between ">
                    <p className=' text-[40px]'>Overview</p>
                    <ConnectButton />
                </div>
                <div className=' w-[345px] h-[56px] rounded-[15px] bg-[#4566E1] flex justify-start items-center text-white font-normal text-[20px] my-[60px]'>
                    <h1 className='ms-[18px]'>Current Balance :  </h1>
                    <h1 className='ms-[10px]'>{(parseFloat(balance) / Math.pow(10, 18)).toFixed(4)}</h1>
                </div>
                <div>
                    <h1 className='text-[28px] mb-[32px]'>Recent transactions</h1>
                    <div className='flex justify-start items-center border-b-2 border-[#D9D9D9] pb-[5px] text-[#8F8F8F]'>
                        <p className='me-[205px]'>Transaction Hash</p>
                        <div className='flex flex-row justify-center items-center gap-[90px]'>
                            <div>Value</div>
                            <div>Txn Fee</div>
                            <div className='ps-[40px]'>Date</div>
                            <div className='ps-[25px]'>Time</div>
                            <div className='ps-[60px]'>Detail</div>
                        </div>
                    </div>
                    <div className='h-[345px] overflow-y-auto px-2'>
                        {
                            data?.map((result, i) => {
                                return <List_transaction hash={result.hash} value={result.value} txn={ ((result.gasUsed *result.gasPrice) / Math.pow(10,18)).toFixed(8) } timeStamp={result.timeStamp} address={address.toLowerCase()} key={i} />
                            })
                        }
                        {/* <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" />
                        <List_transaction hash="0x347347f27374199...." value=" 0 " txn=" 0.00993209 " date=" 25/9/64 " time=" 9.00 PM " detail="#" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
