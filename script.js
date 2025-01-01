const URL =
  "https://api.openweathermap.org/data/2.5/weather?appid=2bd809cccb036a7de43479561d2d58a0&units=metric&q=";

const inputBox = document.querySelector(".city-input");
const button = document.querySelector(".search-btn");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const description = document.querySelector(".description");

const searchWeather = async (val) => {
  let response = await fetch(`${URL}${val}`);
  let data = await response.json();
  console.log(data);
  console.log(data.weather[0].main);
  console.log(data.weather[0].description);

  cityName.innerHTML = data.name;
  temperature.innerHTML = `${data.main.temp}°`;
  wind.innerHTML = `Wind: ${data.wind.speed} km/h`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}% `;
  description.innerHTML = `${data.weather[0].description}`;
};

button.addEventListener("click", () => {
  searchWeather(inputBox.value);
});
