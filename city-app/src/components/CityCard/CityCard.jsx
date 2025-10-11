const CityCard = (weather) => {

    const getWeatherIcon = () => {
        if (weather.weather && weather.weather[0]) {
            return `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        }
    }
    return (
        <div className="city-card">
            <div className="container">
                <div className="city-info">
                    <img src={getWeatherIcon}
                        alt={weather.weather[0].description} />
                    <div className="city-meta">
                        <span className="city-description">{weather.weather[0].description}</span>
                        <div className="city-details">
                            <span className="city-temp">Температура: {weather.main.temp} С°</span>
                            <div>
                                <span className="city-feels_like">Ощущается как: {weather.main.feels_like} С°</span>
                            </div>
                        </div>
                        <div>
                            <span className="city-pressure">Давление: {weather.main.pressure} Па</span>
                        </div>
                        <div>
                            <span className="city-humidity">Влажность: {weather.main.humidity} г/м³</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CityCard