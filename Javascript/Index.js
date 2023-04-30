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

 const aboutUsLink = document.querySelector('a[href="#aboutus"]');

 const aboutUsSection = document.querySelector('.aboutUs');

 aboutUsLink.addEventListener('click', function(event) {
  
   event.preventDefault();

   aboutUsSection.scrollIntoView({ behavior: 'smooth' });
 });
