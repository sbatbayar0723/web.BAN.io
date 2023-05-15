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

// select the "ABOUT US" link in the navigation menu
const aboutUsLink = document.querySelector('a[href="#aboutUs"]');

// add a click event listener to the "ABOUT US" link
aboutUsLink.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the default link behavior (i.e., navigating to a new page)
  
  // scroll to the "ABOUT US" section
  const aboutUsSection = document.querySelector('.aboutUs');
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
  var menu = document.getElementById("myMenu");
  if (menu.classList.contains("responsive")) {
    menu.classList.remove("responsive");
  } else {
    menu.classList.add("responsive");
  }
}
  
  
