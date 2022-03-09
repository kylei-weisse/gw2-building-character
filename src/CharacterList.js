import './App.css';
import React from 'react'; //do I need to use this everywhere?

//component lifecycle, relevant here:
//first constructor
//then render
//finally componentDidMount()


//CharacterList
//TODO: turn this into a router with dynamic routing, so each character you click on is a link, and any new characters/ different accounts are also links.
class CharacterList extends React.Component {
  
  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      //list of character names
      names: [],
      //the currently selected character
      curentName: "",
      //did the data load?
      DataisLoaded: false
    };
  }//end of constructor

  //ComponentDidMount happens after render(), so any dom updates from render will have already loaded.
  componentDidMount() {
    console.log("in characterList");
    fetch(
      "https://api.guildwars2.com/v2/characters?access_token=DD1F3448-A7BC-C24E-97E5-40C4C25EC52E8DEC9F3F-F898-4729-88FC-6ABBC8B1DB9A")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          names: json,
          DataisLoaded: true
        });
      })
  }


  //render is the only field that is required
  render() {
    const { DataisLoaded, names } = this.state;
    if (!DataisLoaded) return(
      <div>
        <h1> loading, we hope </h1>
      </div>
    )

    return (
      <div className="App">
        <h1> List of Characters for Naked Fiddle.6809:</h1> { //TODO: Make the character name live instead of hardcoded

          //item is just the list of names, so right now I'm making a map that all it does is iterate over the list of names.
          names.map((name) => (
            <ol key = {name} > 
              { name }
            </ol>
          ))

        } 
      </div>
    ) 
  }
}


export default CharacterList;
