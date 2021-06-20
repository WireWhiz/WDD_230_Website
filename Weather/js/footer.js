
document.addEventListener("DOMContentLoaded", function(e){
    var date = new Date();
    console.log("Finding date display");
    var elements = document.getElementsByClassName("date_display")
    console.log(elements);
    console.log(elements.length);
    console.log(elements);

    for (var i = 0; i < elements.length; i++){
        console.log("Found date display");
        elements[i].innerHTML = date.toString();
    }
});
