
  document.addEventListener("mousemove", function (e) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  });



  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });



  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(reveal => observer.observe(reveal));



  const button = document.querySelector('.summon-btn');
  const sparkleLayer = document.getElementById('sparkle-layer');

  button.addEventListener('click', (e) => {
    for (let i = 0; i < 12; i++) {
      const spark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      spark.setAttribute("r", "3");
      spark.setAttribute("cx", e.clientX);
      spark.setAttribute("cy", e.clientY);
      spark.setAttribute("fill", "#00ffc8");
      sparkleLayer.appendChild(spark);

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 80 + 20;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      spark.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
      ], {
        duration: 800,
        easing: 'ease-out'
      });

      setTimeout(() => spark.remove(), 800);
    }
  });

// Glowing Orb Effect

  const orb = document.getElementById('glowing-orb');
  const container = document.querySelector('.orb-container');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    orb.style.left = `${x}px`;
    orb.style.top = `${y}px`;
  });

  container.addEventListener('mouseleave', () => {
    orb.style.left = '50%';
    orb.style.top = '50%';
  });

//glowing orb effect end


// Typewriter Effect
  const text = "Crafting Gold from Code — Full Stack Sorcery by the Stacked Alchemist";
const typewriter = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); // typing speed
  }
}

window.addEventListener("load", type);
// Typewriter effect end


