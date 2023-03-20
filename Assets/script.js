var myAPIKey = '2f0ac3b71bca0bcab4177e1d01bb9916';
var searchBtn = document.getElementById("#searchBtn");
var city = document.getElementById("city").value;
var cities = [];
var lon = [];
var lat = [];
var today = dayjs();

console.log(city.value);

function saveCity(city) {
    city.push(cities);
    localStorage.setItem("Searched",JSON.stringify(cities));
    console.log(cities);
    
}


function searchCity(event) {
    event.preventDefault();
    cityDisplay = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + myAPIKey + "&units=metric";
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=")
    .then(function (response) {
        return response.json();
    })
};    

