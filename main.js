var homeHtml = document.getElementById("home-html");

if(window.location.href == "index.html"){
  document.addEventListener("scroll",function(e){
    if(window.scrollY <= window.innerHeight/1.2){
      homeHtml.style.backgroundColor = "white";
    }else{
      homeHtml.style.backgroundColor = "#fdbae8";
    }
  });
}
