document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('z5YI5Eg5V03BQFY-p');

  document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('button').innerHTML = 'Sending...';
      const serviceID = 'default_service';
      const templateID = 'template_xf89axp';
      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              document.getElementById('button').innerHTML = 'Send Email';
              alert('Sent!');
          }, (err) => {
              document.getElementById('button').innerHTML = 'Send Email';
              alert(JSON.stringify(err));
          });
  });

  const nav = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          nav.style.top = '-60px';
      } else {
          nav.style.top = '0';
      }
      lastScrollTop = scrollTop;
  });

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Elemente auswählen, die animiert werden sollen
  const elements = document.querySelectorAll('.from-left, .from-right');

  // Intersection Observer API verwenden, um Elemente zu beobachten
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animation nur einmal ausführen
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});

const textElement = document.getElementById('animated-text');
const texts = ["Hello my name is Efe Bora Saglam" , "I am 18 Years old" , "I am a Student in KSB"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    const currentText = texts[textIndex];
    let displayedText = currentText.substring(0, charIndex);

    textElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        delay = 200; // Typing speed
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        delay = 100; // Deleting speed
    } else if (!isDeleting && charIndex === currentText.length) {
        delay = 2000; // Delay before starting to delete
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        delay = 500; // Delay before typing the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, delay);
});


// language changing

function myFunction() {
    var element = document.body;
    element.classList.toggle("background-homepage");
}