const express = require('express');
const app = express(),
    bodyParser = require('body-parser'),
    expressLayout = require('express-ejs-layouts'),
    cors = require('cors'),
    path = require('path'),
    home = require('./src/routes/home'),
    academic = require('./src/routes/academic'),
    abbuabout = require('./src/routes/abbuabout'),
    port = 3000;

////////////////////////
app.use(bodyParser.json());
app.use(cors());
app.use(expressLayout);

// views engine setup
let stylePath = path.join(__dirname,'/src/style/mdb');
let slickPath = path.join(__dirname,'/src/style/slick');
let imagesPath = path.join(__dirname,'/src/images');
app.use(express.static(stylePath));
app.use(express.static(slickPath));
app.use(express.static(imagesPath));
app.use(express.static("src"));
app.use(express.static("template"));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


// Home page 
app.get('/',(req,res) =>
{
    res.render('./home/home');
});
app.get('/en',(req,res) =>
{
    res.render('index');
});
app.get('/ar',(req,res) =>
{
    res.render('index');
});

// Pages Routes

app.use(home);
app.use(abbuabout);
app.use(academic);
// app.use(center);
// app.use(important);
// app.use(researsh);
// app.use(student);

app.listen(port,() => { console.log(`server is listening on port ${port}`) });