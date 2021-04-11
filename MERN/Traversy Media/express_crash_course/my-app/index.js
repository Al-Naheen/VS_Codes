const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
const moment = require('moment');

const app = express();


// // Init middleware -- middleware runs on every Req of the App (kind of a Global Object that have access all req.res of the app)
// app.use(logger);


// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // handle Form Submission

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);



// // Set static folder -- entire node tutorial in One Line
// app.use(express.static(path.join(__dirname, 'public')));

// // Simple REST API
// app.get('/test', (req, res) => {
//   // res.send('Hello Everyone')
//   // res.sendFile(path.join(__dirname, '/public', 'about.html'))

//   // this runs only for '/test' req...but middleware runs on every Req of the App
//   console.log(req.url);
//   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl
//     }: ${moment().format()}`);
// })



// Members API Routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
