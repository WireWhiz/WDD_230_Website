
function setHTMLContent(className, content){
    console.log("setting html content");
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = content;
    }
};

document.addEventListener("DOMContentLoaded", function(e){
    var date = new Date();
    setHTMLContent("date_display", date.toString());
});