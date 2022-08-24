import { useState, useEffect } from 'react'
import WeatherForm from "./components/WeatherForm"

const App = () => {

  const [userLocation, setuserLocation] = useState("")
  const [temp, SetTemp] = useState("");
  const [desc, SeDesc] = useState("");
  const [icon, SetIcon] = useState("");
  const [humidity, SetHumidity] = useState(null);
  const [wind, SetWind] = useState(null);
  const [city, SetCity] = useState("");
  const [country, SetCountry] = useState("");
  const [dataFetched, setDataFetched] = useState(false);


 const getWeather = async (e) => {
    e.preventDefault();

    try {

      if (userLocation != "") {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${userLocation}&appid=${import.meta.env.VITE_WATHER_KEY}&units=metric`)
        const data = await res.json();

        SetTemp(data.main.temp)
        SeDesc(data.weather[0].description)
        SetIcon(data.weather[0].icon)
        SetHumidity(data.main.humidity)
        SetWind(data.wind.speed)
        SetCity(data.name)
        SetCountry(data.sys.country)
      }else{
        alert("Please enter a valid city")
      }

      setDataFetched(true)

    } catch (error) {
      console.log(error);
    }

  }

 const defaultGetWeather = async () => {

  if(!dataFetched){

    const res = await fetch(`${import.meta.env.VITE_API_URL}chicago&appid=${import.meta.env.VITE_WATHER_KEY}&units=metric`)
    const data = await res.json();

    SetTemp(data.main.temp)
    SeDesc(data.weather[0].description)
    SetIcon(data.weather[0].icon)
    SetHumidity(data.main.humidity)
    SetWind(data.wind.speed)
    SetCity(data.name)
    SetCountry(data.sys.country)

  }

 }

  useEffect(() => {
    defaultGetWeather()
  }, [])
  

  return(
    <>
      <WeatherForm text={(e) => setuserLocation(e.target.value)}  temp={temp} desc={desc} icon={icon} func={getWeather} humidity={humidity} wind={wind} city={city} country={country}  submit={getWeather}/>
    </>

  );

}

export default App;