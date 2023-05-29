import { useContractRead } from "wagmi"
import abis from "../../contracts/abis.json"

export default function useAccountName(address) {
    const {data, isLoading, isError, isSuccess } = useContractRead({
        address: "0x48B4Bba7323528b6B916c232a2e86d5505b69a88",
        abi: abis,
        functionName : "getAccountName",
        args: [address],
    });

    return {data, isLoading, isError, isSuccess };
}
