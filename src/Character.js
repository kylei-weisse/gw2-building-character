import './App.css';
import React, { useState } from 'react'; //do I need to use this everywhere?
import { useParams } from "react-router-dom";

import { token } from './Api'


export default function Character() {
    
    const[character, setCharacter] = useState(null)

    let params = useParams()

    if (!character){
        fetch(
        "https://api.guildwars2.com/v2/characters/" + params.characterID + "?access_token=" + token)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                names: json,
                dataIsLoaded: true
            });
        })
    }



    return (
        <>
            <h1>{params.characterID}</h1>
        </>
    )


}

