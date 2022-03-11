import './App.css';
import React from 'react'; //do I need to use this everywhere?
import { useParams } from "react-router-dom";


function Equipment(token){
    return ("https://api.guildwars2.com/v2/mounts?access_token="+token)
}

export default function Character(props){
    let params = useParams();
        return(
            <h1>This is {params.characterID}'s page</h1>
        )

}

