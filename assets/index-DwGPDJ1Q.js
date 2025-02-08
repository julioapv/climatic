(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g=({city:t,currentTemp:n,feelsLike:s,condition:o,icon:e,humidity:r,windSpeed:i,sunrise:l,sunset:d})=>{const a=document.createElement("section"),m=`/climatic/assets/icons/${e}.png`,h=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return a.innerHTML=`
    <section id="current-weather" class="bg-big-stone rounded-lg p-6 mb-8">
            <h2 id="city-name-display" class="text-2xl font-semibold mb-4">Current Weather in ${h}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-4xl font-bold">${n}°C</p>
                    <p class="text-xl">Feels like: ${s}°C</p>
                    <p class="text-lg">${o}</p>
                    <img src="${m}" alt="icon ${e} icon" class="w-16 h-16">
                    </div>
                <div class="md:text-xl md:flex md:flex-col md:gap-2 ">
                    <p>Humidity: ${r}%</p>
                    <p>Wind Speed: ${i} km/h</p>
                    <p>Sunrise: ${l} AM</p>
                    <p>Sunset: ${d} PM</p>
                </div>
            </div>
        </section>
    `,a},f=({date:t,maxTemp:n,minTemp:s,weatherCondition:o,icon:e,precipProb:r,windSpeed:i})=>{const l=document.createElement("div"),d=`/climatic/assets/icons/${e}.png`,a=t.replace("2025-","");return l.innerHTML=`
    <div class="bg-big-stone rounded-lg p-4">
        <h3 class="font-semibold">${a}</h3>
        <img src="${d}" alt="Weather icon" class="w-12 h-12">
        <p>High: ${n}°C</p>
        <p>Low: ${s}°C</p>
        <p>${o}</p>
        <p>Precipitation: ${r}%</p>
        <p>Wind: ${i} km/h</p>
    </div>
    `,l},y=t=>{const n=document.createElement("section");n.innerHTML=`
            <h2 class="text-2xl font-semibold mb-4">5-Day Forecast</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            </div>
            `;const s=n.querySelector(".grid");return t.slice(0,5).forEach(o=>{s.appendChild(f(o))}),n},b=()=>{const t=document.createElement("div"),n="bg-rose-900 rounded-lg p-10".split(" ");return t.classList.add(...n),t.innerHTML=`
    <p class="font-bold text-3xl mb-4">Something happened :(</p>
    <p class="text-xl">Please make sure of the following:</p>
    <ul class="list-disc mb-4">
        <li>Check the spelling of the place you want to search</li>
        <li>Don't include numbers or special characters</li>
        <li>Check your connection to the internet</li>
    </ul>
    <p>If nothing of the aboved work please try again later or contact  <a href="https://github.com/julioapv" target="_blank" class="font-bold">support</a>  to get help</p>
    `,t},C=()=>{const t=document.createElement("div"),n="flex items-center justify-center mx-auto w-1/2 h-30 bg-big-stone rounded-2xl".split(" ");return t.classList.add(...n),t.innerHTML=`
    <div class="flex items-center justify-center rounded-lg">
        <p class="text-3xl font-bold italic">Loading data, please be patient...</p>
    </div>
    `,t},c=document.querySelector("#app"),p=document.querySelector("#location-input"),v=document.querySelector("#search-query-button");v.addEventListener("click",()=>{p.value&&(L(),u(x()))});const x=()=>{let t=p.value;return p.value="",t};function L(){c.innerHTML=""}async function u(t){const n=C();c.appendChild(n);try{const s=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}?unitGroup=metric&key=DSFV7FNKTT4KEK5QWBJQXQTJR&contentType=json`);if(!s.ok)throw new Error("Failed to fetch data");const o=await s.json();n.remove();let e={city:o.address,currentTemp:o.currentConditions.temp,feelsLike:o.currentConditions.feelslike,condition:o.currentConditions.conditions,icon:o.currentConditions.icon,humidity:o.currentConditions.humidity,windSpeed:o.currentConditions.windspeed,sunrise:o.currentConditions.sunrise,sunset:o.currentConditions.sunset};const r=o.days.map(i=>({date:i.datetime,maxTemp:i.tempmax,minTemp:i.tempmin,weatherCondition:i.conditions,icon:i.icon,precipProb:i.precipprob,windSpeed:i.windspeed}));c.appendChild(g(e)),c.appendChild(y(r))}catch(s){console.error(s),c.appendChild(b()),n.remove()}}u("Cologne");
