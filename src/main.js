import { CurrentWeather } from './CurrentWeather';
import { DailyForecast } from './DailyForecast';
import { ErrorDisplay } from './ErrorDisplay';
const appBody = document.querySelector("#app");
const locationInput = document.querySelector("#location-input");
const searchQueryBtn = document.querySelector("#search-query-button");

searchQueryBtn.addEventListener("click", () => {
    if(!locationInput.value) {
        return
    }
    cleanAppLayout()
    getWeather(getUserQuery())
})

const getUserQuery = () => {
    let searchQuery = locationInput.value;
    locationInput.value = ""
    return searchQuery
}

function cleanAppLayout() {
    appBody.innerHTML = ""
}


async function getWeather(city) {
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

        const forecastArray = data.days.map(day => (
            {
                date: day.datetime,
                maxTemp: day.tempmax,
                minTemp: day.tempmin,
                weatherCondition: day.conditions,
                icon: day.icon,
                precipProb: day.precipprob,
                windSpeed: day.windspeed
            }
        ))

        appBody.appendChild(CurrentWeather(currentWeatherInfo));
        appBody.appendChild(DailyForecast(forecastArray));
   }
   catch(error) {
    //    console.error(error)
       appBody.appendChild(ErrorDisplay())
   }
}

getWeather("Cologne")