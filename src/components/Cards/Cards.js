import React from 'react'
import {Card,CardContent,Typography as Typo,Grid} from "@material-ui/core"
import cx from 'classnames'
import styles from './Cards.module.css';
import CountUp from 'react-countup'
//import Button from '@material-ui/core/Button';

const Cards = ({data:{confirmed, recovered,deaths,lastUpdate}}) => {

    
    if(!confirmed){return <h3>loading</h3>}
    console.log(`${confirmed.value} confirmd`)
    let date= new Date(lastUpdate).toDateString();
    console.log(date)
    console.log('====  ====')
    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justify={"center"} >
                {/* card start */}
                <Grid item component={Card} xs={8} md={3} className={cx(styles.card  , styles.infected)}>
                    <CardContent>
                        <Typo color="textSecondary" gutterBottom>
                            infected
                        </Typo>
                        <Typo variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.2} separator="," />
                        </Typo>
                        <Typo color="textSecondary" variant="h5">
                            {date}
                        </Typo>
                        <Typo  variant="body2">
                            nomber of active data of covid-19
                        </Typo>
                    </CardContent>
                </Grid>
                 {/* card end */}

                   {/* card start */}
                <Grid item component={Card} xs={8} md={3} className={cx(styles.card  , styles.recovered)}>
                    <CardContent>
                        <Typo color="textSecondary" gutterBottom>
                            recovered
                        </Typo>
                        <Typo variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.2} separator="," />
                        </Typo>
                        <Typo color="textSecondary" variant="h5">
                        {date}
                        </Typo>
                        <Typo  variant="body2">
                            nomber of active data of covid-19
                        </Typo>
                    </CardContent>
                </Grid>
                 {/* card end */}
                 {/* card start */}
                <Grid item component={Card} xs={8} md={3} className={cx(styles.card  , styles.deaths)}>
                    <CardContent>
                        <Typo color="textSecondary" gutterBottom>
                            Deaths
                        </Typo>
                        <Typo variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2.2} separator="," />
                        </Typo>
                        <Typo color="textSecondary" variant="h5">
                        {date}
                        </Typo>
                        <Typo  variant="body2">
                            nomber of active data of covid-19
                        </Typo>
                    </CardContent>
                </Grid>
                 {/* card end */}
            </Grid>
        </div>
    );
}
export default Cards;