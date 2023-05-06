// get the form and select element
const form = document.querySelector('form');
const select = form.querySelector('select');

// add event listener to the form
form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();
  
  // get the selected course
  const course = select.value;
  
  // create a new element to display the course information
  const info = document.createElement('div');
  
  // set the innerHTML of the info element based on the selected course
  if (course === 'beginner') {
    info.innerHTML = `
    <h2>Beginner English Course</h2>
    <p>This course is designed for those who have little to no experience with the English language. By the end of the course, you will be able to:</p>
    <ul>
      <li>Introduce yourself and others</li>
      <li>Ask and answer basic questions about yourself and others</li>
      <li>Use simple vocabulary to talk about everyday topics such as weather, food, and hobbies</li>
      <li>Form simple sentences using present tense verbs</li>
      <li>Understand and respond to simple instructions and requests</li>
    </ul>
    <p>Throughout the course, you will have access to:</p>
    <ul>
      <li>Engaging video lessons taught by experienced instructors</li>
      <li>Interactive exercises and quizzes to help reinforce your learning</li>
      <li>Live chat support with our team of English language experts</li>
    </ul>
    <h3>Course Details</h3>
    <ul>
      <li>Duration: 12 weeks</li>
      <li>Lessons per week: 3</li>
      <li>Price: $200</li>
    </ul>
  `;
  } else if (course === 'intermediate') {
    info.innerHTML = '<h2>Intermediate English</h2><p>This course is designed for people who have a basic understanding of the English language.</p><p>Topics covered include more advanced vocabulary, grammar, and conversation skills.</p>';
  } else if (course === 'advanced') {
    info.innerHTML = '<h2>Advanced English</h2><p>This course is designed for people who have a strong grasp of the English language.</p><p>Topics covered include complex grammar structures, idioms, and advanced conversation skills.</p>';
  } else if (course === 'ielts') {
    info.innerHTML = '<h2>IELTS</h2><p>This course is designed to help students prepare for the IELTS exam.</p><p>Topics covered include exam strategies, test-taking tips, and practice exercises.</p>';
  }
  
  // remove any previously displayed course information
  const oldInfo = document.querySelector('.course-info');
  if (oldInfo) {
    oldInfo.remove();
  }
  
  // add the new info element to the page
  info.classList.add('course-info');
  form.insertAdjacentElement('afterend', info);
});

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
