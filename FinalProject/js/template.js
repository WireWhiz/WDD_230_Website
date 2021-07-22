var getHTMLFile = function(path, filename){
    var request = new XMLHttpRequest();
    request.open('GET', path + '/' + filename + '.html', false);
    request.send(null);

    if (request.status === 200)
        return request.responseText;
    else
        return "XML request failed"
};

document.addEventListener("DOMContentLoaded", function(e){
    var headerElement = document.getElementsByClassName("header_template")[0];
    headerElement.innerHTML += getHTMLFile("templates", "header");

    var page = headerElement.getAttribute("page_href");
    
    document.getElementsByClassName("navagation")[0].childNodes[1].childNodes.forEach(element =>{
        
        
        if(element.constructor.name == HTMLLIElement.name){
            element = element.childNodes[0]
            if(element.getAttribute("href") == page){
                element.classList.add("underline");
            }
        }
        
    })


    var contentElement = document.getElementsByClassName("content_template")[0];
    var contentHtml = contentElement.innerHTML;
    contentElement.innerHTML = getHTMLFile("templates", "content");
    document.getElementsByClassName("content")[0].innerHTML += contentHtml;


    var page_name = contentElement.getAttribute("page_name");
    document.getElementsByClassName("page_name")[0].innerHTML = page_name;

    var footerElement = document.createElement('div');
    footerElement.setAttribute("class", "footer");
    footerElement.innerHTML = getHTMLFile("templates", "footer");
    document.body.appendChild(footerElement);

});