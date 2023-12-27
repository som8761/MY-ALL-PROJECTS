const apiKey = "66357b34fd68f540089945a7deacc486";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&units=imperial&q=";

const weather_temperature = document.getElementById("weather_temperature");
const city = document.getElementById("city");
const humidity = document.querySelector("#humidity p");
const wind_speed = document.querySelector("#wind_speed p");
const search_icon = document.querySelector(".search_icon");
const search_input = document.getElementById("search_input");
const weather = document.getElementById("weather");
const weather_img = document.querySelector(".weather_img");
const error = document.querySelector('.error');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
      // console.log(data);
      // console.log(data.main.temp);
      // console.log(data.name);
    if(response.status === 404){
        error.style.display = 'block';
        weather.style.display = 'none';
    }
    else{
        weather_temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
        city.innerHTML = `${data.name}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind_speed.innerHTML = `${data.wind.speed}Km/h`;
    
        data.weather.map((clouds) => {
          if (clouds.main === "Rain" || clouds.main === "Drizzle") {
            weather_img.src = "weather-app-img/images/rain.png";
          } else if (clouds.main === "Snow") {
            weather_img.src = "weather-app-img/images/snow.png";
          } else if (clouds.main === "Mist") {
            weather_img.src = "weather-app-img/images/mist.png";
          } else if (clouds.main === "Clear") {
            weather_img.src = "weather-app-img/images/clear.png";
          } else if (clouds.main === "Clouds") {
            weather_img.src = "weather-app-img/images/clouds.png";
          } else if (clouds.main === "Haze") {
            weather_img.src = "weather-app-img/images/drizzle.png";
          }
        });

        weather.style.display = 'block';
        error.style.display = 'none';
    }

    
}

search_icon.addEventListener("click", () => {
    const cityName = search_input.value;
    if(cityName !== ''){
        checkWeather(cityName)
    }
    else{
        console.error('city name is empty,Please enter a valid city name.');
    }
});


