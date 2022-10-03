import React from 'react';
const Welcome =()=>{
    return(
        <dev>
            <div style={{"backgroundColor":"#212529"}} className="hero overflow-hidden ">
            <div className="hero-content flex-col lg:flex-row-reverse overflow-hidden">
                <img src="https://simmifoundation.org/home/images/home/map-dark.png" className="max-w-md hover:scale-125 transition duration-700 ease-in-out " />
                <div>
                <h1 className="text-5xl font-bold text-white">Welcome to <span className='text-amber-600'>SIMMI</span></h1>
                <p className="py-6 text-white">Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
                <button className="btn btn-primary">See More</button>
                </div>
            </div>
            </div>

        </dev>
    )
}
export default Welcome;