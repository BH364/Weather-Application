async function getWeather() {
    const apiKey = '06b6e20a34b23321540db292275434b1'; 
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === '404') {
        document.getElementById('weather').innerHTML = 'City not found. Please enter a valid city name.';
      } 
      else {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
        document.getElementById('weather').innerHTML = weatherInfo;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
}

