import { use } from 'react';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models);

    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {models.map(model => 
            <div>
                <div className='relative'>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{model.status}</div>
                    <img src={model.image} alt="" />
                    <h3>{model.title}</h3>
                    <p>{model.description}</p>
                    <div className='text-[30px]'>${model.price}<span className='text-sm text-[#627382]'>/Mo</span></div>
                    <div>
                        <p>{model.features}</p>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Models;