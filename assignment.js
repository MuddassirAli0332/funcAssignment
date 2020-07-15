// console.clear();

var x, y, z;
var answerBox = document.getElementById('txtAnswer');

var input1 = document.getElementById('txtA');
var input2 = document.getElementById('txtB');

var btn = document.getElementById('btnAnswer');
btn.addEventListener('click', onclick);

function onclick() {
  x = input1.value;
  y = input2.value;
  
  var ans =add(x,y)
  answerBox.value = ans;
  
}


function add(perom1, perom2) {
  var  z = parseInt(perom1) + parseInt(perom2);
  return z;
};

