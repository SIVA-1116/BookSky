var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-button-input")

addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var closebutton=document.getElementById("close-book")
closebutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var booktitle=document.getElementById("booktitle-input")
var bookauthor=document.getElementById("bookauthor-input")
var bookdescription=document.getElementById("bookdescription-input")
var addbook=document.getElementById("add-book")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button class="btn" onclick="deletebook(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"

})

function deletebook(event)  
{
    event.target.parentElement.remove()
}