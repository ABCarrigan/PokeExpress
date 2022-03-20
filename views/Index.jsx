const React = require('react')


const headerStyle = {
    color: '#ffffff',
    backgroundColor: '#960606',
}
const navStyle = {
    backgroundColor: '#ffc6ba',
}

class Index extends React.Component {
   render() {
    const pokeItems = this.props.pokemon.map((pokeItem, i)=>{
        return(
        <li style={{textTransform:'capitalize'}}><a href={`/pokemon/${i}`}>{pokeItem.name}</a></li>
        )
    })    
    return (
        <div>
            <h1 style ={headerStyle}>See all the Pokemon!</h1>
                <ul> 
                {pokeItems}
                </ul> 
                <nav style ={navStyle}>
                <a href="/pokemon/new">Create a New Pokemon!</a>
                </nav>
        </div>
        
     )
    }
 }
 module.exports = Index