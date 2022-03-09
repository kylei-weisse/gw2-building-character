import { render } from "react-dom";
import React from "react";
import CharacterList from "./CharacterList";


class App extends React.Component{
 render() {
     return(
     <>
        <CharacterList/>
     </>
     )
 }
}


export default App;