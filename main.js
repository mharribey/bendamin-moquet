var homeHtml = document.getElementById("home-html");

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if(sPage == "index.html"){
  document.addEventListener("scroll",function(){
    if(window.scrollY <= window.innerHeight/1.2){
      homeHtml.style.backgroundColor = "white";
    }else{
      homeHtml.style.backgroundColor = "#fdbae8";
    }
  });

}
