import React from 'react'
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Events from './Events';
import Fundraisers from './Fundraisers';
import Helpus from './Helpus';
import Objective from './Objective';
import Welcome from './Welcome';
const Home = () =>{
    return(
        <div>
            <Banner/>
            <Welcome/>
            <Objective/>
            <Helpus/>
            <Events></Events>
            <BusinessSummary/>
            <Fundraisers/>
            
        </div>
    )
}
export default Home;