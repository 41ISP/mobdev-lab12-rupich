import { useEffect, useState } from "react"
import CityCard from "../../components/CityCard/CityCard"
import "./Serch.css"

const Serch = () => {
    const [cityName, setCityName] = useState("")
    const [weather, setWeather] = useState(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(weather)
    }, [weather])

    const handleSearch = async () => {
        try {
            setWeather(undefined)
            setError("")
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=fb2e9227e3f5d5244265557561113bf6&units=metric&lang=ru`)
            const json = await res.json();
            if (json.cod !== 200) throw new Error("Город не найден")
            setWeather(json);
        } catch (err) {
            setError(err.message)
            console.error(err)
        }
    }
    return (
        <div className="container">
            <div className="header">
                <h1>Поиск</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Поиск по городу" value={cityName}
                        onChange={(e) => setCityName(e.target.value)} />
                    <button onClick={handleSearch} className="search-button">Найти</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </div>
            <h1>Погода</h1>
            <div className="weather-grid">
                {weather && <CityCard key={weather.id} {...weather} />}
            </div>
        </div>
    )
}
export default Serch