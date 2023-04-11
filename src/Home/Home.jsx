import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) => {
        const newCart = [...cart, tshirt]
        setCart(newCart)
    }
    const handleRemoveFromCart = id => {
      const remaining = cart.filter(ts => ts._id !== id)
      setCart(remaining)
    }
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>


        </div>
    );
};

export default Home;