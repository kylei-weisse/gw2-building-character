import logo from './logo.svg'; //can I delete this yet?
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

  //ComponentDidMount happens after render() 

  render() {
    return (
      <div className="App">
        <h1> testing </h1>
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
