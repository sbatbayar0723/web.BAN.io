function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  }
  
  function resizeNav() {
  if (window.innerWidth > 768) {
  document.getElementsByClassName("topnav")[0].classList.remove("responsive");
  document.getElementById("mySidenav").style.height = "0";
  }
  }
  
  window.addEventListener("resize", resizeNav);