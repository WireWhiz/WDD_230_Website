document.addEventListener("DOMContentLoaded", function(e){
    var content = document.getElementById("towns");
    var data = fetch('https://byui-cit230.github.io/weather/data/towndata.json').then(function(response){
        return response.json();
    }).then(function(jsonObject){
        jsonObject["towns"].forEach(town => {
            var container = document.createElement("div");
            container.setAttribute("class", "town_data");

            var text = document.createElement("div");
            text.setAttribute("class", "town_text");

            var header = document.createElement("h2");
            header.setAttribute("class", "town_header");

            var phrase = document.createElement("p");
            phrase.setAttribute("class", "town_phrase");

            var stat1 = document.createElement("p");
            stat1.setAttribute("class", "town_stat");

            var stat2 = document.createElement("p");
            stat2.setAttribute("class", "town_stat");

            var stat3 = document.createElement("p");
            stat3.setAttribute("class", "town_stat");

            var image = document.createElement("img");
            image.setAttribute("class", "town_image");
            image.setAttribute("loading", "lazy");
            image.setAttribute("src", "images/towns/" + town["photo"]);


            header.innerText = town["name"];
            phrase.innerText = town["motto"];
            stat1.innerText = "Year founded: "     + town["yearFounded"];
            stat2.innerText = "Population: "       + town["currentPopulation"];
            stat3.innerText = "Annual Rain Fall: " + town["averageRainfall"]


            text.appendChild(header);
            text.appendChild(phrase);
            text.appendChild(stat1);
            text.appendChild(stat2);
            text.appendChild(stat3);

            container.appendChild(text);
            container.appendChild(image);

            content.appendChild(container);
            
        });
    });
});