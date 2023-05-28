import { useContractWrite, usePrepareContractWrite } from "wagmi"

import abis from "../../contracts/abis.json" 

export default function useRegister(name) {
    const {config} = usePrepareContractWrite({
        address: "0x48B4Bba7323528b6B916c232a2e86d5505b69a88",
        abi:abis,
        functionName: "registerAccount",
        args: [name],
    });

    const {data, isLoading, isError, write} = useContractWrite(config)

    return {data, isLoading, isError, write}
    
}
