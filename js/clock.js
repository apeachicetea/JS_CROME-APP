const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
// str.padStart();
// const str1 = '5';
// console.log(str1.padStart(2, '0'));
// expected output: "05"

getClock();
setInterval(getClock, 1000);

