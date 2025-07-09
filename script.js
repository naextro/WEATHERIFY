const uri = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(uri + city + `&appid=${api}`);
    if(response.status== 404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }else{


    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    const mainWeather = data.weather[0].main.toLowerCase();

    switch (mainWeather) {
        case "clear":
            weatherIcon.src = "./images/clear.png";
            break;
        case "clouds":
            weatherIcon.src = "./images/clouds.png";
            break;
        case "drizzle":
            weatherIcon.src = "./images/drizzle.png";
            break;
        case "rain":
            weatherIcon.src = "./images/rain.png";
            break;
        case "snow":
            weatherIcon.src = "./images/snow.png";
            break;
        case "mist":
        case "haze":
        case "fog":
        case "smoke":
            weatherIcon.src = "./images/mist.png";
            break;
        default:
            weatherIcon.src = "./images/clear.png";
            break;
    }
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";

}
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});



