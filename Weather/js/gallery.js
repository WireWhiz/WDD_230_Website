
document.addEventListener("DOMContentLoaded", async function(e){
    console.log((await fetch("images/gallery/img_list.txt")).text());
});