import { use } from 'react';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models);

    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {models.map(model => 
            <div>
                <div className='relative space-y-2 border border-gray-300 shadow-md mt-10 rounded-2xl p-10'>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{model.status}</div>
                    <img src={model.image} alt="" />
                    <h3>{model.title}</h3>
                    <p>{model.description}</p>
                    <div className='text-[30px]'>${model.price}<span className='text-sm text-[#627382]'>/Mo</span></div>
                    <div>
                        <p><span className='text-green-500'>✔</span> {model.feature_1}</p>
                        <p><span className='text-green-500'>✔</span> {model.feature_2}</p>
                        <p><span className='text-green-500'>✔</span> {model.feature_3}</p>
                    </div>
                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Buy Now</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Models;