
const aboutUsLink = document.querySelector('a[href="#aboutus"]');

const aboutUsSection = document.querySelector('.aboutUs');

aboutUsLink.addEventListener('click', function(event) {
  
  event.preventDefault();


  aboutUsSection.scrollIntoView({ behavior: 'smooth' });
});
