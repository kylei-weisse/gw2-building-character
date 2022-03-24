import './App.css';
import React, { useState } from 'react'; //do I need to use this everywhere?
import { useParams } from "react-router-dom";

import { token } from './Api'


export default function Character() {
    const [character, setCharacter] = useState(null)
    const params = useParams()

    if (!character) {
        fetch("https://api.guildwars2.com/v2/characters/" + params.characterID + "?access_token=" + token)
            .then(response => response.json())
            .then(json => setCharacter(json))

        return (<div>Loading ... </div>)
    }

    return (
        <>
            <h1> hello {params.characterID}! </h1>
            {
                character.equipment.map(
                    (item, index) => (
                        //start jsx harmony using "<"
                        <div key={`${index}:${item.id}`}>
                            <Equipment item={item} />
                        </div>
                    )
                )
            }
        </>
    )
}

function Equipment({ item }) {

    var viewer = item.id
    const [thisItem, setThisItem] = useState([])

    if(thisItem.length === 0){
            fetch("https://api.guildwars2.com/v2/items/" + item.id)
            .then(response => response.json())
            .then(json => setThisItem(json))         
    }
    console.log(thisItem)    


    //todo: put all the item stats into an array and display the array.
    return (<div>{thisItem.name}</div>)
}