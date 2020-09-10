const express = require('express')
const path = require('path')
const app = express()
const port = 8080;



// For serving static files
app.use('/static', express.static('static'))

// set the Template Engine as pug
app.set('view engine', 'pug')

// set the Views Directory
app.set('views', path.join(__dirname, 'views'))

// our Pug Demo end_point
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey NaheenBhai Lovers', message: 'Glad to see you guys & Love you!' })
});



app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});
app.get('/about', (req, res)=>{
    res.send('this is my first Express About app with harry')
})
app.post('/about', (req, res)=>{
    res.send('this is a post request my first Express About app with harry')
})
app.post('/this', (req, res)=>{
    res.status(404).send("this page isn't found")
})
app.put('/about', (req, res)=>{
    res.send('hola boys...this is put request')
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})