import './App.css';
import React, { useState } from 'react'; //do I need to use this everywhere?
import { useParams } from "react-router-dom";

import { token } from './Api'


export default function Character() {
    const [character, setCharacter] = useState(null) 
    const params = useParams()

    if (!character) {
        fetch(
            "https://api.guildwars2.com/v2/characters/" + params.characterID + "?access_token=" + token
        )
            .then(response => response.json())
            .then(json => setCharacter(json))

        return (<div>Loading ... </div>)
    }

    return ( 
        <>
            <h1> hello {params.characterID}! </h1> 
            {
            character.equipment.map(
                (item) => (
                    //start jsx harmony using "<"
                    <div key={item.id}>

                    </div>
                )
                )
            }
        </>
    )
}

function Equipment({equipment}) {
    return (<div>{equipment.id}</div>)
}