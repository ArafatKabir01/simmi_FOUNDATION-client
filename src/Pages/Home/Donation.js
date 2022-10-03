import React from 'react';

const Dontion =()=>{
    return(
        <div>
            <div className="hero " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwa2lkfGVufDB8fDB8fA%3D%3D&w=1000&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-cover"></div>
                <div className="hero-content text-center text-neutral-content pt-48 pb-48">
                    <div className="max-w-xxl ">
                    <p className="mb-5">We are here to stop poverty</p>
                    <h1 className="mb-5 text-5xl font-bold">We are fundraising for the people who are fighting against poverty</h1>
                    <button className="btn btn-primary">Donate Now</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Dontion;