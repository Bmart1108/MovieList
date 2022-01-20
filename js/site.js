d//DELETE OBJECTS OUT OF AN ARRAY, FINDING MAX VALUE OF ARRAY

//get any links from local storage and display them
function getLinks() {

    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    for (let index = 0; index < movieLinks.length; index++) {

    let movieObj = movieLinks[index];

        displayLink(movieObj);


    }

}

//add a link
function addLink() {

    //pull the current movies from local storage
    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    let movieName = document.getElementById("movieName").value;
    let movieUrl = document.getElementById("movieUrl").value;

    //generate next id for the link
    let linkId = 1;
    if (movieLinks.length > 0){
       
  

   
    //Step one use map to get an array of ids
    let ids = movieLinks.map(function(obj){return obj.id});

    //Step two find the max value in the array
    let maxId = Math.max.apply(null, ids);

    linkId = maxId +1;

}
    let movieObj = {};


    movieObj["name"] = movieName;
    movieObj["url"] = movieUrl;
    movieObj["id"] = linkId;

    //add the link to local storage
    movieLinks.push(movieObj);
    localStorage.setItem("movieLinks", JSON.stringify(movieLinks));

    displayLink(movieObj);

}

//writes link to the page
function displayLink(movieObj) {

    let ol = document.getElementById("movieList");
    let li = document.createElement("li");





    let delButton = `<button onclick="delLink(this)" class="btn btn-danger" type="button">Delete</button>`;

    let liValue = `<span>${movieObj["name"]}</span> <span <a href="${movieObj["url"]}" target="_blank>${movieObj["url"]}</a><span>${delButton}</span>`;

   
    
    li.classList.add("list-group-item");
    li.setAttribute("data-id", movieObj,["id"])
    li.innerHTML = liValue;

    //add the li element to the page
    ol.appendChild(li);

}

//the button the user clicked is passed in
function delLink(button){

    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    let li = button.parentElement;
    let linkId = li.getAttribute("data-id");
    li.remove();

    //remove an item from the movie link array

    //STEP ONE: Find the index of the item in the array
    let movieIndex = movieLinks.findIndex(obj => obj.id == linkId)
    movieLinks.splice(movieIndex,1);
    
    //push the new value back to local storage
    localStorage.setItem("movieLinks", JSON.stringify(movieLinks));
}