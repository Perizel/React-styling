import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApiMeaning.css'; 

export default function ApiMeaning() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://raw.githubusercontent.com/nully0x/react-api-meaning/main/assigment.json');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index}>
          <h2 className="title">{Object.keys(item)[0]}</h2>
          <ul className="list">
            {Object.entries(item[Object.keys(item)[0]]).map(([key, value]) => (
              <li className="list-item" key={key}>
                <span className="key">{key}:</span>
                <span className="value">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
