
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

// Get references to the elements
const courseInfo = document.querySelectorAll(".course-info");
const courseTitle = document.querySelector("#course-title");
const courseDescription = document.querySelector("#course-description");
const coursePrice = document.querySelector("#course-price");

// Loop through each button and add an event listener
const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Hide all the course info elements
    courseInfo.forEach(function (info) {
      info.style.display = "none";
    });
    // Show the course info for the corresponding button
    const courseId = "course-info-" + (index + 1);
    const course = document.querySelector(`#${courseId}`);
    course.style.display = "block";
    // Update the course details in the course info section
    const courseTitleText = course.querySelector("h2").textContent;
    const courseDescriptionText = course.querySelector("p").textContent;
    const coursePriceText = "$99"; // Replace this with your actual logic to calculate the course price
    courseTitle.textContent = courseTitleText;
    courseDescription.textContent = courseDescriptionText;
    coursePrice.textContent = coursePriceText;
  });
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
