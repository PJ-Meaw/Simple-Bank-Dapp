//SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.15;

contract BankContract {
    mapping(address => uint256) private balances;
    mapping(address => string) private names;

    function registerAccount (string memory name) public {
        require(bytes(name).length > 0, "Error Name Cannot Empty");
        require(bytes(names[msg.sender]).length == 0, "Error Account already registered");
        names[msg.sender] = name;
    } 

    function deposit() public payable {
        require(bytes(names[msg.sender]).length > 0, "Error Account not register");
        balances[msg.sender] += msg.value;
    }

    function transfer(address _to, uint256 _amount) public {
        require(bytes(names[_to]).length > 0, "Error don't have account you would like to sent");
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function closeAccount() public {
        require(bytes(names[msg.sender]).length > 0, "Error Account not register");
        if(balances[msg.sender] > 0){
            withdraw(balances[msg.sender]);
        }
        delete names[msg.sender];
    }

    function checkBalance(address _acc) public view returns (uint256){
        return balances[_acc];
    }

    function getAccountName (address _acc) public view returns (string memory){
        return names[_acc];
    }

    function getBankBalance () public view returns (uint256) {
        return address(this).balance;
    }
}