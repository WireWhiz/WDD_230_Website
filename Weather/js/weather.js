
var current_temp = 38;
var appearance = "Broken Clouds";
var high_temp = 41;
var humidity = 50;
var wind_speed = 5;

function setHTMLContent(className, content){
    console.log("setting html content");
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = content;
    }
};

function formatTemp(temp){
    return temp + "°F";
}

function windChill(temp, speed){
    return 35.74 + 0.6215 * temp 
    - 35.75 * Math.pow(speed, 0.16) 
    + 0.4275 * temp * Math.pow(speed, 0.16);
}

document.addEventListener("DOMContentLoaded", function(e){
    var date = new Date();
    setHTMLContent("current_forcast", formatTemp(current_temp) + " " + appearance);
    setHTMLContent("wind_chill", formatTemp(Math.round(windChill(current_temp, wind_speed))));
    setHTMLContent("high_temp", formatTemp(high_temp));
    setHTMLContent("humidity", humidity + "%");
    setHTMLContent("wind_speed", wind_speed + " mph");
});
