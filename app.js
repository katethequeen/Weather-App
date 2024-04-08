const apiKey = "ae5fc3f666a7f41b75b289878e7bd4de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBtn = document.getElementById("searchBtn");
let userInput = document.querySelector("input");
let responseBox = document.querySelector(".response-box");
let moreInfo = document.querySelector(".more-info");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 
    var data = await response.json();
    console.log(data);

    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("humidity-info").innerHTML = data.main.humidity + "%";
    document.getElementById("wind-speed").innerHTML = data.wind.speed + "Km/h";

    var icon = document.getElementById("icon");

    if (data.weather[0].main === "Clouds") {
        icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        icon.style.color = "#6b6838";
    } else if (data.weather[0].main === "Clear") {
        icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        icon.style.color = "#c1ed3c";
    } else if (data.weather[0].main == "Drizzle") {
        icon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        icon.style.color = "#3a6384";
    } else if (data.weather[0].main == "Haze") {
        icon.innerHTML = '<i class="fa-solid fa-smog"></i>';
        icon.style.color = "#29694e";
    } else if (data.weather[0].main == "Rain") {
        icon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        icon.style.color = "#3438ad";
    } else if (data.weather[0].main == "Snow") {
        icon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
        icon.style.color = "#fff";
    }
} 

searchBtn.addEventListener("click", () => {
    checkWeather(userInput.value);
    responseBox.style.display = "block";
    moreInfo.style.display = "flex";
})






