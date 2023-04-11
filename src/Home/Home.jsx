import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h1>This is home . We have {tshirts.length} T-Shirts</h1>
        </div>
    );
};

export default Home;