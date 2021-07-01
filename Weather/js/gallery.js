
document.addEventListener("DOMContentLoaded", function(e){
    var images = null;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           images = request.responseText.split("\n");
           
            console.log(images);
        }
    };
    request.open("GET", "images/gallery/img_list.txt", true);
    request.send();
});