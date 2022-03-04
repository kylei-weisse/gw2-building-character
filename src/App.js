import './App.css';
import React from 'react'; //do I need to use this everywhere?

//component lifecycle, relevant here:
//first constructor
//then render
//finally componentDidMount()


//putting App into a class, rather than a function as the boilerplate.
class App extends React.Component {
  
  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }//end of constructor

  //ComponentDidMount happens after render(), so any dom updates from render will have already loaded.
  componentDidMount() {
    fetch(
      "https://api.guildwars2.com/v2/characters?access_token=DD1F3448-A7BC-C24E-97E5-40C4C25EC52E8DEC9F3F-F898-4729-88FC-6ABBC8B1DB9A")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  //render is the only field that is required
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return(
      <div>
        <h1> loading, we hope </h1>
      </div>
    )

    return (
      <div className="App">
        <h1> List of Characters for Naked Fiddle.6809:</h1> {
          items.map((item) => (
            <ol key = {item.id} >
              { item }
            </ol>
          ))
        }
      </div>
    )
  }
}


export default App;
