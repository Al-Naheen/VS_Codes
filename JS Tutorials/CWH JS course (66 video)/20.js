console.log('This is tut 20');

// Inspect--> Application --> localStorage & sessionStorage
// typeof localStorage--> Object

// Array--> JSON.stringify(val).parse()
let impArray = ['adrak', 'pyaz', 'bhindi'];

// Add a key-value pair inside localStorage
localStorage.setItem('Name', 'Naheen');
localStorage.setItem('Name2', 'Harry');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)


// sessionStorage--> localStorage r All Methods
            //   --> Browser End, All Data gayeb
sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.parse(JSON.stringify(impArray)));
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray).parse());