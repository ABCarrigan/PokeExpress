const React = require('react')

class Index extends React.Component {
    render() {
      return (<div>
          <link rel="stylesheet" href="/css/app.css"/>
          <h1>See all the Pokemon!</h1>
          <div className="pokemonContainer">
              { this.props.pokemon.map((pokeItem,i)=>{
                  return(
                          <li style={{textTransform:'capitalize'}}><a href={`/pokemon/${pokeItem._id}`}>{pokeItem.name}</a></li>
                        )
              })
              }
        </div>
        <nav>
        <a href="/pokemon/new">Create a New Pokemon!</a>
        </nav>          
      </div>
      )
    }
  }

 module.exports = Index