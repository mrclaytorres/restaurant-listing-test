import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { formatData } from './utilities/format-data.js';

function App() {
  const [data, setData] = useState([]);

  const fetchInfo = () => { 
    return axios.get('./restaurants.json') 
              .then((response) => setData(response.data));
  }
  
  useEffect(() => { 
    fetchInfo(); 
  }, [])

  const formattedData = formatData(data)
  console.log(formattedData);

  return (
    <div className="App px-5 pt-10">
      <header className="App-header">
        <h1 className="text-4xl md:text-6xl tracking-wide">Restaurant Listing</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {
          formattedData.sort().map(data => (
          <div className="my-10">
            <h3 className="text-3xl mb-5 tracking-wide">{ data.state }</h3>
            <ul className="px-5 pl-5">
              {
                data.restaurants.map( restaurant => (
                  <li className="text-xl tracking-wide">{ restaurant }</li>
                ))
              }
            </ul>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
