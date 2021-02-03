const search = document.getElementById('search');
const foundPlace = document.getElementById('found-place');
const temperature = document.getElementById('temperature');
const clouds = document.getElementById('anyClouds');
const weatherImg =  document.getElementById('weather-img');

search.addEventListener('click', function(){
  getWeather();
})

function getWeather(){
  let enteredPlace = document.getElementById('entered-place').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredPlace}&appid=90d1c68a162258c86c84fcf0d3cc75fa`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    foundPlace.innerText = data.name;
    temperature.innerText = data.main.temp;
    clouds.innerText = data.weather[0].description;
    let iconId = data.weather[0].icon;
    let iconAttribute = `http://openweathermap.org/img/w/${iconId}.png`;
    weatherImg.setAttribute('src', iconAttribute);
    document.getElementById('entered-place').focus();
  })
}