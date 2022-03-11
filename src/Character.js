import './App.css';
import React from 'react'; //do I need to use this everywhere?
import { useParams } from "react-router-dom";


export default function Character() {
    let params = useParams();
    return (
        <>
            <h1>{params.characterID}</h1>
        </>
    )

}

