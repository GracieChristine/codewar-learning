// 6 kyu - Take a Ten Minutes Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let x = 0; // east-west
    let y = 0; // north-south
  
    for (let dir of walk) {
      if (dir === 'n') y++;
      if (dir === 's') y--;
      if (dir === 'e') x++;
      if (dir === 'w') x--;
    }
  
    return x === 0 && y === 0;
}

function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    let traverse = false;
    
    if (walk.length < 10 || walk.length > 10) {
      traverse = false;
    } else {
      for (let dir of walk) {
        if (dir === "n") {
          n++;
        } else if (dir === "s") {
          s++;
        } else if (dir === "w") {
          w++;
        } else if (dir === "e") {
          e++;
        }
      }
      if (n - s === 0 && w - e === 0) {
        traverse = true;
      }
    }
    return traverse;
}