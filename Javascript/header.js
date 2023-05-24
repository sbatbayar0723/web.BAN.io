import "./seencourse.js";
const header = `
<div style="display: flex; justify-content: space-between">
  <a href="login.html" class="button-link">Login</a>
  <img class="logo" src="Pictures/page1logo.png" alt="logo" />
  <seen-course style="display: flex; align-items: center;"></seen-course>
  <div style="display: flex">
    <a
      style="display: flex; align-items: center"
      href="https://www.youtube.com/@TemuulenGanzorig"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        viewBox="-143 145 512 512"
        xml:space="preserve"
      >
        <g>
          <polygon points="78.9,450.3 162.7,401.1 78.9,351.9  " />
          <path
            d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8   c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1   V446.8z"
          />
        </g>
      </svg>
    </a>
    <a
      style="display: flex; align-items: center"
      href="https://www.instagram.com/winners_course/?hl=en"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        viewBox="-143 145 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8   c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"
          />
          <polygon
            points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346  "
          />
          <path
            d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157   c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"
          />
          <path
            d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8   c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157   c27.3,0,49.5,22.2,49.5,49.5V374.7z"
          />
        </g>
      </svg>
    </a>
    <a
      style="display: flex; align-items: center"
      href="https://www.facebook.com/winnerscourse"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        viewBox="-143 145 512 512"
        xml:space="preserve"
      >
        <path
          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3  v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2  c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
        />
      </svg>
    </a>
  </div>
</div>
<nav>
  <button class="menu-toggle" onclick="toggleMenu()">&#9776;</button>
  <ul class="menu" id="myMenu">
    <li><a href="index.html">HOME</a></li>
    <li><a href="#aboutUs">ABOUT US</a></li>
    <li><a href="news.html">NEWS</a></li>
    <li><a href="courses.html">COURSES</a></li>
    <li><a href="freelesson.html">FREE LESSON</a></li>
    <li><a href="#test">TEST</a></li>
    <li><a href="#contact">CONTACT US</a></li>
  </ul>
</nav>`;

document.getElementById("headercomp").insertAdjacentHTML("beforeend", header);
