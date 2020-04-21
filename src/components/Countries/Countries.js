import React, { useState , useEffect } from 'react';
import {fetchCountries} from '../../API'
import styles from './Countries.module.css';
import {NativeSelect,FormControl} from '@material-ui/core';


 const Countries = ({handleCountryChange})=>{

    const [featchedCountries , SetFeatchedCountries]=useState([])
    //console.log(featchedCountries)
    

useEffect(()=>{
    const fetchAPI = async ()=> {
        SetFeatchedCountries(await fetchCountries())

    }
    fetchAPI();
    // console.log('****')
    // console.log(fetchAPI())
},[ ])
// console.log(featchedCountries)

    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.currentTarget.value)}}>
                <option value="global">Global</option>
                {featchedCountries.map((countryName,i)=><option key={i} value={countryName}>{countryName}</option>)}
            </NativeSelect>
        </FormControl>

    )
}
export default Countries;
