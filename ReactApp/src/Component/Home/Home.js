import React from 'react';
import Carausal from './Carausal';
import Tagline from './Tagline';
import Menscoll from './Manscoll';
const Home = (props) => {
    return(
        <React.Fragment>
            <Carausal/>
            <Tagline/>
            <Menscoll/>
        </React.Fragment>
    )
}

export default Home;