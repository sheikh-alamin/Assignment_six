import React from 'react';

const Pricing = () => {
    return (
        <div className="max-w-11/12 mx-auto mb-20">
            <div className="text-center mb-10">
                <h1 className="text-[48px] font-bold">Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='p-5 rounded-md bg-[#F9FAFC] space-y-2'>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-[24px]'>Starter</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                        <div className='text-[30px]'>$0<span className='text-sm text-[#627382]'>/Monthly</span></div>
                    </div>
                    <ul class="space-y-2 mb-6  text-[#627382]">
                        <li><span className='text-green-500'>✔</span> Access to 10 free tools</li>
                        <li><span className='text-green-500'>✔</span> Basic templates</li>
                        <li><span className='text-green-500'>✔</span> Community support</li>
                        <li><span className='text-green-500'>✔</span> 1 project per month</li>
                    </ul>
                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Get Started</button>
                </div>
                <div className='bg-linear-to-r from-purple-600 to-purple-800 text-white p-5 rounded-md relative space-y-2'>
                    <div class="absolute -top-3 right-43 bg-yellow-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-[24px]'>Pro</h2>
                        <p>Best for professionals</p>
                        <div className='text-[30px]'>$29<span className='text-sm'>/Monthly</span></div>
                    </div>
                    <ul class="space-y-2 mb-6 text-white">
                        <li>✔ Access to all premium tools</li>
                        <li>✔ Unlimited templates</li>
                        <li>✔ Priority support</li>
                        <li>✔ Unlimited projects</li>
                        <li>✔ Cloud sync</li>
                        <li>✔ Advanced analytics</li>
                    </ul>
                    <button className="btn w-full text-blue-700  rounded-4xl">Start Pro Trial</button>
                </div>
                <div className='p-5 rounded-md bg-[#F9FAFC] space-y-2'>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-[24px]'>Enterprise</h2>
                        <p className='text-[#627382]'>For teams and businesses</p>
                        <div className='text-[30px]'>$99<span className='text-sm'>/Monthly</span></div>
                    </div>
                    <ul class="space-y-2 mb-6  text-[#627382]">
                        <li><span className='text-green-500'>✔</span> Everything in Pro</li>
                        <li><span className='text-green-500'>✔</span> Team collaboration</li>
                        <li><span className='text-green-500'>✔</span> Custom integrations</li>
                        <li><span className='text-green-500'>✔</span> Dedicated support</li>
                        <li><span className='text-green-500'>✔</span> SLA guarantee</li>
                        <li><span className='text-green-500'>✔</span> Custom branding</li>
                    </ul>
                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;