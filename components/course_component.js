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

  render() {
    this.innerHTML = `
        <h1>Hello, ${this.course_length} and ${this.days_of_week} and ${this.hour_duration} and ${this.payment}!</h1>
      `;
  }
}
module.exports = Course;
