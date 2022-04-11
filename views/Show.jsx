const React = require('react')
class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>
                <title>{pokemon.name}</title>
                <h1 className="pokemonName">{pokemon.name}</h1>
                <img src={`${pokemon.img}.jpg`} id="pokemonImgShow"></img>
                <p class="pokemonDescription">{pokemon.description}</p>
                <form action={`/pokemon/${pokemon._id}/edit`}>
                        <input type="submit" value="Edit" />
                </form>
                <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                </form>
                <a href="/pokemon">Back to the index</a>
            </div>
        )
    }
}

module.exports = Show

// const React = require('react')
// const headerStyle = {
//     color: '#ffffff',
//     backgroundColor: '#960606',
// }

// class Show extends React.Component {

//    render () {
//        const { pokemon } = this.props
     
//     return (
//         <div>
//             <h1 style ={headerStyle}>Gotta Catch 'Em All!</h1>
//             <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2><br/>
//             <img src={`${pokemon.img}.jpg`}></img><br/>
//             <a href="/pokemon">Back</a>
//         </div>
//      )
//     }
//  }
//  module.exports = Show