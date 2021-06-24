
document.addEventListener("DOMContentLoaded", function(e){
    var date = new Date();
    if(date.getDay() === 5)
        document.getElementsByClassName("banner")[0].classList.remove("hidden");
});