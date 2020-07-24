// console.clear();

var x, y, ans;
var answerBox = document.getElementById('txtAnswer');

var input1 = document.getElementById('txtA');
var input2 = document.getElementById('txtB');
var rbadd = document.getElementById('rbAdd');
var rbsub = document.getElementById('rbSub');
var rbmul = document.getElementById('rbMul');
var rbdiv = document.getElementById('rbDiv');

var btn = document.getElementById('btnAnswer');
btn.addEventListener('click', onclick);

function onclick() {
  x = input1.value;
  y = input2.value;

  if (rbadd.checked) {
    ans = add(x, y);
  } else if (rbsub.checked) {
    ans = Substract(x, y);
  } else if (rbmul.checked) {
    ans = Multiply(x, y);
  } else if (rbdiv.checked) {
    ans = divide(x, y);
  } else {
    alert('Please select a valid choice')
  }

  answerBox.value = ans;

}


function add(perom1, perom2) {
  var z = parseInt(perom1) + parseInt(perom2);
  return z;
};

function Substract(param1, param2) {
  var z = parseInt(param1) - parseInt(param2);
  return z;
}

function Multiply(param1, param2) {
  var z = parseInt(param1) * parseInt(param2);
  return z;
}

function divide(param1, param2) {
  var z = parseInt(param1) / parseInt(param2);
  return z;
}
