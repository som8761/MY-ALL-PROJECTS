// const city = "bengaluru"; // Correct spelling for "Bangalore"
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const apiKey = "66357b34fd68f540089945a7deacc486";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  if (response.status === 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    weather.style.display = "block";
    error.style.display = "none";

    weather_temperature.innerHTML = `${Math.round(data.main.temp)}°c`;
    cityName.innerHTML = `${data.name}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed}Km/h`;
    const sunriseTime  = new Date(data.sys.sunrise * 1000)
    const sunsetTime  = new Date(data.sys.sunset * 1000)
    sunrise.innerHTML = `sunrise : ${sunriseTime.toLocaleTimeString()}`
    sunset.innerHTML = `sunset : ${sunsetTime.toLocaleTimeString()}`

    data.weather.map((item) => {
      if (item.main === "Haze") {
        weather_img.src = `weather-app-img/images/drizzle.png`;
      } else if (item.main === "Clear") {
        weather_img.src = `weather-app-img/images/clear.png`;
      } else if (item.main === "Clouds") {
        weather_img.src = `weather-app-img/images/clouds.png`;
      } else if (item.main === "Mist") {
        weather_img.src = `weather-app-img/images/mist.png`;
      } else if (item.main === "Rain") {
        weather_img.src = `weather-app-img/images/rain.png`;
      } else if (item.main === "Snow") {
        weather_img.src = `weather-app-img/images/snow.png`;
      }
    });
  }
}

const search_icon = document.querySelector(".search_icon");
const search_input = document.getElementById("search_input");
const weather_temperature = document.getElementById("weather_temperature");
const cityName = document.getElementById("city");
const humidity = document.querySelector("#humidity p");
const wind_speed = document.querySelector("#wind_speed p");
const weather_img = document.querySelector(".weather_img");
const error = document.querySelector(".error");
const sunrise = document.querySelector(".sunrise p");
const sunset = document.querySelector(".sunset p");

search_icon.addEventListener("click", () => {
  const searchInput = search_input.value;
  if (searchInput !== "") {
    checkWeather(searchInput);
  } else {
    console.error(`write a city name to know the weather report`);
  }
});


// jadi amra search option a click kori tahole akta function run korche..ata normal..but ami chiachi j ami j value ta inoput field a likhchi seta as a argument oi function er parameter hisabe kaj korbe.mane ami jadi kono city r name jadi input field a likhi tahole sei city name ta as a argument kaj korbe checkwather er parameter hisabe...

