import { useState } from "react";


const Cart = ({model, baskets, setBaskets}) => {
    const [isBuying, setIsBuying] = useState(false)
    const handleCarts = () => {
        setIsBuying(true)
        setBaskets([...baskets, model])
    }
    return (
            <div>
                <div className='relative space-y-2 border border-gray-300 shadow-md mt-10 rounded-2xl p-10'>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{model.status}</div>
                    <img src={model.image} className='w-10' alt="" />
                    <h3 className='font-bold text-[24px]'>{model.title}</h3>
                    <p className='text-[#627382]'>{model.description}</p>
                    <div className='text-[30px]'>${model.price}<span className='text-sm text-[#627382]'>/Mo</span></div>
                    <div>
                        <p><span className='text-green-500'>✔</span> {model.feature_1}</p>
                        <p><span className='text-green-500'>✔</span> {model.feature_2}</p>
                        <p><span className='text-green-500'>✔</span> {model.feature_3}</p>
                    </div>
                    <button onClick={handleCarts} className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">{isBuying ? "Added to Cart" : "Buy Now"}</button>
                </div>
            </div>
    );
};

export default Cart;