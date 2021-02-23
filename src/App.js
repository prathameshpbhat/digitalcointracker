
import  './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Coin from './Coin';

const Cypto_100="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
function App() {
  const [coins,setCoins]=useState([]);
  const [serach,setSearch]=useState('')
  useEffect(async ()=>{
      try{
       const res=await axios.get(Cypto_100) 
        setCoins(res.data)
        console.log(res.data)
      }
      catch(e){
          console.log("Error:"+e)
      }
  },[]);

  const handleSearch=(e)=>{
    setSearch(e.target.value)
     

  }
  let filterCoins=coins.filter(coin=>{
    return coin.name.toLowerCase().includes(serach.toLowerCase())

  })
  return (

  
<div className="coin-app">
  <div className="coin-search">
    <h1 className="coin-text">Search a currency</h1>
    <form>
     <input type="text" placeholder="Search" className="coin-input" onChange={handleSearch}/>
   
    </form>
   </div>
{filterCoins.map((coin,i)=>{
  console.log(coin)
  return (
    <Coin 
    index={i+1}
    name={coin.name}
    image={coin.image}
    symbol={coin.symbol}
    price={coin.current_price}
    volume={coin.total_volume}
    priceChange={coin.price_change_percentage_24h}
    marketCap={coin.market_cap}

    />

    
  )
})}
</div>
  );
}

export default App;
