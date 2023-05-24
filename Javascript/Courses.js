
// neg course iin medeelliig haruulah custom component


class Course extends HTMLElement {
  generateHTML = () => {
    this.innerHTML = `<div class="flip-box" onclick="routing('${this.elm._id}')">
    <div class="flip-box-inner">
      <div class="flip-box-front">
    
        <img src="${this.elm.image}" alt="" class="img_render"/>
      </div>
      <div class="flip-box-back">
      
        <h2>Сургалт</h2>
        <h1>payment : ${this.elm.price}</h1>
        
      </div>
    </div>
  </div>`;
  };
  constructor(elm, index) {
    super();

    this.elm = elm;
    this.index = index;
    this.id = elm._id;
    console.log(this.id);
    this.generateHTML();
  }

  connectedCallback() {
    this.render();
  }
  greeting = () => {
    console.log("object");
  };

  render() {
    this.innerHTML = `<div class="flip-box"  onclick="routing(${this.id})">
    <div class="flip-box-inner">
      <div class="flip-box-front">
    
        <img src="${this.img}" alt="" class="img_render"/>
      </div>
      <div class="flip-box-back">
      
        <h2>${elm.C}</h2>
        <div>payment : ${this.payment}</div>
        <div>${this.description}</div>
      </div>
    </div>
  </div>`;
  }
}
//course detail huudasruu course iin id-iin hamt shiljih function
const routing = (id) => {
  console.log(id);
  const myCourse = document.querySelector("seen-course");
  myCourse.AddSeenCourse(this);
 window.location.replace("course_detail.html?id=" + id);
  
};
window.customElements.define("course-info", Course);
// module.exports = Course;
fetch("https://winners-server.vercel.app/api/course")
  .then((response) => response.json())
  .then((data) => {
    data.data.map((el, i) => {
      console.log(el);
      const newElm = document.createElement("div");
      newElm.style.color = "white";
      newElm.style.margin = "6px";
      newElm.setAttribute("class", "slides-div");
      newElm.setAttribute("id", `slide-${i + 1}`);
      console.log(el);
      newElm.innerHTML = new Course(el, i).innerHTML;

      document.getElementsByClassName("image-slider")[0].appendChild(newElm);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
