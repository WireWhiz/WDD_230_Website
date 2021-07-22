
var request = new XMLHttpRequest();
request.open('GET', "json/rentals.json", false);
request.send(null);

var data = JSON.parse(request.responseText);

console.log(data);

var table = document.getElementsByClassName("rentals")[0];

var addCollumn = function(rowElement, text){
    var colElement = document.createElement("td");
    colElement.innerText = text;
    rowElement.appendChild(colElement)
}

data["rentals"].forEach(element => {
    var row = document.createElement("tr");

    console.log(element["type"]);
    addCollumn(row, element["type"])
    addCollumn(row, element["max"])
    addCollumn(row, element["reservation"]["half day"])
    addCollumn(row, element["reservation"]["full day"])
    addCollumn(row, element["walk-in"]["half day"])
    addCollumn(row, element["walk-in"]["full day"])

    table.appendChild(row);
});