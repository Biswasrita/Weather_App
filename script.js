const apikey = "911523ffd8ed7859e54fc52d3f929ef7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); /*when people will click on this search button it should send the city information in checkweather func.*/

const weatherIcon = document.querySelector(".weatherIcon");

async function chechweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    /*Error-handling part*/
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();


        /*console.log(data);*/

        document.querySelector(".city").innerHTML = data. name;
        document.querySelector(".temp").innerHTML = Math.round(data. main.temp )+ "°C";   /*as we need temp in celcius*/  /*we need to round off also as it shown only integer value*/
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";    /*need percentage sign*/
        document.querySelector(".wind").innerHTML = data. wind.speed + "km/hr";

        /*want to update the image according to the weather condition*/
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "partly-cloudy-weather-icon_1239075-585-removebg-preview.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "9844576-removebg-preview.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "png-transparent-rain-meteorology-cloud-thunderstorm-lightning-rain-weather-icon-material-free-to-pull-free-logo-design-template-camera-icon-drop-removebg-preview.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images-removebg-preview.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "5595.png_1200-removebg-preview.png";
        }


        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click",()=>{
    chechweather(searchBox.value);
})
/*chechweather(); /*we want to add city name in this function ,that  will coming from the input field*/