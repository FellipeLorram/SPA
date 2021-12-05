//require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

/*
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        app.emit('Conectado');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const { middlewareGlobal } = require('./middlewares/middlewareGlobal')



const sessionOptions = session({
    secret: 'asdfghjklç',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
});
app.use(sessionOptions);
app.use(flash());
app.use(helmet());
*/
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.use(express.urlencoded({ extended: true }))


app.set('views', path.resolve(__dirname, 'src', 'views'));


//app.use(middlewareGlobal);
app.get('/*', (req, res) => {
    res.render(path.resolve(__dirname, "frontend", "index.ejs"))
});



app.listen(process.env.PORT || 5000, () => {
    console.log('http://localhost:5000');
})

