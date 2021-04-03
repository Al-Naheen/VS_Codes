const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());

console.log(os.endianness());
console.log(os.getPriority());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.tmpdir());
console.log(os.type());
