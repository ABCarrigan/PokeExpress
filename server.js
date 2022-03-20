require('dotenv').config()
const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
//mongoDB connection
const db = require('./models/db');
db.once('open', () => {
    console.log('server.js: connected to mongo')
})
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    })
})



//connection
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port')
})