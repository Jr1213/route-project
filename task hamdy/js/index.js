let menu = $("#triggle"),
leftMenu= $(".leftMenu"),
rightMenu= $(".rightMenu"),
menu_item=$(".nav-item li")
menu.click(function(){
    let width = leftMenu.outerWidth();
    console.log(menu.attr("class"))
    if(menu.attr("class")=="open")
    {
        menu.removeClass("open").addClass("close");
        leftMenu.animate({"left":`0px`},1000);
        rightMenu.animate({"left":`${width}`},1000);
        for(let i=1 ;i<=menu_item.length;i++)
        {
            $(`.item${i}`).animate({"opacity":"1","paddingTop":"25px"},i*100+1000)
        }
    }
    else{
        menu.removeClass("close").addClass("open");
        leftMenu.animate({"left":`-${width}`},1000);
        rightMenu.animate({"left":`0px`},1000,function(){
            menu_item.animate({"opacity":"0","paddingTop":"500px"},1000)
        });
        
    }
})














let allMovies,
movies_container=document.getElementById("movies-container"),
search=document.getElementById("search"),
searchByWord=document.getElementById("searchByWord"),
imgPath="https://image.tmdb.org/t/p/w500",
menu_items=document.querySelectorAll(".nav-item a"),
page=document.querySelectorAll(".page")
searchResult=document.getElementById("searchResult");
let category="now_playing";
// Get Movies Fuction 
function getMovies(category,page="1")
{
    let req = new XMLHttpRequest();
    req.open("GET",`https://api.themoviedb.org/3/movie/${category}?api_key=8613e4e1776af4e8633cc311d67b3e09&language=en-US&page=${page}`)
    req.send();
    req.onreadystatechange=function(){
        if(req.readyState == 4 && req.status == 200)
        {
            allMovies=JSON.parse(req.response).results;
            displayData()
        }
    }
}


// function Display Movies
function displayData()
{
    let temp="";
    for(let i=0;i<allMovies.length;i++)
    {
        temp+=`<div class="col-md-4 mb-4">
        <div class="movie-item">
            <img src="${imgPath+allMovies[i].poster_path}" class="img-fluid">
            <div class="layer">
                <h3>${allMovies[i].title}</h3>
                <p>${allMovies[i].overview}</p>
                <p>Rate${allMovies[i].vote_average}</p>
                <p>${allMovies[i].release_date}</p>
            </div>
        </div>
    </div>`
    }
    movies_container.innerHTML=temp;
}
// function search
search.onkeyup=function(){
    let word=search.value;
    searchMovies(word)
}


function searchMovies(word)
{
    let Result="";
    if(word=="")
    {
        return false
    }
    for(let i=0;i<allMovies.length;i++)
    {
        if(allMovies[i].title.toLowerCase().includes(word.toLowerCase())==true)
        {
            Result+=`<div class="col-md-4">
            <div class="movie-item">
                <img src="${imgPath+allMovies[i].poster_path}" class="img-fluid">
                <div class="layer">
                    <h3>${allMovies[i].title}</h3>
                    <p>${allMovies[i].overview}</p>
                    <p>Rate${allMovies[i].vote_average}</p>
                    <p>${allMovies[i].release_date}</p>
                </div>
            </div>
        </div>`;
        }
    }
    searchResult.innerHTML=Result;

}


//function SearchByWord
searchByWord.onkeyup=function()
{
    
    searchWord(searchByWord.value);
}

function searchWord(searchword)
{
    if(searchword=="")
    {
        return false
    }
    let req = new XMLHttpRequest();
    req.open("GET",`https://api.themoviedb.org/3/search/movie?api_key=8613e4e1776af4e8633cc311d67b3e09&language=en-US&query=${searchword}&page=1&include_adult=false`)
    req.send();
    req.onreadystatechange=function(){
        if(req.readyState == 4 && req.status == 200)
        {
            allMovies=JSON.parse(req.response).results;
            displayData()
        }
    }
}


for(let i=0;i<menu_items.length;i++)
{
    menu_items[i].addEventListener("click",function(){
        // console.log(this.getAttribute("movieTitle"))
        category=this.getAttribute("movieTitle");
        getMovies(category);
    })
}

for(let i=0;i<page.length;i++)
{
    page[i].addEventListener("click",function(){
        console.log(this.innerText)
        getMovies(category,this.innerText)
    })
}
getMovies(category);