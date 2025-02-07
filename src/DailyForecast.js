import { ForecastCard } from "./ForecastCard";

export const DailyForecast = (forecastArray) => {
    const container = document.createElement("section");
    
    container.innerHTML = `
            <h2 class="text-2xl font-semibold mb-4">5-Day Forecast</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            </div>
            `
    const gridContainer = container.querySelector(".grid");

    forecastArray.slice(0, 5).forEach(day => {
      gridContainer.appendChild(ForecastCard(day));
    });

    return container;
}