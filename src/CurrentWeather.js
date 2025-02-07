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
    const imgLink = `/assets/icons/${icon}.png`
    const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()


    section.innerHTML = `
    <section id="current-weather" class="bg-big-stone rounded-lg p-6 mb-8">
            <h2 id="city-name-display" class="text-2xl font-semibold mb-4">Current Weather in ${cityName}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-4xl font-bold">${currentTemp}°C</p>
                    <p class="text-xl">Feels like: ${feelsLike}°C</p>
                    <p class="text-lg">${condition}</p>
                    <img src="${imgLink}" alt="icon ${icon} icon" class="w-16 h-16">
                </div>
                <div>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} km/h</p>
                    <p>Sunrise: ${sunrise} AM</p>
                    <p>Sunset: ${sunset} PM</p>
                </div>
            </div>
        </section>
    `
    return section;
}