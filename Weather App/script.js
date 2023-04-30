//Setup the API key.
const apiKey = 'fd6ae094f357b78634b388d2a91fe5af';
// Get the elements from the DOM.
const weatherDataEl = document.getElementById('weather-data');
const cityInputEl = document.getElementById('city-input');
const formEl = document.querySelector('form');
//Add event listener to the form which triggers a function when the form is submitted.
formEl.addEventListener('submit', (e) => {
  //Prevent the default behaviour of the form.
  e.preventDefault();
  //Get the value of the input field.
  const city = cityInputEl.value;
  //Call the function to get the weather data.
  getWeatherData(city);
});
//Function to get the weather data.
const getWeatherData = async (city) => {
  //Make a request to the API.
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  //Convert the response to JSON format.
  const data = await response.json();
  //Call the function to display the weather data.
  displayWeatherData(data);
};
//Function to display the weather data.
const displayWeatherData = (data) => {
  //Extract relevant information from the data object.
  const { name, main, weather } = data;

  //Create HTML elements to display the weather data.
  const cityEl = document.createElement('h2');
  cityEl.textContent = name;

  const temperatureEl = document.createElement('p');
  temperatureEl.textContent = `Temperature: ${Math.round(
    main.temp - 273.15
  )}°C`;

  const weatherEl = document.createElement('p');
  weatherEl.textContent = `Weather: ${weather[0].description}`;

  //Clear any previous weather data.
  weatherDataEl.innerHTML = '';

  //Append the weather data elements to the weatherDataEl element.
  weatherDataEl.appendChild(cityEl);
  weatherDataEl.appendChild(temperatureEl);
  weatherDataEl.appendChild(weatherEl);
};
