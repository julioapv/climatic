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

        let cityName = data.adress;

        let currentWeatherInfo = {
            city: data.address,
            currentTemp: data.currentConditions.temp,
            feelsLike: data.currentConditions.feelslike,
            condition: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
            humidity: data.currentConditions.humidity
        }

        console.log(cityName);
        console.log(currentWeatherInfo.feelsLike);

        
    
        appBody.appendChild(CurrentWeather(currentWeatherInfo.city));

    
   }
   catch(error) {
       console.error(error)
   }
}
// appBody.appendChild(CurrentWeather(data.address));
appBody.appendChild(DailyForecast());


getResponse("lyon")