const Input = document.getElementById('country'); 
const displaySpan = document.getElementsByClassName('weather');
const Search  =  document.getElementById('search');
const countryDisplay  =  document.getElementById('countryDisplay');
const weatherData  =  document.getElementById('weatherData');
const rain  =  document.getElementById('Rain');
const cloud  =  document.getElementById('Clouds');
const weather  =  document.getElementById('Weather');
const feels  =  document.getElementById('feels_like');
const temp  =  document.getElementById('temperature');
const humidity  =  document.getElementById('Humidity');
const pressure  =  document.getElementById('Pressure');
const seaLevel  =  document.getElementById('SeaLevel');
const grndLevel  =  document.getElementById('GrndLevel');
const wind  =  document.getElementById('Wind');
const visibility  =  document.getElementById('Visibilty');
const latitude  =  document.getElementById('lat');
const longitude  =  document.getElementById('long');
const latitude1  =  document.getElementById('lat1');
const  longitude1 =  document.getElementById('long1');
const dateDiv  =  document.getElementById('date');

 
const humidityDiv = document.createElement('div');
const tempDiv = document.createElement('div');
const grndLevelDiv = document.createElement('div');
const seaLevelDiv = document.createElement('div');
const windDiv = document.createElement('div');
const feelsDiv = document.createElement('div');
const cloudDiv = document.createElement('div');
const pressureDiv = document.createElement('div');
const latt = document.createElement('div');
const long = document.createElement('div');

humidityDiv.classList.add('datas');
tempDiv.classList.add('datas');
grndLevelDiv.classList.add('datas');
seaLevelDiv.classList.add('datas');
windDiv.classList.add('datas');
feelsDiv.classList.add('datas');
cloudDiv.classList.add('datas');
pressureDiv.classList.add('datas');
latt.classList.add('L');
long.classList.add('L');

humidity.appendChild(humidityDiv);
temp.appendChild(tempDiv);
grndLevel.appendChild(grndLevelDiv);
seaLevel.appendChild(seaLevelDiv);
wind.appendChild(windDiv);
feels.appendChild(feelsDiv);
cloud.appendChild(cloudDiv);
pressure.appendChild(pressureDiv);



Search.addEventListener('click', () => {

  const country = Input.value;

      countryDisplay.value = `${country}`;
  
      if(countryDisplay.value.lenght > 3){
        console.log('hi')
      }
      currentDate = new Date();
      dateDiv.value= `${currentDate}`

  

  const apiKey = '54db702bdfd8c38cb0df5a09326c2d50';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const lat = data.coord.lat;
      const lon = data.coord.lon;

      const rainData = data.rain;
      const cloudData = data.clouds;
      const feelsLike = data.main.feels_like;
      const visibiltyData = data.visibility;
      const windData = data.wind.speed;
      const tempData = data.main.temp;
      const humidityData = data.main.humidity;
      const pressureData = data.main.pressure;
      const seaLevelData = data.main.sea_level;
      const grndLevelData = data.main.grnd_level;
      const weatherdata = data.weather[0];

      console.log(weatherdata)

      console.log(data);

      const degreeSymbol = '\u00B0';

      // Update the content of div elements
      humidityDiv.textContent = `${humidityData}${degreeSymbol}C`;
      tempDiv.textContent = `${tempData}${degreeSymbol}C`;
      grndLevelDiv.textContent = `${grndLevelData}${degreeSymbol}C`;
      seaLevelDiv.textContent = `${seaLevelData}${degreeSymbol}C`;
      windDiv.textContent = `${windData}${degreeSymbol}C`;
      feelsDiv.textContent = `${feelsLike}${degreeSymbol}C`;
      cloudDiv.textContent = `${cloudData.all}%`;
      pressureDiv.textContent = `${pressureData}${degreeSymbol}C`;
      latitude1.value = `${lat}${degreeSymbol}`;
      longitude1.value = `${lon}${degreeSymbol}`;
      
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
