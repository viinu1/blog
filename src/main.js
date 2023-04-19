const path =require('path')
const express = require("express");
const morgan = require("morgan");
const {engine} = require ('express-handlebars')
const methodOverride = require('method-override')

const app = express();
const port = 3000;
const route = require('./routes')
const db = require('./config/db')

// connect db
db.connect();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'))
// http logger
// app.use(morgan("combined"));

// template engine
app.engine('hbs',engine({
  extname:'.hbs',
  helpers:{
    sum:(a,b) => a+b,
  }
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));
// routes init
route(app)
// host port
app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
