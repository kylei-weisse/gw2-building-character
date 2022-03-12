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
            <h5>mouth breather is {helmAquatic}, which is only relevant under water.</h5>
            <h5>backpack is {backpack}</h5>
            <h5>coat is {coat}</h5>
            <h5>boots are {boots}</h5>
            <h5>gloves are {gloves}</h5>
        </>
    )


}

