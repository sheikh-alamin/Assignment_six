import { use } from 'react';
import Cart from './Cart';

const Models = ({modelPromise, baskets, setBaskets}) => {
    const models = use(modelPromise)
    

    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {models.map((model) => 
                <Cart key={model.id} model = {model} baskets={baskets} setBaskets={setBaskets}/>
            )}
        </div>
    );
};

export default Models;