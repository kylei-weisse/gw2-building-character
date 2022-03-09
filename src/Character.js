import './App.css';
import React from 'react'; //do I need to use this everywhere?

class Character extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return(
            <h1>succesfully made it to the Character component!</h1>
        )
    }
}

export default Character;