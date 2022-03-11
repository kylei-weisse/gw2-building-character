import { useParams } from "react-router-dom";


export default function Equipment() {
    let params = useParams();
    return ("https://api.guildwars2.com/v2/character" + params.characterID + "/equipment?access_token=" + params.token)
}