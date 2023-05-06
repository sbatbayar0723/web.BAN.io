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

// Get the Contact Us link in the navigation menu
var contactLink = document.getElementById("contact-link");

// Add an event listener to the link
contactLink.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the position of the Contact Information section on the page
  var contactSection = document.getElementById("contact");
  var contactPosition = contactSection.offsetTop;

  // Scroll to the Contact Information section
  window.scrollTo({
    top: contactPosition,
    behavior: "smooth"
  });
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
