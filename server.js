const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({  });

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));
});

