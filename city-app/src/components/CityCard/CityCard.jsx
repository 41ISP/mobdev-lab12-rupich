const CityCard = (weather) => {

    const tempCelsius = weather.main?.temp
    const tempFahrenheit = (tempCelsius * 9/5) + 32
    const feelsLike = weather.main?.feels_like 

    const getWeatherIcon = () => {
        if (weather.weather && weather.weather[0]) {
            return `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        } 
    }
    return (
       <>
       </>
    )
}
export default CityCard