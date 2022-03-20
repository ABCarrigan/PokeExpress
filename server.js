require('dotenv').config()
const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
//mongoDB connection
const db = require('./models/db');

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

app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) =>{
        if(!error) {
            res.render('Edit', { pokemon: foundPokemon })
        } else {
            res.send({ msg: err.message })
        }
    })
})
// second portion of edit route
app.put('/pokemon/:id', (req, res) =>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundPokemon) =>{
        res.redirect('/pokemon')
    })
})


db.once('open', () => {
    console.log('server.js: connected to mongo')
})
//connection
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port')
})