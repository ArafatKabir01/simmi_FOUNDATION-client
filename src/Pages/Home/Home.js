import React from 'react'
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Dontion from './Donation';
import Events from './Events';
import Fundraisers from './Fundraisers';
import Helpus from './Helpus';
import Objective from './Objective';
import Partner from './Partners';
import Speakers from './Speakers';
import Welcome from './Welcome';
const Home = () =>{
    return(
        <div  data-theme="emerald">
            <Banner/>
            <Welcome/>
            <Objective/>
            <Helpus/>
            <Events></Events>
            <BusinessSummary/>
            <Fundraisers/>
            <Speakers/>
            <Dontion/>
            <Partner/>
            
        </div>
    )
}
export default Home;