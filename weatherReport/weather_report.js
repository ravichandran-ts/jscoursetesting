function showweatherDetails(event) {
      event.preventDefault();

//debugger;

const city = document.getElementById('city').value;
const apiKey = 'e1d9dfcef281c60dec2e006d4b747fb5'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
.catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}


document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

