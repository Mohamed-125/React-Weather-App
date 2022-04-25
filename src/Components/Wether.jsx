import React from "react";
import "./Wether.css";
const Wether = ({ data }) => {
  return (
    <>
      <div className="weatherData__div section__padding">
        {Object.keys(data).length > 0 ? (
          <>
            <p>{data.name}</p>
            <h2>{data.main.temp}°F</h2>
            <p className="weatherData__country">{data.sys.country}</p>
            <p className="weatherData__subText">{data.weather[0].main}</p>
          </>
        ) : null}
      </div>
      {Object.keys(data).length > 0 ? (
        <>
          <div className="weatherData__buttom_section section__padding">
            <div>
              <p className="weatherData_bottom_section_info">
                {data.main.feels_like}
              </p>
              <p className="weatherData_bottom_section_text">Feels Like</p>
            </div>
            <div>
              <p className="weatherData_bottom_section_info">
                {data.main.humidity}
              </p>
              <p className="weatherData_bottom_section_text">Humidity</p>
            </div>
            <div>
              <p className="weatherData_bottom_section_info">
                {data.wind.speed}
              </p>
              <p className="weatherData_bottom_section_text">Wind Speed</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Wether;
