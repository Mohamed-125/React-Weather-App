import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Wether from "./Components/Wether";
function App() {
  const [location, setLocation] = useState("cairo");
  const [wetherData, setWetherData] = useState([]);
  const inputRef = useRef();

  const WETHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=afd9fa78ea574d9347ee044a189a0ce1`;
  useLayoutEffect(() => {
    fetch(WETHER_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          alert("no city with this name ");
        } else {
          setWetherData(data);
          console.log(data);
        }
      });
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLocation(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <>
      <div
        style={{
          background:
            "url(https://raw.githubusercontent.com/fireclint/weather-app-react/main/src/assets/sunset.jpg) ",
          backgroundSize: "cover",
          filter: "britness(50%)",
          minHeight: "100vh",
          filter: "brightness(50%)",
          backgroundColor: "gray",
          position: "absolute",
          top: "0",
          zIndex: "-1",
          width: "100vw",
        }}
      ></div>
      <div
        style={{
          maxWidth: "1200px",
          marginInline: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={submitHandler}>
          <input
            placeholder="Enter location "
            className="app__locaton_input"
            type="text"
            ref={inputRef}
          />
        </form>
      </div>
      <Wether data={wetherData} />
    </>
  );
}

export default App;
