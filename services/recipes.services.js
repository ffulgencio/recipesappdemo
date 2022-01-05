import {APIKEY, APIURL} from '../constants/config.js';



export async function getCategories(){
    
    const response = await fetch(`${APIURL}api/json/v1/${APIKEY}/categories.php`)
    const result = await response.json()
    return result;
}