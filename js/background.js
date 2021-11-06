const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImgage = document.createElement('img');
bgImgage.src = `./img/${chosenImage}`;


console.log(bgImgage);

document.body.appendChild(bgImgage);