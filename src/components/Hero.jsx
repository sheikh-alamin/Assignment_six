import React from 'react';

const hero = () => {
    return (
        <div>
            <div className='flex justify-between items-center max-w-11/12 mx-auto py-20'>
                <div className="hero_details w-1/2 space-y-5">
                    <div className='flex gap-1 items-center bg-[#E1E7FF] py-2 px-4 w-1/2 rounded-4xl'>
                        <img className='w-6' src="../../assets/Group 5.png" alt="" /> <h5 className='bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>New: AI-Powered Tools Available</h5>
                    </div>
                    <div>
                        <h1 className='font-bold text-7xl'>Supercharge Your Digital Workflow</h1>
                        <p className='mt-4'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>
                    </div>
                    <div className='flex gap-3'>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-4xl"><i class="fa-solid fa-play"></i> Watch Demo</button>
                    </div>
                    
                </div>
                <div className="hero_photo w-1/2 flex justify-end">
                    <img src="../../assets/banner.png" alt="" />
                </div>
            </div>  
        </div>
    );
};

export default hero;