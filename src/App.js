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
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    //let's check if DataisLoaded
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return(
      <div>
        <h1> pleebe wait some time </h1>
      </div>
    )

    return (
      <div className="App">
        <h1> sup </h1>
      </div>
    )
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
