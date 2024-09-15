require('dotenv').config();

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = process.env.API_KEY;
const diffKelvin = 273.15;


document.getElementById('searchButton').addEventListener('click', () => {
	const city = document.getElementById('cityInput').value;
	if (city) {
		fetchWeather(city)
	} else {
		alert('Ingrese una ciudad valida');
	}
})

const fetchWeather = (city) => {
	fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
		.then(data => data.json())
		.then(data => showCity(data))
}

const showCity = (data) => {
	const responseData = document.getElementById('responseData');
	responseData.innerHTML = `
    <div class="weather-info">
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
        <p>${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1).toLowerCase()}</p>
        <p><strong>La temperatura es de : </strong>${Math.round(data.main.temp - 273)} °C</p>
    </div>
`;
}
