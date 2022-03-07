const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({  });

app.use(require('./controllers/'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));








app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});