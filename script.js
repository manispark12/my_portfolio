emailjs.init("eYZvFfiwEEVOw_BhJ");
document.getElementById('job-form').addEventListener('submit', function(e){
    e.preventDefault();

    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = "Sending... Please wait.";
    messageDiv.style.color="purple";

    emailjs.sendForm("service_t59ylng", "template_4upyw27", this).then(function(response){
        console.log("Success",response.status,response.text)
        document.getElementById('form-message').textContent="🎉 Message sent successfully!";
        document.getElementById('form-message').style.color="green";
        document.getElementById('form-message').style.textAlign = "center";
        document.getElementById('form-message').style.fontSize="20px";
        document.getElementById('job-form').reset();

    }, function(error){
        console.error("FAILED", error);
        document.getElementById('form-message').textContent="❌ Failed to send. Please try again later."
        document.getElementById('form-message').style.color = "red";
        document.getElementById('form-message').style.textAlign = "center";
    })
})


document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector('.animated-name');
    const nameText = nameElement.textContent.trim();
    nameElement.textContent = '';


    const [firstName, lastName] = nameText.split(' ');


    Array.from(nameText).forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.color="red";
      if (span.textContent !== ' '){
        span.style.animationDelay = `${index * 0.15}s`;
      }else{
        span.style.animationDelay = '0s'; 
      }
      span.style.setProperty('--i', index);
      nameElement.appendChild(span);
      span.style.animationDelay = `${index * 0.03}s`; 
    });
const space = document.createElement('span');
space.textContent = ' ';
nameElement.appendChild(space);

 Array.from(lastName).forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;

    span.style.animationDelay = `${(firstName.length + index) * 0.15}s`; 
    nameElement.appendChild(span);
  });
  });
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);  
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return; 

        const targetPosition = targetSection.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 3000;  

        let startTime = null;

        function smoothScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollProgress = Math.min(timeElapsed / duration, 1);

            const scrollPosition = startPosition + (distance * (scrollProgress * (2 - scrollProgress)));
            window.scrollTo(0, scrollPosition);

            if (timeElapsed < duration) {
                requestAnimationFrame(smoothScroll);
            }
        }

        requestAnimationFrame(smoothScroll);
    });
});
const titles = ["Mani kanta", "PortFolio"]
let index = 0
setInterval(() =>{
  document.title=titles[index]
  index= (index+1)%titles.length;
},2000)
