'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);


    async function fetchData(){
        const url = "https://api.coinlore.net/api/tickers/";
        const response = await fetch(url);
        const result = await response.json();
        const firstTwentyCoins = result.data.slice(0, 20);
    
        setCoins(firstTwentyCoins);
    }
    
    useEffect(() => {
        fetchData();
    });



    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    )
}

export default Home