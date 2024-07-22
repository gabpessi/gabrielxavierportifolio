/* document.getElementById("radio1.1").checked = true;  
document.getElementById("radio2.1").checked = true;  
document.getElementById("radio3.1").checked = true;  
document.getElementById("radio4.1").checked = true;  
document.getElementById("radio5.1").checked = true;  
document.getElementById("radio6.1").checked = true;  
document.getElementById("radio7.1").checked = true;  
document.getElementById("radio8.1").checked = true;  
document.getElementById("radio9.1").checked = true;  
*/

for (let i = 1; i < 7; i++) {
    document.getElementById("radio" + i + ".1").checked = true;  
}

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated-element");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Para observar apenas uma vez
        }
      });
    }, {
      threshold: 0.1 // Inicia a animação quando 10% do elemento está visível
    });
  
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  });



window.addEventListener('load', function() {
    window.scrollTo(0, 0);
  });

