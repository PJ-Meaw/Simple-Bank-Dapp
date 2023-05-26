import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-[60px] bg-gray-400'>
                <div className='w-full h-full flex justify-between items-center px-[15%]'>
                    <h1 className='ms-[15px] font-Kanit text-[24px]'>BankBlock</h1>
                    <div className='me-[15px]'>
                        <ConnectButton showBalance={true} />
                    </div>
                </div>
            </div>
        </>
    )
}
