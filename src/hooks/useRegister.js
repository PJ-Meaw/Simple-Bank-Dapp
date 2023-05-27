import { useContractWrite, usePrepareContractWrite } from "wagmi"

// import ABI (wait contract is deployed)


export default function useRegister(name) {
    const {config} = usePrepareContractWrite({
        address: "",
        abi:"",
        functionName: "",
        args: [name],
    });

    const {data, isLoading, isError, write} = useContractWrite(config)

    return {data, isLoading, isError, write}
    
}
