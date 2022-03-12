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

    //all equipment. Note that this is stats not skins.
    let helmAquatic, backpack, coat, boots, gloves = null


    //TODO: put this in the promise chain
    if (character) {
        console.log(character.character.equipment)
        
        helmAquatic = character.character.equipment[0].id.toString()
        backpack = character.character.equipment[1].id.toString()
        coat = character.character.equipment[2].id.toString()
        boots = character.character.equipment[3].id.toString()
        gloves = character.character.equipment[4].id.toString()
    }
    else {console.log("loading")}


    return (
        <>
            <h1>{params.characterID}</h1>
            <h5>{helmAquatic}</h5>
            <h5>{backpack}</h5>
            <h5>{coat}</h5>
            <h5>{boots}</h5>
            <h5>{gloves}</h5>
        </>
    )


}

