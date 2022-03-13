import React from 'react'; //do I need to use this everywhere?
import { Link } from "react-router-dom"

import { token } from './Api'
import './App.css';

//component lifecycle, relevant here:
//first constructor
//then render
//finally componentDidMount()



//CharacterList
//TODO: turn this into a router with dynamic routing, so each character you click on is a link, and any new characters/ different accounts are also links.
export default class CharacterList extends React.Component {

  //Constructor
  constructor() {
    super()
    
    this.state = {
      //list of character names
      names: [],
      //did the data load?
      dataIsLoaded: false,
      token: token
    };
  } //end of constructor

  //ComponentDidMount happens after render(), so any dom updates from render will have already loaded.
  componentDidMount() {
    fetch(
      "https://api.guildwars2.com/v2/characters?access_token=" + token)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          names: json,
          dataIsLoaded: true
        });
      })
  }


  //render is the only field that is required
  render() {
    const { dataIsLoaded, names } = this.state;
    if (!dataIsLoaded) return (
      <div>
        <h1> loading, we hope </h1>
      </div>
    )

    return (
      // jsx harmony starts 
      <div className="App">
        <h1 className='banner' > List of Characters for Naked Fiddle .6809: </h1> 
        <ol>
          {/* jsx harmony ends  */}
          { names.map((name) => ( 
            // jsx harmony starts 
            <li key={name} >
              <CharacterListItem name={name} />
            </li>
            // jsx harmony ends 
          )) } 
          {/* jsx harmony starts  */}
        </ol>
      </div>
      //jsx harmony ends
    )
  }
}

class CharacterListItem extends React.Component {
  render() {
    return <Link to={"/characters/" + this.props.name}> {this.props.name} </Link> 
  }
}