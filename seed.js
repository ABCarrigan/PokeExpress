require('dotenv').config()
const Pokemon = require('./models/pokemon')
const db = require('./models/db')
db.once('open', () => {
    console.log('seeds.js: connected to mongo, initializing seed...')
})

const seedPokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ]
 const seedDB = async () => {
    await Pokemon.deleteMany({})
    await Pokemon.insertMany(seedPokemon)
}

seedDB().then(() => {
    console.log('Seed intialized, closing connection to mongoDB')
    db.close()
})