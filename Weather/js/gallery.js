
document.addEventListener("DOMContentLoaded", function(e){
    var images = null;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           images = request.responseText.split("\n");
           
            console.log(images);

            var gallery = document.getElementsByClassName("gallery")[0];
            images.forEach(image => {
                var imageElement = document.createElement("img");
                imageElement.setAttribute("src", image);
                imageElement.setAttribute("class", "gallery_img");
                gallery.appendChild(newImage);
            });
            
        }
    };
    request.open("GET", "images/gallery/img_list.txt", true);
    request.send();
});