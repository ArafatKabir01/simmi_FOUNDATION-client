import React from 'react';


const Objective =()=>{
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mb-12 pt-12 overflow-hidden'>Objectives</h2>
            <div className='flex flex-wrap justify-center gap-6 pb-10'>
             <div className=' hover:-translate-y-6 duration-700 '> 
                 <div  className="card  	card-compact w-80  ">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-52 hover:scale-125 transform-gpu transition duration-700 ease-in-out w-full' src="https://simmifoundation.org/home/images/objectives/education.jpg" alt="Shoes" /></figure>
                <div data-aos="fade-down-right"   className="card-body  bg-cyan-900 ">
                    <h2 className="card-title text-amber-600 ">Education</h2>
                    <div className='w-50 h-50 font-bold	leading-6 text-white'>
                        <p>We provide free academic education, scholarship, training and other incentives to the children.</p>
                    </div>
                    <div className="card-actions justify-end">
                         <button className="btn  bg-amber-600">Read More</button>
                    </div>
                </div>
            
            </div>
        </div>
        <div className='   hover:-translate-y-6 duration-700'>
                    <div  className="card 	 card-compact w-80  ">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-52 w-full hover:scale-125 transform-gpu transition duration-700 ease-in-out' src="https://simmifoundation.org/home/images/objectives/livelihood.jpg" alt="Shoes" /></figure>
                <div data-aos="fade-down-right"   className="card-body bg-cyan-900 ">
                    <h2 className="card-title text-amber-600 ">Livelihood</h2>
                    <div className='w-50 h-50 font-bold	leading-6 text-white'>
                        <p>We implement various schemes to provide livelihood and uplift the poor in <br/> society....</p>
                    </div>
                    <div className="card-actions justify-end">
                         <button className="btn  bg-amber-600">Read More</button>
                    </div>
                </div>
           
            </div>
        </div>
        <div  className='   hover:-translate-y-6 duration-700'>
                    <div  className="card 	 card-compact w-80   ">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-52 w-full hover:scale-125 transform-gpu transition duration-700 ease-in-out' src="https://simmifoundation.org/home/images/objectives/healthcare.jpg" alt="Shoes" /></figure>
                <div data-aos="fade-down-right"   className="card-body bg-cyan-900 ">
                    <h2 className="card-title text-amber-600 ">Healthcare</h2>
                    <div className='w-50 h-50 font-bold	leading-6 text-white'>
                        <p>We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.</p>
                    </div>
                    <div className="card-actions justify-end">
                         <button className="btn bg-amber-600 ">Read More</button>
                    </div>
                </div>
            
            </div>
        </div>
        <div  className='   hover:-translate-y-6 duration-700'>
                    <div  className="card 	card-compact w-80   ">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-52 w-full hover:scale-125 transform-gpu transition duration-700 ease-in-out' src="https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg" alt="Shoes" /></figure>
                <div data-aos="fade-down-right"   className="card-body bg-cyan-900 ">
                    <h2 className="card-title text-amber-600 ">Women and Youth Empowerment</h2>
                    <div className='w-50 h-50 font-bold	leading-6 text-white'>
                        <p>We focus on providing equal opportunities for women in the work field.</p>
                    </div>
                    <div className="card-actions justify-end">
                         <button className="btn bg-amber-600 ">Read More</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Objective