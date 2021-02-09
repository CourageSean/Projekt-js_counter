result = document.getElementById("result");
let a = 0;

function counter1() {
  a = 1 + a;

  console.log(a);
  result.innerHTML = a;
}

function counter2() {
  a = -1 + a;

  console.log(a);
  result.innerHTML = a;
}

function counter3() {
  a = 10 + a;

  console.log(a);
  result.innerHTML = a;
}

function counter4() {
  a = -10 + a;
  console.log(a);
  result.innerHTML = a;
}
function counter5() {
  a = 100 + a;
  console.log(a);
  result.innerHTML = a;
}
function counter6() {
  a = -100 + a;
  console.log(a);
  result.innerHTML = a;
}

function counter7() {
  a = 0;
  console.log(a);
  result.innerHTML = a;
}

function counter8() {
  a = a * 2;
  console.log(a);
  result.innerHTML = a;
}
