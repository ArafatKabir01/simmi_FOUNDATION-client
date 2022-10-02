import React from 'react';
const BusinessSummary=()=>{
    return(
        <div className='container m-auto text-center'>
            <div className="stats stats-vertical container m-auto lg:stats-horizontal shadow ">
  
            <div className="stat">
                <div className="stat-title">COUNTRIES</div>
                <div className="stat-value">10+</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">PROJECTS</div>
                <div className="stat-value">150+</div>
                <div className="stat-desc">↗︎ 40 (10%)</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">VOLUNTEERS</div>
                <div className="stat-value">100000</div>
                <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
            <div className="stat">
                <div className="stat-title">STATES</div>
                <div className="stat-value">20+</div>
                
            </div>
            <div className="stat">
                <div className="stat-title">BENIFICIRIES</div>
                <div className="stat-value">500000+</div>
               
            </div>
            
            </div>

        </div>
    )
}
export default BusinessSummary;