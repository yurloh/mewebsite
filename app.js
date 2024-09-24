const dynamicTexts = [
  "Welcome to our sleek website!",
  "Discover the power of simplicity.",
  "Embrace the beauty of black and white.",
  "Experience elegance in design.",
  "Simplicity is the ultimate sophistication."
];

function setDynamicText() {
  const dynamicText = document.getElementById('dynamic-text');
  const randomIndex = Math.floor(Math.random() * dynamicTexts.length);
  dynamicText.textContent = dynamicTexts[randomIndex];
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

setDynamicText();