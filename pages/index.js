import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Overview_icon from '../src/components/icon/Overview_icon';
import Transfer_icon from '../src/components/icon/Transfer_icon';
import Withdraw_icon from '../src/components/icon/Withdraw_icon';
import Deposit_icon from '@/src/components/icon/Deposit_icon';
import DeleteAccount_icon from '@/src/components/icon/DeleteAccount_icon';

import Register from '@/src/components/Register';
import Overview from '../src/components/Overview';
import Transfer from '@/src/components/Transfer';
import Withdraw from '@/src/components/Withdraw';
import Deposit from '@/src/components/Deposit';

import { useIsMounted } from '../src/hooks/useIsMounted';
import useAccountName from '@/src/hooks/useAccountName';
import DeleteAccount from '@/src/components/DeleteAccount';

import { useDisclosure } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function Home() {
    const [menu, setMenu] = useState("");
    const mounted = useIsMounted();
    const { address, isConnected } = useAccount();
    const { data } = useAccountName(address ? address : "")

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    // <p>{mounted ? address : null}</p>

    const callPage = () => {
        // data(name) is empty when don't create account -> must create accout before starting
        if (data == "") {
            return <Register />
        }
        if (menu == "") {
            setMenu("overview")
        } else if (menu == "overview") {
            return <Overview />
        } else if (menu == "deposit") {
            return <Deposit />
        } else if (menu == "transfer") {
            return <Transfer />
        } else if (menu == "withdraw") {
            return <Withdraw />
        } 

    }

    return (
        <>
            <div className='h-screen w-full bg-cover flex flex-row justify-center items-center font-Kanit' style={{ backgroundImage: `url("/Background.png")` }}>
                <div className="flex flex-row justify-center items-center bg-white/40 w-[1700px] h-[900px] rounded-[30px] gap-[50px]">
                    <div className="flex flex-col gap-[26px]">
                        <div className={`w-[253px] h-[87px] ${menu == "overview" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("overview")}>
                            <Overview_icon color={` ${menu == "overview" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "overview" ? "text-[#7C56A9]" : ""}`}>Overview</p>
                        </div>
                        <div className={`w-[253px] h-[87px] ${menu == "deposit" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("deposit")}>
                            <Deposit_icon color={` ${menu == "deposit" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "deposit" ? "text-[#7C56A9]" : ""}`}>Deposit</p>
                        </div>
                        <div className={`w-[253px] h-[87px] ${menu == "transfer" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("transfer")}>
                            <Transfer_icon color={` ${menu == "transfer" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "transfer" ? "text-[#7C56A9]" : ""}`}>Transfer</p>
                        </div>
                        <div className={`w-[253px] h-[87px] ${menu == "withdraw" ? "bg-white/30" : "bg-white/0"} hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => setMenu("withdraw")}>
                            <Withdraw_icon color={` ${menu == "withdraw" ? "#7C56A9" : "#000000"}`} />
                            <p className={`text-[30px] ${menu == "withdraw" ? "text-[#7C56A9]" : ""}`}>Withdraw</p>
                        </div>
                        <div className={`w-[253px] h-[87px] "bg-white/0" hover:bg-white/30 rounded-[10px] flex flex-row justify-center items-center gap-[32px] transition duration-500 cursor-pointer`} onClick={() => (onOpen() )}>
                            <DeleteAccount_icon />
                            <div className="flex flex-col items-center">
                                <p className={`text-[30px] text-[#FF0000]`}>Delete</p>
                                <p className={`text-[30px] text-[#FF0000]`}>Account</p>
                            </div>
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
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader className="text-[#FF0000]">Do you want delete Account?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to delete of your account, Your all money will be withdrawed after   
                        enter "Yes"
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
