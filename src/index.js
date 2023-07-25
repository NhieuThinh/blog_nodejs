const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

const route = require('./routes');

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resource/views'));

app.use(morgan('combined'))
app.use(express.static(__dirname + "/public"));

//route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})