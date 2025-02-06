export const CurrentWeather = (
    {
        city,
        currentTemp,
        feelsLike,
        condition ,
        icon,
        humidity,
        windSpeed,
        sunrise,
        sunset 
    }
) => {
    const section = document.createElement("section");

    section.innerHTML = `
    <section id="current-weather" class="bg-big-stone rounded-lg p-6 mb-8">
            <h2 id="city-name-display" class="text-2xl font-semibold mb-4">Current Weather in ${city}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-4xl font-bold">${currentTemp}°F</p>
                    <p class="text-xl">Feels like: ${feelsLike}°F</p>
                    <p class="text-lg">${condition}</p>
                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon" class="w-16 h-16">
                </div>
                <div>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} mph</p>
                    <p>Sunrise: ${sunrise} AM</p>
                    <p>Sunset: ${sunset} PM</p>
                </div>
            </div>
        </section>
    `
    return section;
}