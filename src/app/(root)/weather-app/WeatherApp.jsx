"use client";

import { useState } from "react";

const WeatherApp = () => {
    const [city , setCity ]= useState("");
    const [cityDetails,setCityDetails] = useState(null);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8572b723fd0ef1b96625f8644b0d2965`).then(res => res.json()).then(res => setCityDetails(res));
    console.log(cityDetails)
    setCity("");
  };
  return (
    <div>
      <div>
        <div className="text-white">
          <form onSubmit={handlerSubmit}>
            <input
              type="text"
              className="border-1 border-black"
              placeholder="City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>


      </div>

      {cityDetails && <div className="mt-10">
          <h1>Details</h1>
          <div>
              <div>{cityDetails?.sys.country}</div>
              <div>{cityDetails?.weather[0].description}</div>
            
          </div>
      </div>}
    </div>
  );
};
export default WeatherApp;
