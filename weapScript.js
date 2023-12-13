/**
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * CHAPTER 14 -- Advance Weather App
 */
console.log('Halo weap!')

let cityInput = 'denpasar'
let cityWeather

const weApp = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial` //'https://open-weather13.p.rapidapi.com/city/denpasar';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '56a3d26db5mshb6ecbe2554e0248p1d660ajsna251b894aa2d',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    fetch(url).then(response => response.json())
        .then(json => console.log('json response w/o try-catch:', (json.name)))
        .catch(err => console.error('ada error:', err))
/*
    try {
        const response = await fetch(url, options);
        const result = await response //response.text();
        
        console.log('response:', result);
    } catch (error) {
        console.error(error);
    }
    */
}

weApp()
console.log('\n')

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial` //'https://open-weather13.p.rapidapi.com/city/denpasar';
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '56a3d26db5mshb6ecbe2554e0248p1d660ajsna251b894aa2d',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  return fetch(url).then(response => response.json()) //'return' is ADDED DUE to USE of 'async' IN searchCity()
    .then(jsonData => jsonData)
    /* --> COMMENTED DUE to USE of ABOVE CODE
    .then(json => {
      console.log(`json response getWeatherData() of ${city}:`, (json))
      cityWeather = json.main.temp
      console.log('city weather = ' + cityWeather)
    })
    */
    .catch(err => console.error('ada error:', err))
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => { //'async' is USED TO LOAD getWeatherData(kota) & showWeatherData(kota) IN SEQUENCE
  const kota = document.getElementById('city-input').value;
  // CODE GOES HERE
  console.log('city input: ' + kota)
  cityInput = kota

  const data = await getWeatherData(kota) //getWeatherData(kota) --> COMMENTED DUE to USE of 'async'
  showWeatherData(data) //showWeatherData(kota) --> COMMENTED DUE to USE of 'async'
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('temp').innerText = (weatherData.main.temp-32) * 5/9 //cityWeather //'86.6' --> COMMENTED DUE to USE of 'async' in searchCity()
  document.getElementById('min-temp').innerText = (weatherData.main.temp_min-32) * 5/9
  document.getElementById('max-temp').innerText = (weatherData.main.temp_max-32) * 5/9

  console.log('data cuaca: ', weatherData)
}

