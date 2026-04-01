import React from 'react';

const Transform = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20">
            <div className='max-w-11/12 mx-auto text-white space-y-5'>
                <div className="text-center">
                    <h1 className="text-[48px] font-bold">Ready to Transform Your Workflow?</h1>
                    <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                </div>
                <div className='flex justify-center gap-4 mt-5'>
                    <button className="btn rounded-4xl text-blue-600 shadow-none">Explore Products</button>
                    <button className="btn btn-neutral btn-outline rounded-4xl font-light text-white border-white">View Pricing</button>
                </div>
                <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;