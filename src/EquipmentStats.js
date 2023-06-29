import { useParams } from "react-router-dom";
//todo important: use this api call to get the stats of equipment.
//I'm not sure if putting the stats in a array is the right call.

let itemStatPower           =0
let itemStatPrecision       =0
let itemStatToughness       =0
let itemStatVitality        =0
let itemStatFerocity        =0
let itemStatConditionDamage =0
let itemStatHealingPower    =0
let itemStatConcentration   =0
let itemStatExpertise       =0

export default function EquipmentStats() {
    let params = useParams();
    return ([
        "https://api.guildwars2.com/v2/character" + params.characterID + "/equipment?access_token=" + params.token,
        itemStatPower,
        itemStatPrecision,
        itemStatToughness,
        itemStatVitality,
        itemStatFerocity,
        itemStatConditionDamage,
        itemStatHealingPower,
        itemStatConcentration,
        itemStatExpertise
    ])
}