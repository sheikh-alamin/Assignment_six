import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-20 pb-10'>
            <div className='text-white grid grid-cols-5 gap-10 max-w-11/12 mx-auto'>
                <div>
                    <h1 className="text-white font-bold text-[30px]">DigiTools</h1>
                    <p className='font-thin'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h3 className='text-[22px]'>Product</h3>
                    <ul className='font-thin'>
                        <a href="#"><li>Features</li></a>
                        <a href="#"><li>Pricing</li></a>
                        <a href="#"><li>Templates</li></a>
                        <a href="#"><li>Integrations</li></a>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[22px]'>Company</h3>
                    <ul className='font-thin'>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Blog</li></a>
                        <a href="#"><li>Careers</li></a>
                        <a href="#"><li>Press</li></a>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[22px]'>Resources</h3>
                    <ul className='font-thin'>
                        <a href='#'><li>Documentation</li></a>
                        <a href='#'><li>Help</li></a>
                        <a href='#'><li>Help Center</li></a>
                        <a href='#'><li>Community</li></a>
                        <a href='#'><li>Contact</li></a>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[22px]'>Social Links</h3>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                    <i className="fa-brands fa-facebook ml-2 cursor-pointer"></i>
                    <i className="fa-brands fa-x-twitter ml-2 cursor-pointer"></i>
                </div>
                
            </div>
            <div className="max-w-11/12 mx-auto text-white mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2026 DigiTools. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;