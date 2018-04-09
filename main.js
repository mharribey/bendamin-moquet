var homeHtml = document.getElementById("home-html");

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if(sPage == "index.html" || sPage == ""){
  document.addEventListener("scroll",function(){
    if(window.scrollY <= window.innerHeight/1.2){
      homeHtml.style.backgroundColor = "white";
    }else{
      homeHtml.style.backgroundColor = "#fdbae8";
    }
  });

  var text = new Blotter.Text("Welcome.", {
    // family: 'sans-serif',
    size: 100
  });
  var text2 = new Blotter.Text("BENJAMIN MOQUET", {
    size: 90
  });

  var material = new Blotter.LiquidDistortMaterial();
  var material2 = new Blotter.RollingDistortMaterial();

  material.uniforms.uSpeed.value = 0.2
  material.uniforms.uSeed.value = 4
  material.uniforms.uVolatility.value = 0.05

  material2.uniforms.uSineDistortSpread.value = 0.025
  material2.uniforms.uSineDistortCycleCount.value = 2
  material2.uniforms.uSineDistortAmplitude.value = 0.13
  material2.uniforms.uNoiseDistortVolatility.value = 20
  material2.uniforms.uNoiseDistortAmplitude.value = 0.01
  material2.uniforms.uRotation.value = 170
  material2.uniforms.uSpeed.value = 0.08

  var blotter = new Blotter(material, { texts : text });
  var blotter2 = new Blotter(material2, { texts : text2 });

  var scope = blotter.forText(text);
  var scope2 = blotter2.forText(text2);

  scope.appendTo(document.getElementById("main-title"));
  scope2.appendTo(document.getElementById("name"));
}
