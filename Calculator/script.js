const button = document.querySelector('.btn');
button.addEventListener('click', calculate);

function calculate() {

  let num1 = document.getElementById("n1").value;
    mum1 = parseInt(num1);
  let num2 = document.getElementById("n2").value;
    mum2 = parseInt(num2);
    let result;
  const multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(
result = num1 + num2
))
const minus =  document.getElementById('minus');
minus.addEventListener('click', function(
result = num1 - num2
));
const devide = document.getElementById('devide');
devide.addEventListener('click', function(
result = num1 / num2
))
const multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(
result = num1 * num2
))
 document.getElementById("out").innerHTML = result;
}
