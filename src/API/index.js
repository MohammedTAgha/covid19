import axios from 'axios'

let url = "https://covid19.mathdro.id/api";

// all data will be fethed here 

// evry function fetch spesific data

export const fetchData= async (contry)=>{
    let newUrl= "https://covid19.mathdro.id/api";
    if (contry){                                                     // to know if the user select a country or no if not ‖‖‖
        newUrl=`https://covid19.mathdro.id/api/countries/${contry}`
    }
    try{
       // url="https://covid19.mathdro.id/api"                                         // tis code gets data  😊😊😊
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
        const myData=data.map((dailyData)=>({      // add data to opject  this teturn all days
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        // console.log(`data is here *--- `)
        // console.log(myData)
        return myData;
    }catch(error){ console.log('nothing');}
}

export const fetchCountries = async ()=>{  // to get countries and but it in opjects
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        // console.log('=====')
        // console.log(countries)
        return countries.map((country)=> country.name);
    }catch(error){ console.log('nothing');}
}