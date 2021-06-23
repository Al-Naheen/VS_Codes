pragma solidity ^0.8.4;

contract Counter{
    uint public count = 0; // uint -- only positive int
    string public name = 'hello world';
    
    // constructor() public {
    //     count = 0;
    // }
    
    // // if you add PUBLIC in variable then it doesn't need
    // function getCount() public view returns(uint){
    //     return count;
    // }
    
    function incrementCount() public{
        count++ ;
    }
}