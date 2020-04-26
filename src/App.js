import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {fetchData} from './API/index'
import styles from './App.module.css';
import {Cards} from './components';
import {Chart} from './components';
import {Navigation} from './components';
import {Landing} from './components';
import {Countries} from './components';
// import { Card } from '@material-ui/core';
// import logo from './img/logo.png'

class App extends Component {

  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    console.log('==== componend did mount start====')
    const data= await fetchData("");
    //console.log('******');
    
    this.setState({data})   //add data to the state
    console.log('==== componend did mount end====')
   
    //console.log(this.state)
  }

  handleCountryChange = async (country)=>{

    const data= await fetchData(country);
   // console.log(`▶ ${country} `)
    //data.confirmed?console.log('ok'):console.log('noooooo')
    this.setState({data:data,country:country}) // add data to globalState to be viewed by general meaters
    // console.log('---**--')    
    // console.log(data.confirmed)    
}
  render(){
    const {data}=this.state
    console.log(data) // to be based to chart state
    return (
      
      <Router>
      <div className={styles.container}>
           {/** I don't know how ther is no proplem here thires a millons of data but no mixing and  no errors :)*/}
      
        <Navigation  className={styles.nav} />
        <Route path="/" exact >
        <Landing style={{overflow: 'hidden'}}/>
        </Route>

        <Route path="/meaters"  exact >
          <Cards data={data}/>          {/**data is from state ⇉ line 41 */}
          <Countries handleCountryChange={this.handleCountryChange} />
          <Chart data={this.state.data} country={this.state.country}/>
        </Route>
      </div>
      </Router>
    );
  }

}

export default App;


/*                            ========
*                    *************************                          *

! WARNING: ALL THE RIGHT ARE SAVED FOR MOHAMMRD AGHA CO => 2020 _______? (;

*                    *************************                          *
                               ********
                                  ***  
                                   *          
*/                      
