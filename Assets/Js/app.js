// script.js
const texts = [
 "Fullstack Developer",
 "Backend Developer",
 "Frontend Developer",
 "Software Tester",
 "Content Creator",
 "Web Developer",
 "Photographer",
];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 90; // Speed of erasing
const delayBetweenTexts = 4000; // Delay between texts
const textElement = document.getElementById("typing");

function typeText() {
  if (charIndex < texts[currentIndex].length) {
      textElement.textContent += texts[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
  } else {
      setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
      textElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
  } else {
      currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
      setTimeout(typeText, typingSpeed + 500);
  }
}

// Start the typing effect
setTimeout(typeText, delayBetweenTexts + 500);

function showSidebar() {
  const sidebar= document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  
};

function hiddenSide() {
  const sidebar= document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function LOOK(){
  const header= document.querySelector("header");
  header.style.filter = "blur(300px)";
  const section = document.querySelector("section");
  section.style.filter = "blur(300px)";
  const contact = document.querySelector(".contact");
  contact.style.filter = "blur(300px)";
  const set = document.querySelector(".services-container");
  set.style.filter = "blur(300px)";
  const footer = document.querySelector(".footer");
  footer.style.filter = "blur(300px)";
  const skills = document.querySelector(".skills");
  skills.style.filter = "blur(300px)";
  const education = document.querySelector(".education");
  education.style.filter = "blur(300px)";
  const service = document.querySelector(".service");
  service.style.filter = "blur(300px)";
  const sidebar= document.querySelector(".alart");
  sidebar.style.display = "list-item";
  sidebar.style.filter = "opacity(20px)";

}
function Close(){
  const header= document.querySelector("header");
  header.style.filter = "none";
  const section = document.querySelector("section");
  section.style.filter = "none";
  const contact = document.querySelector(".contact");
  contact.style.filter = "none";
  const set = document.querySelector(".services-container");
  set.style.filter = "none";
  const footer = document.querySelector(".footer");
  footer.style.filter = "none";
  const skills = document.querySelector(".skills");
  skills.style.filter = "none";
  const education = document.querySelector(".education");
  education.style.filter = "none";
  const service = document.querySelector(".service");
  service.style.filter = "none";
  const sidebar= document.querySelector(".alart");
  sidebar.style.display = "none";
  sidebar.style.filter = "none";
}
// contact
// footer
// education
// skills
// service
