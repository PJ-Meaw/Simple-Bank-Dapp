import { useContractWrite, usePrepareContractWrite } from "wagmi"

import abis from "../../contracts/abis.json" 

export default function useDeposit(amount) {
    const {config} = usePrepareContractWrite({
        address: "0x48B4Bba7323528b6B916c232a2e86d5505b69a88",
        abi:abis,
        functionName: "deposit",
        value: amount.toString(),
    });

    const {data, isLoading, isError, write} = useContractWrite(config)

    return {data, isLoading, isError, write}
    
}
