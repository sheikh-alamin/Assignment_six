

const Basket = ({baskets, setBaskets}) => {
    const totalPrice = baskets.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {
        setBaskets([])
    }
    const handleDelete = () => {
        console.log("deleted")
    }

    return (
        <div className="max-w-11/12 mx-auto shadow-sm p-5 rounded-lg space-y-4">
            <h1 className="font-bold text-2xl">Your Cart</h1>
            {
                baskets.length === 0 ? <p className="text-center text-[#627382]">Your Cart Is Empty</p> :
                <>
                    {
                        baskets.map(item => <div key={item.id}>
                            <div className="flex justify-between items-center p-3 bg-[#62738210] rounded-lg">
                                <div className="flex items-center gap-5">
                                    <img className="h-15 w-15 object-contain" src={item.image} alt="" />
                                    <div>
                                        <h5 className="font-bold">{item.title}</h5>
                                        <h6 className='text-[#627382]'>$ {item.price}</h6>
                                    </div>
                                </div>
                                <div><button onClick={handleDelete} className="btn btn-outline btn-error border-none">Remove</button></div>
                            </div>
                        </div> )
                    }
                        <div className="flex justify-between p-3">
                            <p className='text-[#627382]'>Total:</p>
                            <h3 className="font-bold">$ {totalPrice}</h3>
                        </div>
                        <button onClick={handlePayment} className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">Proceed To Checkout</button>
                </>
            }

            
        </div>
    );
};

export default Basket;