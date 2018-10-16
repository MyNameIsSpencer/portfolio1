// words.appendChild(p);
let hill1 = document.getElementById('hill1');
let colors = ['firebrick', 'orange', 'darkgreen', 'green', 'darkgreen', 'green', 'yellow'];


// // generate random pine
// 15 - 66vw  -1 - 4vh
function generateTrees(yPos, stock, minX) {
  for ( let i = 0; i < stock; i ++ ) {
    let xPos = Math.floor(Math.random() * (62 - minX) + minX);
    let pine = document.createElement('div');
    pine.classList.add('small-pine');
    pine.style.left = `${xPos}vw`;
    pine.style.top = `${yPos}vh`;
    hill1.appendChild(pine);
  }
}

generateTrees(-1, 4, 30);
generateTrees(0, 5, 20);
generateTrees(1, 6, 20);
generateTrees(2, 6, 15);
generateTrees(3, 5, 15);
generateTrees(4, 4, 15);

// let p = document.createElement('p');






// apply a random color to pine trees on hill 1
let pines = document.querySelectorAll('.small-pine');

pines.forEach(pine => {
  let randColor = colors[Math.floor(Math.random() * colors.length)];
  pine.style.borderBottom = `5vw solid ${randColor}`;
});
