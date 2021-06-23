pragma solidity ^0.6.0;

contract MyContract {
    string public myString = "Hello, world!";
    bytes32 public myBytes32 = "Hello, world!";
    int public myInt = 1;
    uint public myUint = 1;
    uint256 public myUint256 = 1;
    uint8 public myUint8 = 1;
    address public myAddress = 0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c;
    // We'll cover arrays later
    // We'll cover mappings later

    struct MyStruct {
        uint myUint;
        string myString;
    }

    MyStruct public myStruct = MyStruct(1, "Hello, World!");

    // Local variable
    function getValue() public pure returns(uint) {
        uint value = 1;
        return value;
    }
}