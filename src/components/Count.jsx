import React from 'react';

const Count = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10'>
            <div className="flex flex-col md:flex-row md:justify-around items-center max-w-11/12 mx-auto">
                <div className="count text-center">
                    <h1 className='font-bold text-[50px] text-white'>50K+</h1>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className='md:h-15 md:w-1 bg-[#ffffff60]'></div>
                <div className="count text-center">
                    <h1 className='font-bold text-[50px] text-white'>200+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className='md:h-15 md:w-1 bg-[#ffffff60]'></div>
                <div className="count text-center">
                    <h1 className='font-bold text-[50px] text-white'>4.9</h1>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Count;