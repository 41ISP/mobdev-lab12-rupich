import { useNavigate } from "react-router-dom"
import "/src/pages/Serch/Serch.css"
const CityCard = (weather) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/weather/${weather.name}`)
    }
    return (
        <div onClick={handleClick} className="city-card">
            <div className="city-header">
                <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
            </div>
            <div className="city-main">
                <div className="city-description">{weather.weather[0].description}</div>
                <div className="temperature">Температура: {weather.main.temp} С°</div>
                <div className="weather-details">
                    <div className="detail-item">
                        <span className="detail-label">Ощущается как:</span>
                        <span className="detail-value">{weather.main.feels_like} С°</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Давление:</span>
                        <span className="detail-value">{weather.main.pressure} Па</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Влажность:</span>
                        <span className="detail-value">{weather.main.humidity} г/м³</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Ветер:</span>
                        <span className="detail-value">{weather.wind.speed} m/s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CityCard