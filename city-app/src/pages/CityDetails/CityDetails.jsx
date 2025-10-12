import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import "../CityDetails/CityDetalis.css"

const CityDetails = () => {
    const { city } = useParams()
    const navigate = useNavigate()
    const [weather, setWeather] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const WeatherDetails = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fb2e9227e3f5d5244265557561113bf6&units=metric&lang=ru`)
                const json = await res.json();
                setWeather(json);
            } catch (err) {
                setError(err.message)
                console.error(err)
            }
        }
        WeatherDetails();
    })

    const getWeatherIcon = () => {
        if (weather.weather && weather.weather[0]) {
            return `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
        }
    }

    return (
        <div className="weather-details-container">
            <div className="weather-details">
                <Link to="/" className="back-button">← Back to Search</Link>
                <div className="weather-header">
                    <h1 className="city-name">{weather.name}, {weather.sys && weather.sys.country}</h1>
                    <div className="weather-main-info">
                        <img
                            src={getWeatherIcon()}
                            alt={weather.weather && weather.weather.description}
                            className="weather-icon-large"
                        />
                        <div className="temperature-section">
                            <div className="current-temp">{weather.main && weather.main.temp}°C</div>
                            <div className="weather-description">{weather.weather && weather.weather.description}</div>
                        </div>
                    </div>
                </div>

                <div className="weather-content">
                    <div className="info-grid">
                        <div className="info-section">
                            <h3>Основные показатели</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="info-label">Ощущается как:</span>
                                    <span className="info-value">{weather.main && weather.main.feels_like}°C</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Минимальная температура:</span>
                                    <span className="info-value">{weather.main && weather.main.temp_min}°C</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Максимальная температура:</span>
                                    <span className="info-value">{weather.main && weather.main.max}°C</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Влажность:</span>
                                    <span className="info-value">{weather.main && weather.main.humidity} г/м³</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3>Атмосферные условия</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="info-label">Давление:</span>
                                    <span className="info-value">{weather.main && weather.main.pressure} Па</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Видимость:</span>
                                    <span className="info-value">{weather.visibility / 1000 + ' km'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Облачность:</span>
                                    <span className="info-value">{weather.clouds && weather.clouds.all} %</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3>Ветер</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="info-label">Скорость:</span>
                                    <span className="info-value">{weather.wind && weather.wind.speed} m/s</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Направление:</span>
                                    <span className="info-value">{weather.wind && weather.wind.deg}°</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Порывы:</span>
                                    <span className="info-value">{weather.wind && weather.wind.gust} m/s</span>
                                </div>
                            </div>
                        </div>
                        <div className="info-section">
                            <h3>Солнце</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="info-label">Восход:</span>
                                    {weather.sys && <span className="info-value">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString('ru-RU')}</span>}
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Закат:</span>
                                    {weather.sys && <span className="info-value">{new Date(weather.sys.sunset * 1000).toLocaleTimeString('ru-RU')}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CityDetails