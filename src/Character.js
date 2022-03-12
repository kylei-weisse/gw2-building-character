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

{/*keys have to be: 
    unique
    consistent
    not the index???

     index  0   1  2   3   4
       x = [5, 10, 15, 20, 25]
    x.pop(2)
      index  0   1   2   3
        x = [5, 10, 20, 25]
    
*/} 




function List({items}) {
    return (items.map((item, index) => <div key={index}>{ item }</div>)) 
}

function App({initial}) {
    const [items, setItems] = useState(initial)
    
    const changeItems = () => {
        setItems([8, 9, 10, 11])
    }
    
    return (<>
        <List items={items} />
        <button onclick={() => changeItems()} />
    </>)
}

<App initial={[10, 20, 30, 40]} />
