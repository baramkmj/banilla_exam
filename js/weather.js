const API_KEY = "c7b446d024492ea66b390d5c1b63c31c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const weatherIcon = {
    "01": "fas fa-sun",
    "02": "fas fa-cloud-sun",
    "03": "fas fa-cloud",
    "04": "fas fa-cloud-meatball",
    "09": "fas fa-cloud-sun-rain",
    10: "fas fa-cloud-showers-heavy",
    11: "fas fa-poo-storm",
    13: "fas fa-snowflake",
    50: "fas fa-smog",
  };

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather .icon");
      const temp = document.querySelector("#weather .temp");
      const city = document.querySelector("#weather .city");

      icon.innerHTML = `<i class="${
        weatherIcon[data.weather[0].icon.substr(0, 2)]
      }"></i>`;
      temp.innerText = `${Math.floor(data.main.temp)}°`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
