// <my-shoppingcard></my-shoppingcard>
import html from './utility.js'

class seencourse extends HTMLElement {
    constructor() {
        super();
        this.course = [];
        const seenCourseCount = localStorage.getItem("seenCourseCount");
        if (seenCourseCount) {
          const count = parseInt(seenCourseCount);
          for (let i = 0; i < count; i++) {
            this.course.push(null); // or replace with the appropriate value
          }
          this.#Render1();
        } else {
          this.#Render();
        }
      }
      

    #Render() {
        this.innerHTML = html`
            <img src="./Pictures/vis.svg" alt="visual" style="width: 30px; height:30px">
            <span style = "display: none;" >${this.course.length}</span>
        `;
    }
    #Render1() {
        this.innerHTML = html`
            <img src="./Pictures/vis.svg" alt="visual" style="width: 30px; height:30px">
            <span >${this.course.length}</span>
        `;
    }
    AddSeenCourse(mycourse) {
        this.course.push(mycourse);
        this.#Render1();
        // Store the updated value in localStorage
        localStorage.setItem("seenCourseCount", this.course.length);
      }
      
    connectedCallback() {
    }
    disconnectedCallback() {
    }

    

    get productCount() {
        return this.course.length;
    }

    // attributeChangedCallback(attrName, oldVal, newVal) {
    //     switch (attrName) {
    //         case "color":
    //             this.#Render(this.getAttribute("color"));
    //             break;

    //         default:
    //             break;
    //     }
    // }
}

window.customElements.define('seen-course', seencourse);