var APIKey = '2f0ac3b71bca0bcab4177e1d01bb9916';
var searchBtn = document.getElementById('searchBtn');
var city = document.querySelector('#city').value;
var input = document.querySelector('input');
var cities = [];
var lon = [];
var lat = [];
var today = dayjs('MMM D, YYYY');
test = city.value;
console.log(city);
console.log(cities); 


input.addEventListener("click", function() {
    city.push(cities);
    localStorage.setItem("Searched",JSON.stringify(cities));
    console.log(cities);  
});



function searchCity(event) {
    event.preventDefault();
    cityDisplay = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=")
    .then(function (response) {
        return response.json();
    })
};  
searchCity();  

