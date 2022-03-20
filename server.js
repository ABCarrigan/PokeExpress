require('dotenv').config()
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')
app.use(express.urlencoded({extended:true}));
//mongoDB connection
const db = require('./models/db')
db.once('open', () => {
    console.log('server.js: connected to mongo')
})
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//express middleware
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
})

//connection
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port');
});