
$(document).ready(function () {


  /////////////
$('#tech').on('click', function () {
        var newsAPI = "https://gnews.io/api/v4/search?q=tech&lang=en&token=602e986d0a64f01902a96d81d70fc3de";
        $.getJSON(newsAPI ,function (data) {
          //#################
          n=Math.floor((Math.random() * 7));

document.getElementById("one").innerHTML = data.articles[n+0].title;
document.getElementById("two").innerHTML = data.articles[n+1].title;
document.getElementById("three").innerHTML = data.articles[n+2].title;
		
document.getElementById("oned").innerHTML = data.articles[n+0].description;
document.getElementById("twod").innerHTML = data.articles[n+1].description;
document.getElementById("threed").innerHTML = data.articles[n+2].description;

document.getElementById("onei").src = data.articles[n+0].image;
document.getElementById("twoi").src = data.articles[n+1].image;
document.getElementById("threei").src = data.articles[n+2].image;


document.getElementById("oneu").href=data.articles[n+0].url;
document.getElementById("twou").href=data.articles[n+1].url;
document.getElementById("threeu").href=data.articles[n+2].url;

		

        });
        return false;
    });
//////////////
  
 /////////////
$('#food').on('click', function () {
        var newsAPI = "https://gnews.io/api/v4/search?q=food&lang=en&token=602e986d0a64f01902a96d81d70fc3de";
        $.getJSON(newsAPI ,function (data) {
           //#################  
          n=Math.floor((Math.random() * 7));

document.getElementById("one").innerHTML = data.articles[n+0].title;
document.getElementById("two").innerHTML = data.articles[n+1].title;
document.getElementById("three").innerHTML = data.articles[n+2].title;
		
document.getElementById("oned").innerHTML = data.articles[n+0].description;
document.getElementById("twod").innerHTML = data.articles[n+1].description;
document.getElementById("threed").innerHTML = data.articles[n+2].description;


document.getElementById("onei").src = data.articles[n+0].image;
document.getElementById("twoi").src = data.articles[n+1].image;
document.getElementById("threei").src = data.articles[n+2].image;


document.getElementById("oneu").href=data.articles[n+0].url;
document.getElementById("twou").href=data.articles[n+1].url;
document.getElementById("threeu").href=data.articles[n+2].url;

		

        });
        return false;
    });
//////////////
  
/////////////
$('#sports').on('click', function () {
        var newsAPI = "https://gnews.io/api/v4/search?q=sports&lang=en&token=602e986d0a64f01902a96d81d70fc3de";
        $.getJSON(newsAPI ,function (data) {
            //################# 
          n=Math.floor((Math.random() * 7));

document.getElementById("one").innerHTML = data.articles[n+0].title;
document.getElementById("two").innerHTML = data.articles[n+1].title;
document.getElementById("three").innerHTML = data.articles[n+2].title;
		
document.getElementById("oned").innerHTML = data.articles[n+0].description;
document.getElementById("twod").innerHTML = data.articles[n+1].description;
document.getElementById("threed").innerHTML = data.articles[n+2].description;


document.getElementById("onei").src = data.articles[n+0].image;
document.getElementById("twoi").src = data.articles[n+1].image;
document.getElementById("threei").src = data.articles[n+2].image;


document.getElementById("oneu").href=data.articles[n+0].url;
document.getElementById("twou").href=data.articles[n+1].url;
document.getElementById("threeu").href=data.articles[n+2].url;

		

        });
        return false;
    });
//////////////
  
  /////////////
$('#national').on('click', function () {
        var newsAPI = "https://gnews.io/api/v4/search?q=india&lang=en&token=602e986d0a64f01902a96d81d70fc3de";
        $.getJSON(newsAPI ,function (data) {
            //################# 
          n=Math.floor((Math.random() * 7));
document.getElementById("one").innerHTML = data.articles[n+0].title;
document.getElementById("two").innerHTML = data.articles[n+1].title;
document.getElementById("three").innerHTML = data.articles[n+2].title;
		
document.getElementById("oned").innerHTML = data.articles[n+0].description;
document.getElementById("twod").innerHTML = data.articles[n+1].description;
document.getElementById("threed").innerHTML = data.articles[n+2].description;


document.getElementById("onei").src = data.articles[n+0].image;
document.getElementById("twoi").src = data.articles[n+1].image;
document.getElementById("threei").src = data.articles[n+2].image;


document.getElementById("oneu").href=data.articles[n+0].url;
document.getElementById("twou").href=data.articles[n+1].url;
document.getElementById("threeu").href=data.articles[n+2].url;

		

        });
        return false;
    });
//////////////
  

var newsAPI = "https://gnews.io/api/v4/search?q=tech&lang=en&token=602e986d0a64f01902a96d81d70fc3de";
        $.getJSON(newsAPI ,function (data) {
          //#################
          n=Math.floor((Math.random() * 7));

document.getElementById("one").innerHTML = data.articles[n+0].title;
document.getElementById("two").innerHTML = data.articles[n+1].title;
document.getElementById("three").innerHTML = data.articles[n+2].title;
		
document.getElementById("oned").innerHTML = data.articles[n+0].description;
document.getElementById("twod").innerHTML = data.articles[n+1].description;
document.getElementById("threed").innerHTML = data.articles[n+2].description;


document.getElementById("onei").src = data.articles[n+0].image;
document.getElementById("twoi").src = data.articles[n+1].image;
document.getElementById("threei").src = data.articles[n+2].image;


document.getElementById("oneu").href=data.articles[n+0].url;
document.getElementById("twou").href=data.articles[n+1].url;
document.getElementById("threeu").href=data.articles[n+2].url;


 });








});


