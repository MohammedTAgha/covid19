import axios from 'axios'

let url = "https://covid19.mathdro.id/api";

export const fetchData= async (contry)=>{
    let newUrl= "https://covid19.mathdro.id/api";
    if (contry){
        newUrl=`https://covid19.mathdro.id/api/countries/${contry}`
    }
    try{
       // url="https://covid19.mathdro.id/api"
    const {data:{confirmed, recovered,deaths,lastUpdate}}= await axios.get(newUrl)
    return {confirmed, recovered,deaths,lastUpdate} ;

    }catch(error){
        console.log('nothing');
    }

}


export const fetchDailyData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`)
       // console.log(data)
        const myData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return myData;
    }catch(error){ console.log('nothing');}
}

export const fetchCountries = async ()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        // console.log('=====')
        // console.log(countries)
        return countries.map((country)=> country.name);
    }catch(error){ console.log('nothing');}
}