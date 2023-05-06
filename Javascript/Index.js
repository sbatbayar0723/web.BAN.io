fetch('index.json')
  .then(response => response.json())
  .then(data => {
    const courseName = data['Course name'];
    const coursePrice = data['Price'];
    console.log(`Course: ${courseName}, Price: ${coursePrice}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });

 const aboutUsLink = document.querySelector('a[href="#aboutus"]');

 const aboutUsSection = document.querySelector('.aboutUs');

 aboutUsLink.addEventListener('click', function(event) {
  
   event.preventDefault();

   aboutUsSection.scrollIntoView({ behavior: 'smooth' });
 });

 function toggleNav() {
  var x = document.getElementById("mySidenav");
  if (x.style.height === "auto") {
   
    x.style.height = "0";
  } else {
  x.style.height = "auto";
  }
  }
  
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
