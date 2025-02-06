export const DailyForecast = () => {
    const section = document.createElement("section");
    section.innerHTML = `
              <section id="daily-forecast">
              <h2 class="text-2xl font-semibold mb-4">5-Day Forecast</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div class="bg-big-stone rounded-lg p-4">
                      <h3 class="font-semibold">Mon, Jun 5</h3>
                      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon" class="w-12 h-12">
                      <p>High: 78°F</p>
                      <p>Low: 62°F</p>
                      <p>Sunny</p>
                      <p>Precipitation: 10%</p>
                      <p>Wind: 6 mph</p>
                  </div>
                  <div class="bg-big-stone rounded-lg p-4">
                      <h3 class="font-semibold">Tue, Jun 6</h3>
                      <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon" class="w-12 h-12">
                      <p>High: 80°F</p>
                      <p>Low: 65°F</p>
                      <p>Partly Cloudy</p>
                      <p>Precipitation: 20%</p>
                      <p>Wind: 8 mph</p>
                  </div>
                  <div class="bg-big-stone rounded-lg p-4">
                      <h3 class="font-semibold">Wed, Jun 7</h3>
                      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather icon" class="w-12 h-12">
                      <p>High: 75°F</p>
                      <p>Low: 60°F</p>
                      <p>Light Rain</p>
                      <p>Precipitation: 60%</p>
                      <p>Wind: 10 mph</p>
                  </div>
                  <div class="bg-big-stone rounded-lg p-4">
                      <h3 class="font-semibold">Thu, Jun 8</h3>
                      <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon" class="w-12 h-12">
                      <p>High: 72°F</p>
                      <p>Low: 58°F</p>
                      <p>Cloudy</p>
                      <p>Precipitation: 30%</p>
                      <p>Wind: 7 mph</p>
                  </div>
                  <div class="bg-big-stone rounded-lg p-4">
                      <h3 class="font-semibold">Fri, Jun 9</h3>
                      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon" class="w-12 h-12">
                      <p>High: 76°F</p>
                      <p>Low: 61°F</p>
                      <p>Sunny</p>
                      <p>Precipitation: 5%</p>
                      <p>Wind: 5 mph</p>
                  </div>
              </div>
          </section>
    `
    return section;
}