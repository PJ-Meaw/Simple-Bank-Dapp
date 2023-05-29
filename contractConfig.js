export const contract = {
                            address: "0x48B4Bba7323528b6B916c232a2e86d5505b69a88",
                            abi: [
                                {
                                    "inputs": [
                                        {
                                            "internalType": "address",
                                            "name": "_acc",
                                            "type": "address"
                                        }
                                    ],
                                    "name": "checkBalance",
                                    "outputs": [
                                        {
                                            "internalType": "uint256",
                                            "name": "",
                                            "type": "uint256"
                                        }
                                    ],
                                    "stateMutability": "view",
                                    "type": "function"
                                },
                                {
                                    "inputs": [],
                                    "name": "closeAccount",
                                    "outputs": [],
                                    "stateMutability": "nonpayable",
                                    "type": "function"
                                },
                                {
                                    "inputs": [],
                                    "name": "deposit",
                                    "outputs": [],
                                    "stateMutability": "payable",
                                    "type": "function"
                                },
                                {
                                    "inputs": [
                                        {
                                            "internalType": "address",
                                            "name": "_acc",
                                            "type": "address"
                                        }
                                    ],
                                    "name": "getAccountName",
                                    "outputs": [
                                        {
                                            "internalType": "string",
                                            "name": "",
                                            "type": "string"
                                        }
                                    ],
                                    "stateMutability": "view",
                                    "type": "function"
                                },
                                {
                                    "inputs": [],
                                    "name": "getBankBalance",
                                    "outputs": [
                                        {
                                            "internalType": "uint256",
                                            "name": "",
                                            "type": "uint256"
                                        }
                                    ],
                                    "stateMutability": "view",
                                    "type": "function"
                                },
                                {
                                    "inputs": [
                                        {
                                            "internalType": "string",
                                            "name": "name",
                                            "type": "string"
                                        }
                                    ],
                                    "name": "registerAccount",
                                    "outputs": [],
                                    "stateMutability": "nonpayable",
                                    "type": "function"
                                },
                                {
                                    "inputs": [
                                        {
                                            "internalType": "address",
                                            "name": "_to",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "_amount",
                                            "type": "uint256"
                                        }
                                    ],
                                    "name": "transfer",
                                    "outputs": [],
                                    "stateMutability": "nonpayable",
                                    "type": "function"
                                },
                                {
                                    "inputs": [
                                        {
                                            "internalType": "uint256",
                                            "name": "amount",
                                            "type": "uint256"
                                        }
                                    ],
                                    "name": "withdraw",
                                    "outputs": [],
                                    "stateMutability": "nonpayable",
                                    "type": "function"
                                }
                            ]
                        }