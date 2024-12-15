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

// contact
// footer
// education
// skills
// service
