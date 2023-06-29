import { useParams } from "react-router-dom";
//todo important: use this api call to get the stats of equipment.
//I'm not sure if putting the stats in a array is the right call.

let itemStatPower           =0
let itemStatConditionDamage =0
let itemStatToughness       =0
let itemStatVitality        =0
let itemStatCritRate        =0
let itemStatCritDamage      =0
let itemStatHealingPower    =0
let itemStatBoonTime        =0
let itemStatConditionTime   =0

export default function EquipmentStats() {
    let params = useParams();
    return ("https://api.guildwars2.com/v2/character" + params.characterID + "/equipment?access_token=" + params.token)
}