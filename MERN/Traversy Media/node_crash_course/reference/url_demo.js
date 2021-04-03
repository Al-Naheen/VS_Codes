const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active');

console.log(myUrl);
// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);


console.log(typeof (myUrl.searchParams)); // object
console.log(typeof ['lol', 90]); // object


// Loop through params... But how a Object is mapping via forEach
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
