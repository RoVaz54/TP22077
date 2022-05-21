let hed = `
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/estilo.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<title>Oli's</title>
<script src="https://kit.fontawesome.com/e15e8c34af.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="css/fontawesome.css">
`
document.getElementById("idhead").innerHTML=hed;

let cad = `
<div class="h_menu">
<div class="logo">
</div>
<div class="descrip">
    <h1 class="animate__animated animate__jackInTheBox">Oli's Tortas y Cosas Ricas</h1>
</div>
<div class="social"></div>
<div class="f_social">
    <div><a href="#"><i class="fab fa-facebook"></i></a></div>
    <div><a href="#"><i class="fab fa-twitter-square"></i></a></div>
    <div><a href="#"><i class="fab fa-instagram"></i></a></div>
    <div><a href="#"><i class="fab fa-whatsapp"></i></a></div>
</div>
</div>
`
document.getElementById("idheader").innerHTML=cad;

cad = `
<a href="index.html">Inicio</a>
<a href="somos.html">Quienes somos</a>
<a href="productos.html">Productos</a>
<a href="consultas.html">Consultas</a> 
`
document.getElementById("idnavbar").innerHTML=cad;

cad = `
<div class="prod_descr">
  <br>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta !
  </p>
</div>

<div class="slideshow-container">

  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="imgs/Torta1.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="imgs/Torta2.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="imgs/Tarteleta1.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>
  <br>
  <div style="text-align:center">
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
  </div>
</div>    
`
document.getElementById("idsidebar").innerHTML=cad;

cad = `
<p>olis.xxxxx.xxxx@xxx.xx</p>
`
document.getElementById("idfooter").innerHTML=cad;