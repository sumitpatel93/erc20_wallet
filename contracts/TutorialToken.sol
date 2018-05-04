pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract TutorialToken is StandardToken {
    string public name = 'TutorialToken';
    string public symbol = 'TT';
    uint8 public decimals = 18;
    uint public INITIAL_SUPPLY =  1000;
    address public owner;

    function TutorialToken() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
    function owner() public {
          owner = msg.sender;

    }
   
}
