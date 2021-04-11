const moment = require('moment');
const fs = require('fs');
const path = require('path');

// kind of a Global Object that have access all req.res of the app
const logger = (req, res, next) => {
  let requestHistory = `${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}\n`

  // console.log(req);

  fs.appendFile(path.join(__dirname, 'clientHistory.txt'), requestHistory, (err) => {
    if (err) throw err;
    console.log('file updated');
  })

  console.log(requestHistory);
  next();
};

module.exports = logger;
