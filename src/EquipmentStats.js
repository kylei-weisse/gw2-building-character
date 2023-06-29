import { useParams } from "react-router-dom";
//todo important: use this api call to get the stats of equipment.
//I'm not sure if putting the stats in a array is the right call.

var statPower=0
let statConditionDamage=0


export default function EquipmentStats() {
    let params = useParams();
    return ("https://api.guildwars2.com/v2/character" + params.characterID + "/equipment?access_token=" + params.token)
}