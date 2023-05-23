// huuudas acaallah uyd url-aas id parameter ee salgaj awna
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// tuhain id-aaraa database ees hailt hiine
fetch(`https://winners-server.vercel.app/api/course/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    return data.data;
  })
  .then((pagedata) => {
    console.log(pagedata);
    document.getElementsByClassName("course_img")[0].src = pagedata.image;

    document.getElementsByClassName(
      "payment"
    )[0].textContent = `payment : ${pagedata.price}`;
    document.getElementsByClassName(
      "instractor"
    )[0].textContent = `instractor : ${pagedata.instractor}`;
    document.getElementsByClassName(
      "dow"
    )[0].textContent = `days of week : ${pagedata.days_of_week}`;
    document.getElementsByClassName(
      "length"
    )[0].textContent = `course length : ${pagedata.course_length}`;
  });

const routing = () => {
  window.location.replace("/courses.html");
};
