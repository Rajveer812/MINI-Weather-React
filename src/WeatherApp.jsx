import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Udaipur",
        feelslike:34.2,
        temp:25,
        tempMax:45,
        tempMin:34,
        humidity:34,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Mini Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}