import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Overview_icon from '../src/components/icon/Overview_icon';
import Transfer_icon from '../src/components/icon/Transfer_icon';
import Profile_icon from '../src/components/icon/Profile_icon';

import Overview from '../src/components/Overview';
import Transfer from '@/src/components/Transfer';
import Profile from '@/src/components/Profile';
import Register from '@/src/components/Register';

import { useIsMounted } from '../src/hooks/useIsMounted';
import useAccountName from '@/src/hooks/useAccountName';

export default function Home() {
    const [menu, setMenu] = useState("");
    const mounted = useIsMounted();
    const { address, isConnected } = useAccount();
    const { data } = useAccountName(address ? address : "")
    // <p>{mounted ? address : null}</p>

    const callPage = () => {
        // data(name) is empty when don't create account -> must create accout before starting
        if (data == "") {
            return (
                <Register />
            )
        }

        if (menu == "") {
            setMenu("overview")
        } else if (menu == "overview") {
            return (
                <Overview />
            )
        } else if (menu == "transfer") {
            return (
                <Transfer />
            )
        } else {
            return (
                <Profile />
            )
        }

    }

    return (
        <>
            <div className='h-screen w-full bg-cover flex flex-row justify-center items-center font-Kanit' style={{ backgroundImage: `url("/Background.png")` }}>
                <div className="flex flex-row justify-center items-center bg-white/40 w-[1700px] h-[900px] rounded-[30px] gap-[50px]">
                    <div className="flex flex-col gap-[64px]">
                        <div className={`w-[253px] h-[87px] ${menu == "overview" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("overview")}>
                            <Overview_icon color={` ${menu == "overview" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "overview" ? "text-[#7C56A9]" : ""}`}>Overview</p>
                        </div>
                        <div className={`w-[253px] h-[87px] ${menu == "transfer" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("transfer")}>
                            <Transfer_icon color={` ${menu == "transfer" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "transfer" ? "text-[#7C56A9]" : ""}`}>Transfer</p>
                        </div>
                        <div className={`w-[253px] h-[87px] ${menu == "profile" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("profile")}>
                            <Profile_icon color={` ${menu == "profile" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "profile" ? "text-[#7C56A9]" : ""}`}>Profile</p>
                        </div>
                    </div>
                    <div className="w-[1300px] h-[800px] bg-[#FFFCFC] rounded-[30px] drop-shadow-[13px_13px_55px_rgba(0,0,0,0.16)]">
                        {
                            mounted ?
                                isConnected ? callPage() :
                                    <>
                                        <div className="w-full h-full flex flex-row justify-center items-center">
                                            <ConnectButton showBalance={true} />
                                        </div>
                                    </>
                                : null
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
