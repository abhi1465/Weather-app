const apiKey='67f71d584807498b3352a9dc12d07843';
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);

    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data=await response.json();
        var word=data.weather[0].main;
        var word =word.charAt(0).toLowerCase()+ word.slice(1)
        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";
        document.querySelector(".weather-icon").setAttribute("src","./images/"+word+".png");
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        var soundName=word;
        var audio = new Audio("./sounds/"+soundName+".mp3");
        audio.play();
        
    }
    

}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
})