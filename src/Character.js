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
        //looks like this is where the actual character display is
        //so I should put the item stats inside the div I think
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

    //item state for thisItem, currently contains the entire thisItem object for each equipped Item.
    //would it be better to include only what I need in state, or use the whole thing? the expensive
    //process is the fetch, so yeah, I like how I'm doing it right now.
    
    //possible todo:
    //change the fetch to get every item in a single fetch.
    const [thisItem, setThisItem] = useState([])

    if (thisItem.length === 0) {
        fetch("https://api.guildwars2.com/v2/items/" + item.id)
            .then(response => response.json())
            .then(json => setThisItem(json))
    }
    //console.log(thisItem)
    /*
    thisItem is sucessfully loading every piece of equipment, but several times. 
    The best practice way to do it is more complicated than I'm capable of doing easily or enjoyably,
    so maybe a way to check better if it's done?
    I also need to put every piece of thisItem's object that I'm using into a usable array, which is likely
    to make some ugly code but that might be necessary. I was hoping I could use a case statement.
    */

    //right now this displays these things as a div, kinda blank? I should change this to add more formatting.
    return (<div>{thisItem.name}, {thisItem.type}, level {thisItem.level} {thisItem.rarity}</div>) //TODO: return thisItem's row, rather than just a list of properties in a div.

}