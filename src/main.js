import './style.css'
import { CurrentWeather } from './CurrentWeather';
import { DailyForecast } from './DailyForecast';

const appBody = document.querySelector("#app");


async function getResponse(city) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=DSFV7FNKTT4KEK5QWBJQXQTJR&contentType=json`
        )
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        let currentWeatherInfo = {
            city: data.address,
            currentTemp: data.currentConditions.temp,
            feelsLike: data.currentConditions.feelslike,
            condition: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
            sunrise: data.currentConditions.sunrise,
            sunset: data.currentConditions.sunset
        }
    
        let dailyForecastInfo = {
            date: data.days[0].datetime
        }

        console.log(dailyForecastInfo.date);
        

        appBody.appendChild(CurrentWeather(currentWeatherInfo));
        appBody.appendChild(DailyForecast(dailyForecastInfo));

    
   }
   catch(error) {
       console.error(error)
   }
}
// appBody.appendChild(CurrentWeather(data.address));


getResponse("Bergheim")