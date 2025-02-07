export const ForecastCard = ({
    date,
    maxTemp, 
    minTemp, 
    weatherCondition, 
    icon, 
    precipProb, 
    windSpeed }
) => {
    const card = document.createElement("div");
    
    card.innerHTML = `
    <div div class="bg-big-stone rounded-lg p-4">
        <h3 class="font-semibold">${date}</h3>
        <img src="${icon}" alt="Weather icon" class="w-12 h-12">
        <p>High: ${maxTemp}°C</p>
        <p>Low: ${minTemp}°C</p>
        <p>${weatherCondition}</p>
        <p>Precipitation: ${precipProb}%</p>
        <p>Wind: ${windSpeed} km/h</p>
    </div>
    `
    return card;
}