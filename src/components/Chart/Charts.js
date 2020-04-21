import React, { useState , useEffect } from 'react';
import styles from './Chart.module.css';
import  { fetchDailyData} from '../../API';
import {Line , Bar} from 'react-chartjs-2'
//import Switch from '@material-ui/core/Switch';


const Chart = (props)=>{
    
    // console.log('--------')
    // console.log(props.data)
    const [dailyData, setDailyData] = useState([])
    useEffect(()=>{
    console.log('==== chart effect start====')
        const fetchAPI =async()=>{
            setDailyData(await fetchDailyData())
        }
        console.log(dailyData)
        fetchAPI();
        console.log('==== chart effect start====')
    },[]);

    const lineChart = (
                //** */ LINE chart
        dailyData.length!==0?(       // when i wrote this , god and i ware know about what i was thinking but now only god knwes
            <Line     
            data={{
                labels:dailyData.map(({ date })=> date),
                datasets:[{
                    data: dailyData.map(({ confirmed })=> confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true
                },
                {
                    data: dailyData.map(({ deaths })=> deaths),
                    label:'deaths',
                    borderColor:'red',
                   backgroundColor:'rgba(255,0,0,5)',
                    fill:true
                }
                ],
                
                
            }}
        />
        ): <h3>no data</h3> 
    );

     //** Bar chart
     let data=props.data
    let country=props.country
    // console.log(`*/*/*/*/*`)
    //      console.log(props.data)
    //      console.log(data)
     const barChart=(
         
         data.confirmed    //see if we have the data
         ? (
             <Bar
                data={{
                    labels:['Inficted' , 'Recovered' , 'Deaths'],
                    datasets:[{
                        lable:'people',
                        backgroundColor:[
                            'rgba(0,0,225,0.8)',
                            'rgba(0,225,0,0.8)',
                            'rgba(225,0,0,0.8)'
                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }]
                }}
                options={{
                    legend:{display: false},
                    label:{display:true , text:`DATA IN ${country}`}
                }}
             />
         ):(<h3>{country} </h3>)
     );
    
    return(
        <div className={styles.container}> {/* rendiring here for chhhhhchhharrrt */}
         
            { country?barChart:lineChart}
            

        </div>
    )
}
export default Chart;