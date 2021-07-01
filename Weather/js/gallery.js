
document.addEventListener("DOMContentLoaded", async function(e){
    var images = (await fetch("images/gallery/img_list.txt")).text();
    images = images.split("\n");

    console.log(images);
});