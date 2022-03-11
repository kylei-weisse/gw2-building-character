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
            setCharacter({
                character: json,
                dataIsLoaded: true
            });
        })
    }

    
    let helmAquatic = "jkl"
    if (character) {
        console.log(character.character.equipment)
        
        helmAquatic = character.character.equipment[0].id.toString()
    }
    else {console.log("loading")}


    return (
        <>
            <h1>{params.characterID}</h1>
            <h5>{helmAquatic}</h5>
        </>
    )


}

