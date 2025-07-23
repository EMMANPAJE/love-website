const texts = [
  "I love you",
  "I love you so much",
  "I love you more than anything",
  "You're my everything",
  "I love you endlessly",
  "Forever yours",
  "My heart is yours",
  "I love you to the moon and back",
  "Always and forever",
  "You're my world"
];

const container = document.querySelector('.container');
const photoContainer = document.querySelector('.photo-container');

function createFallingText() {
  const text = document.createElement('div');
  text.className = 'falling-text';
  text.textContent = texts[Math.floor(Math.random() * texts.length)];
  text.style.left = Math.random() * window.innerWidth + 'px';
  text.style.animationDuration = (6 + Math.random() * 6) + 's';
  container.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 12000);
}

function createFallingPhoto() {
  const img = document.createElement('img');
  img.className = 'falling-photo';
  const n = Math.floor(Math.random() * 5) + 1;
  img.src = `img/photo${n}.png`; // photo1.png to photo5.png
  img.style.left = Math.random() * window.innerWidth + 'px';
  img.style.animationDuration = (6 + Math.random() * 6) + 's';
  photoContainer.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 14000);
}

setInterval(createFallingText, 500);
setInterval(createFallingPhoto, 1500);
