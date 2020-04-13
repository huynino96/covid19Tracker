import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

 export const fetchData = async() => {
    try{
        const respone = await axios.get(url);
        
        return respone;
    } catch (error){
        
    }
}