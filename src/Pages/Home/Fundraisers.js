import React from 'react';

const Fundraisers =()=>{
    return (
        <div className=''>
              <div style={{ backgroundImage: `url("https://www.kibrispdr.org/data/14/background-text-png-44.png")` }} className="w-80 bg-cover m-auto">
              <h2  className='text-5xl font-bold text-center mb-12 mt-12  shadow-md  m-auto'>Fundraisers</h2>
              </div>
        <div className='container m-auto pt-20 flex justify-center gap-6 items-center flex-wrap'>
          
            <div className="card card-compact w-96 bg-base-100  shadow-xl">
                <figure className='relative z-0 hover:scale-125 transform-gpu transition duration-700 ease-in-out '><img className='z-0 w-full h-64 ' src="https://simmifoundation.org/admin/images/fundRaisers/Villagekid.jpg" alt="Shoes" /></figure>
                <div className='z-20'>
                    <div className='w-80 m-auto -mt-10 h-20 bg-white rounded-md shadow-md '>
                    <div className='flex justify-between p-4 font-bold'>
                        <h2>15000 raised of 30000</h2>
                        <h2>70%</h2>
                       </div>
                       <div data-theme="emerald" className='flex justify-center items-center'>  
                    <progress className="progress progress-accent w-64  " value="70" max="100"></progress>
                    </div>
                    </div>
                    </div>
                <div className="card-body">
                    
                    <h2 className="card-title">Test Fund Raiser Kavach</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='relative z-0 hover:scale-125 transform-gpu transition duration-700 ease-in-out'><img className='z-0 w-full h-64' src="https://simmifoundation.org/admin/images/fundRaisers/WhatsApp%20Image%202021-11-09%20at%2010.34.25.jpeg" alt="Shoes" /></figure>
                <div className='z-20'>
                    <div className='w-80 m-auto -mt-10 h-20 bg-white rounded-md shadow-md '>
                    <div className='flex justify-between p-4 font-bold'>
                        <h2>15000 raised of 30000</h2>
                        <h2>70%</h2>
                       </div>
                       <div data-theme="emerald" className='flex justify-center items-center'>  
                    <progress className="progress progress-accent w-64  " value="70" max="100"></progress>
                    </div>
                    </div>
                    </div>
                <div className="card-body">
                    
                    <h2 className="card-title">Test Fund Raiser Kavach</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='relative z-0 hover:scale-125 transform-gpu transition duration-700 ease-in-out'><img className='z-0 w-full h-64' src="https://simmifoundation.org/admin/images/fundRaisers/WhatsApp%20Image%202021-11-09%20at%2010.34.25%20(40).jpeg" alt="Shoes" /></figure>
                <div className='z-20'>
                    <div className='w-80 m-auto -mt-10 h-20 bg-white rounded-md shadow-md '>
                    <div className='flex justify-between p-4 font-bold'>
                        <h2>10000 raised of 500000</h2>
                        <h2>30%</h2>
                       </div>
                       <div data-theme="emerald" className='flex justify-center items-center'>  
                    <progress className="progress progress-accent w-64  " value="30" max="100"></progress>
                    </div>
                    </div>
                    </div>
                <div className="card-body">
                    
                    <h2 className="card-title">Education</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                </div>

        </div>
        </div>
    )
}
export default Fundraisers;