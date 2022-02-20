console.log ("Hello World")

const obrazek= document.getElementById('obr');

obrazek.addEventListener('click', function() {
  
const number = document.getElementById('num');
 plus = Number(number.textContent);
 plus = plus + 1;
number.textContent = plus

})