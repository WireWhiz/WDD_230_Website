var current_temp = 0;
var appearance = "";
var high_temp = 0;
var humidity = 0;
var wind_speed = 0;

function setHTMLContent(className, content){
    console.log("setting html content");
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = content;
    }
};

function ktof(k){
    return (parseFloat(k) - 273.15) * (9/5) + 32
}

function formatTemp(temp){
    return Math.round(temp) + "°F";
}

function windChill(temp, speed){
    return 35.74 + 0.6215 * temp 
    - 35.75 * Math.pow(speed, 0.16) 
    + 0.4275 * temp * Math.pow(speed, 0.16);
}



document.addEventListener("DOMContentLoaded", function(e){
    
    var cities = {
        "preston" : "5604473",
        "sodasprings" : "5607916",
        "fishhaven" : "5585010",
        "Cozumel" : "3530103"
    };
    var cityId = cities[document.getElementsByClassName("summary")[0].getAttribute("city")];

    var request = new Request("https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=d3592c4f63c5f209b009aad5c509510e");
    
    fetch(request).then(function(response){
        return response.json();
    }).then(function(jsonObject){
        console.log("Weather returned");
        console.log(jsonObject);
        current_temp = ktof(jsonObject["main"]["temp"]);
        high_temp = ktof(jsonObject["main"]["temp_max"]);
        humidity = jsonObject["main"]["humidity"];
        wind_speed = Math.round(jsonObject["wind"]["speed"] / 1.609);
        appearance = jsonObject["weather"][0]['description'];
        
        var date = new Date();
        setHTMLContent("current_forcast", String(formatTemp(current_temp)) + " " + appearance);
        setHTMLContent("wind_chill", formatTemp(windChill(current_temp, wind_speed)));
        setHTMLContent("high_temp", formatTemp(high_temp));
        setHTMLContent("humidity", humidity + "%");
        setHTMLContent("wind_speed", wind_speed + " mph");

    });
});
