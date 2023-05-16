class Course extends HTMLElement {
  constructor(course_length, days_of_week, hour_duration, payment) {
    super();
    this.course_length = course_length;
    this.days_of_week = days_of_week;
    this.hour_duration = hour_duration;
    this.payment = payment;
  }

  connectedCallback() {
    this.render();
  }
  greeting = () => {
    console.log("object");
  };
  render() {
    this.innerHTML = `
      <div style="color: white !important;">Hello, ${this.course_length} and ${this.days_of_week} and ${this.hour_duration} and ${this.payment}!</div>
    `;
    return this.innerHTML;
  }
}
window.customElements.define("course-info", Course);
// module.exports = Course;
fetch("http://127.0.0.1:5501/public/json/courses.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((el, i) => {
      console.log(el);
      const newElm = document.createElement("div");
      newElm.innerHTML = new Course(
        el.course_length,
        el.days_of_week,
        el.hour_duration,
        el.payment
      ).render();

      document.getElementsByClassName("team")[0].appendChild(newElm);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// select the "ABOUT US" link in the navigation menu
const aboutUsLink = document.querySelector('a[href="#aboutUs"]');

// add a click event listener to the "ABOUT US" link
aboutUsLink.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default link behavior (i.e., navigating to a new page)

  // scroll to the "ABOUT US" section
  const aboutUsSection = document.querySelector(".aboutUs");
  aboutUsSection.scrollIntoView({ behavior: "smooth" });
});

// Get the Contact Us link in the navigation menu
var contactLink = document.getElementById("contact-link");

// Add an event listener to the link
// contactLink.addEventListener("click", function(event) {
//   // Prevent the default behavior of the link
//   event.preventDefault();

//   // Get the position of the Contact Information section on the page
//   var contactSection = document.getElementById("contact");
//   var contactPosition = contactSection.offsetTop;

//   // Scroll to the Contact Information section
//   window.scrollTo({
//     top: contactPosition,
//     behavior: "smooth"
//   });
// });

function toggleNav() {
  var menu = document.getElementById("myMenu");
  if (menu.classList.contains("responsive")) {
    menu.classList.remove("responsive");
  } else {
    menu.classList.add("responsive");
  }
}
