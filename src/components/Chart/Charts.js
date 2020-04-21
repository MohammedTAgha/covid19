import React, { useState , useEffect } from 'react';
import styles from './Chart.module.css';
import  { fetchDailyData} from '../../API';
import {Line , Bar} from 'react-chartjs-2'

const Chart = ()=>{
    const [dailyData, setDailyData] = useState([55])
    useEffect(()=>{
        const fetchAPI =async()=>{
            setDailyData(await fetchDailyData())
        }
        console.log(dailyData)
        fetchAPI();

    }, []);

    const lineChart = (

        dailyData.length!=0?(
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
        ): null
    );
    return(
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}
export default Chart;