import React from 'react'
import './App.css';
const Coin = ({name,image,symbol,price,volume,priceChange,marketCap,index}) => {
    console.log(name)
    return (
        <div className="coin-sontainer">
            <div className="coin-row">
                <p className="coin-index" >{index}.</p>
                <div className="coin">
                    <img src={image} alt="crypto">
                    </img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                    
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹ {price}</p>
                    <p className="coin-volume">₹{volume}</p>
                    <p className="coin-marketcap">{marketCap}</p>
                    {priceChange<0?
                                    <p className="coin-percentage red">  {priceChange.toFixed(2)}%</p>
                                     :
                                     <p className="coin-percentage green">  {priceChange.toFixed(2)}%</p>
                }
               

                </div>
            </div> 
            
        </div>
    )
}

export default Coin
