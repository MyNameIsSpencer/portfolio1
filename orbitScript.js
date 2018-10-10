const orbit = document.getElementById("orbit");
const stretchFactor = 2;
let start = new Date();




function step() {
  let shape = document.getElementById("rectangle-container");
  let leftValue = parseInt(shape.style.left, 10);
  let topValue = parseInt(shape.style.top, 10);

  let maxLeft = 90;
  let minLeft = 10;
  let maxBottom = 15;
  let minBottom = 60;
  let widther = 15


  let duration = 5; // seconds

  let progress, xer, yer;


  progress = ((new Date()) - start) / 1000;
  // let mover = Math.abs((progress * 20) - (maxLeft - 10));
  let mover = Math.abs(progress * 10 - (maxLeft - widther))



  shape.style.left = `${ (maxLeft - widther) - mover + minLeft }vw`;
  shape.style.bottom = `${leftValue}vw`

  if (leftValue < minLeft) {
    start = new Date();
  }

  console.log(leftValue);

  // let topperTimes = ;
  // let topper = ((Math.log2(leftValue)) * 10);
  // let topper = Math.pow(2,(leftValue / 10));
  // let topper = Math.sqrt(leftValue) * 5;
  //
  //
  // let middler = 50;
  //
  //
  // shape.style.top = `${middler - topper}vh`;


}

setInterval(step, 1);
