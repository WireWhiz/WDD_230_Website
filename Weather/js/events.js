document.addEventListener("DOMContentLoaded", function(e){
    var content = document.getElementById("towns");
    var data = fetch('https://byui-cit230.github.io/weather/data/towndata.json').then(function(response){
        return response.json();
    }).then(function(jsonObject){
        var events_list = document.getElementsByClassName("events_list")[0];
        var city = events_list.getAttribute("city");
        jsonObject["towns"].forEach(town => {
            if(town["name"].toLowerCase() == city.toLowerCase())
            {
                console.log(town);
                town["events"].forEach(event => {
                    var eventElement = document.createElement("li");
                    eventElement.setAttribute("class", "event_list_item");
                    eventElement.innerHTML = event;

                    events_list.appendChild(eventElement);
                });
            }
            

        });
    });
});