import { useEffect, useState } from "react"
import useRegister from "../hooks/useRegister";
import Router from 'next/router'
import { useWaitForTransaction } from "wagmi";
import { useToast } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function Register() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true)
    const { data, write: handleRegister } = useRegister(name)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
    const toast = useToast()

    const handleCreateAccount = () => {
        if (name.length > 0) {
            handleRegister();
            setLoading(true)
        } else {
            toast({
                // title: 'Account created.',
                description: "Please, type your name",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const successful = () => {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        Router.reload(window.location.pathname)
    }
    // useEffect(() => {

    //     console.log(data)
    //     data?.wait().then((res) => {
    //         alert("Register successful!")
    //         setLoading(false)
    //         Router.reload(window.location.pathname)
    //     })
    // }, [data])

    return (
        <>
            {
                isLoading ? <div className="w-full h-full flex flex-row justify-center items-center font-Kanit text-[40px]">Loading <div className="ml-[20px]"><CircularProgress isIndeterminate color='#000000' /></div></div>
                    :
                    <div className="w-full h-full flex flex-row justify-center items-center font-Kanit">
                        <div className="flex flex-col items-center">
                            <p className="text-[64px] text-[#7C56A9] mb-[80px]">Create your account</p>
                            <input type="text" className="mb-[27px] rounded-[20px] border-[2px] border-[#60C3E1] w-[465px] h-[55px] pl-[39px] outline-none text-[24px] "
                                placeholder="your name" onChange={(e) => setName(e.target.value)} />
                            <p className="mb-[66px] text-[#565656] text-[20px]">Please create your account before starting &gt;&lt;</p>
                            <button className="w-[247px] h-[53px] bg-[#A694F6] text-white text-[22px] rounded-[40px]" onClick={handleCreateAccount}>Start Simple bank !</button>
                        </div>
                    </div>
            }
            {
                isSuccess ? successful() : ""
            }
        </>
    )
}
