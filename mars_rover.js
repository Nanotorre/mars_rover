// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    coordinateX: 0,
    coordinateY: 0,
    travelLog: [{x:0, y:0}]
  }
  
  // Obstacles grid
  // ======================
  var grid = [ 
    ['-','-','-','*','*','-','-','-','-','-'],
    ['-','-','*','-','-','*','-','-','*','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['*','-','-','*','-','*','-','-','-','-'],
    ['-','-','-','-','-','-','*','-','*','-'],
    ['-','-','*','-','-','-','-','-','-','-'],
    ['-','*','-','-','*','-','*','-','-','*'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['*','-','-','*','-','*','-','-','*','-'],
    ['-','-','-','-','-','*','-','*','-','-'] ];
  
  
  // turnLeft
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called!");
    let point = rover.direction;
    switch(point) {
      case "N":
        rover.direction = "W";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "W":
        rover.direction = "S";
        break;
      default:
        rover.direction = "N";
    }
    console.log(`Rover is now pointing ${rover.direction}`);
  }
  
  
  // turnRight
  // ======================
  function turnRight(rover){
    console.log("turnRight was called!");
      let point = rover.direction;
    switch(point) {
      case "N":
        rover.direction = "E";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "W":
        rover.direction = "N";
        break;
      default:
        rover.direction = "N";
    }
    console.log(`Rover is now pointing ${rover.direction}`);
  }
  
  // error messages
  // ======================
  const errStr = `You cannot move rover out of the grid`;
  const obstacleStr = `An obstacle has been found. Rover cannot move forward.`;
  const roverBobstacleStr = `COLLISSION ALERT! Rover B found`;
  const roverCobstacleStr = `COLLISSION ALERT! Rover C found`;
  
  // moveForward
  // ======================
  function moveForward(rover) {
    console.log("MoveForward was called");
    let point = rover.direction; 
    let errorMsg = false;
    
    switch(point) {
      case "N":
          console.log("case N");
        
  //If next move crush with an obstacle, report error with below switch 
          if (rover.coordinateY > 0 && grid[rover.coordinateY -1][rover.coordinateX] == "*") {
            errorMsg = true;
          }
        
  //If next move crush with rover B, report error
          else if (rover.coordinateX == roverB.bCoordinateX && rover.coordinateY -1 == roverB.bCoordinateY) {
            console.log(roverBobstacleStr);
            return;
          }
        
  //If next move crush with rover C, report error
          else if (rover.coordinateX == roverC.cCoordinateX && rover.coordinateY -1 == roverC.cCoordinateY) {
            console.log(roverCobstacleStr);
            return;
          }
       
  //Move if everything is ok
          else if(rover.coordinateY > 0) {
            rover.coordinateY --;       
          }
        
  //If it´s going out of the grid, report error
          else {
            console.log(errStr);
            return;
          }
          break;
  
  //Same behavior with the rest of cardinal points
       case "S":
          if (rover.coordinateY < 9 && grid[rover.coordinateY +1][rover.coordinateX] == "*") {
            errorMsg = true;      
          }
          else if (rover.coordinateX == roverB.bCoordinateX && rover.coordinateY +1 == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX == roverC.cCoordinateX && rover.coordinateY +1 == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if(rover.coordinateY < 9) {
            rover.coordinateY ++;
          }
          else {
            console.log(errStr);
            return;
          }
          break;
        
       case "E":
          if (rover.coordinateX < 9 && grid[rover.coordinateY][rover.coordinateX +1] == "*") {
            errorMsg = true; 
          }
          else if (rover.coordinateX +1 == roverB.bCoordinateX && rover.coordinateY == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX +1 == roverC.cCoordinateX && rover.coordinateY == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if (rover.coordinateX < 9) {
            rover.coordinateX ++;
          }
          else {
            console.log(errStr);
            return;
          }
          break;
        
       case "W":
          if (rover.coordinateX > 0 && grid[rover.coordinateY][rover.coordinateX -1] == "*") {
            errorMsg = true; 
          }
          else if (rover.coordinateX -1 == roverB.bCoordinateX && rover.coordinateY == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX -1 == roverC.cCoordinateX && rover.coordinateY == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if(rover.coordinateX > 0) {
            rover.coordinateX --; 
          }
          else {
            console.log(errStr);
            return;
          }
    }
  
    if (errorMsg) {
      console.log(obstacleStr);
    }
    else {
      rover.travelLog.push({x:rover.coordinateX, y:rover.coordinateY});
      console.log(`The current position is x=${rover.coordinateX}, y=${rover.coordinateY}`);
    }  
  }
    
  // moveBackward
  // ======================
  function moveBackward(rover) {
    
  //it´s the same function as moveForward but going backwards
    console.log("moveBackward was called");
    let point = rover.direction;
    let errorMsgB = false;
    
    switch(point) {
      case "N":
          if (rover.coordinateY < 9 && grid[rover.coordinateY +1][rover.coordinateX] == "*") {
            errorMsgB = true;
          }
          else if (rover.coordinateX == roverB.bCoordinateX && rover.coordinateY +1 == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX == roverC.cCoordinateX && rover.coordinateY +1 == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if(rover.coordinateY < 9) {
            rover.coordinateY ++;       
          }
          else {
            console.log(errStr);
            return;
          }
          break;
        
       case "S":
          if (rover.coordinateY > 0 && grid[rover.coordinateY -1][rover.coordinateX] == "*") {
            errorMsgB = true;
          }
          else if (rover.coordinateX == roverB.bCoordinateX && rover.coordinateY -1 == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX == roverC.cCoordinateX && rover.coordinateY -1 == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if(rover.coordinateY > 0) {
            rover.coordinateY --;
          }
          else {
            console.log(errStr);
            return;
          }
          break;
        
       case "E":
          if (rover.coordinateX > 0 && grid[rover.coordinateY][rover.coordinateX -1] == "*") {
            errorMsgB = true;
          }
          else if (rover.coordinateX -1 == roverB.bCoordinateX && rover.coordinateY == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX -1 == roverC.cCoordinateX && rover.coordinateY == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if (rover.coordinateX > 0) {
            rover.coordinateX --;
          }
          else {
            console.log(errStr);
            return;
          }
          break;
        
       case "W":
          if (rover.coordinateX < 9 && grid[rover.coordinateY][rover.coordinateX +1] == "*") {
            errorMsgB = true;
          }
          else if (rover.coordinateX +1 == roverB.bCoordinateX && rover.coordinateY == roverB.bCoordinateY){
            console.log(roverBobstacleStr);
            return;
          }
          else if (rover.coordinateX +1 == roverC.cCoordinateX && rover.coordinateY == roverC.cCoordinateY){
            console.log(roverCobstacleStr);
            return;
          }
          else if(rover.coordinateX < 9) {
            rover.coordinateX ++; 
          }
          else {
            console.log(errStr);
            return;
          }
    }
    
    if (errorMsgB) {
      console.log(obstacleStr);
    }
    else {
      rover.travelLog.push({x:rover.coordinateX, y:rover.coordinateY});
      console.log(`The current position is x=${rover.coordinateX}, y=${rover.coordinateY}`);
    } 
  }
  
  
  // verifyCommand
  // ======================
  function verifyCommand(commandStr) {
    
  //check each command of the given string
    let verified = 0;
    for (let i = 0; i < commandStr.length; i++) {
      if(commandStr[i] == "l" || commandStr[i] == "r" || commandStr[i] =="f" || commandStr[i] =="b") {
        verified ++; 
      }  
    }
    if (verified == commandStr.length) {
      return true;
    }
    else {
      console.log(`Enter a valid command as follows 
  Left: l
  Right: r
  Forward: f
  Backward: b`);
    }
  }
  
  
  //return random number between given limits;  
  // ========================================
  function giveRandomNo(min, max) {
  //Rover B & Rover C use this function for both the first position and the path
    return Math.floor(Math.random() * (max +1 - min)) + min;    
  }
  
  
  // Rover b-c in aleatory position
  // ========================================
  let roverBx, roverBy, roverCx, roverCy;
  
  //Set rover B and rover C at random positions. Cannot be over another rover, over an obstacle or out of the grid. 
  do {
    roverBx = giveRandomNo(0,3);
    roverBy = giveRandomNo(0,3);
  }    
  while (grid[roverBy][roverBx] == "*" || roverBx === 0 === roverBy);
  
  do {
    roverCx = giveRandomNo(0,5);
    roverCy = giveRandomNo(0,5);
  }    
  while (grid[roverCy][roverCx] == "*" || roverCx === 0 === roverCy || (roverCx === roverBx && roverCy === roverBy));
  
  let roverB = {
    bCoordinateX: roverBx,
    bCoordinateY: roverBy
  }
  let roverC = {
    cCoordinateX: roverCx,
    cCoordinateY: roverCy
  }
  
  
  // Rover B moves randomly  
  // ========================================
  /* random number for each cardinal points. Rover B stops and try another movement if it´s going out of the grid or if an obstacle has found on it´s way */
  function roverBMoves () {
    
  //An aleatory number gives the direction of next move. Call roverBMoves again Until...
  let aleatoryCommand = giveRandomNo(1, 4);    
  switch(aleatoryCommand) {
    case 1: //up direction
     
  //...it´s into the grid boundaries and...
      if((roverB.bCoordinateY -1) < 0 || grid[roverB.bCoordinateY -1][roverB.bCoordinateX] == "*") {
        roverBMoves ();
        }
      
  //...there´s not risk of crash with another rover.
      else if (roverB.bCoordinateY-1 == rover.coordinateY && roverB.bCoordinateX == rover.coordinateX) {
        roverBMoves ();       
        }
      else if (roverB.bCoordinateY-1 == roverC.cCoordinateY && roverB.bCoordinateX == roverC.cCoordinateX) {
        roverBMoves ();       
        }
  
  //If everything it´s ok, move
      else {
        roverB.bCoordinateY--;
        }
      break;
  
  //The same with other directions
    case 2: //down
        if((roverB.bCoordinateY +1) > 9|| grid[roverB.bCoordinateY +1][roverB.bCoordinateX] == "*" ) {
          roverBMoves ();
          }
        else if (roverB.bCoordinateY+1 == rover.coordinateY && roverB.bCoordinateX == rover.coordinateX) {
          roverBMoves ();       
          }
        else if (roverB.bCoordinateY+1 == roverC.cCoordinateY && roverB.bCoordinateX == roverC.cCoordinateX) {
          roverBMoves ();       
          }
        else {
          roverB.bCoordinateY++;
          }
        break;
          
    case 3: //left
        if((roverB.bCoordinateX -1) < 0 || grid[roverB.bCoordinateY][roverB.bCoordinateX -1] == "*") {
          roverBMoves ();
          }
        else if (roverB.bCoordinateY == rover.coordinateY && roverB.bCoordinateX-1 == rover.coordinateX) {  
          roverBMoves ();
          }
        else if (roverB.bCoordinateY == roverC.cCoordinateY && roverB.bCoordinateX-1 == roverC.cCoordinateX) {
          roverBMoves ();       
          }
        else {
          roverB.bCoordinateX--;
          }
        break;
          
    case 4: //right
    //console.log("init b right");
        if((roverB.bCoordinateX +1) > 9 || grid[roverB.bCoordinateY][roverB.bCoordinateX +1] == "*") {
          roverBMoves ();
          }
        else if (roverB.bCoordinateY == rover.coordinateY && roverB.bCoordinateX+1 == rover.coordinateX) {
          roverBMoves ();       
        }
        else if (roverB.bCoordinateY == roverC.cCoordinateY && roverB.bCoordinateX+1 == roverC.cCoordinateX) {
          roverBMoves ();       
        }
        else {
          roverB.bCoordinateX++;
          }
        break;
      }    
  }
  
  
  // Rover C moves randomly  
  // ========================================
  /*it´s the same function as roverb */
  function roverCMoves () {  
  let aleatoryCcommand = giveRandomNo(1, 4);    
  switch(aleatoryCcommand) {
    case 1: //up
      if((roverC.cCoordinateY -1) < 0 || grid[roverC.cCoordinateY -1][roverC.cCoordinateX] == "*") {
        roverCMoves ();
        }
      else if (roverC.cCoordinateY-1 == rover.coordinateY && roverC.cCoordinateX == rover.coordinateX) {
        roverCMoves ();       
        }
      else if (roverC.cCoordinateY-1 == roverB.bCoordinateY && roverC.cCoordinateX == roverB.bCoordinateX) {
        roverCMoves ();       
        }
      else {
        roverC.cCoordinateY--;
        }
      break;
        
    case 2: //down
        if((roverC.cCoordinateY +1) > 9|| grid[roverC.cCoordinateY +1][roverC.cCoordinateX] == "*" ) {
          roverCMoves ();
          }
        else if (roverC.cCoordinateY+1 == rover.coordinateY && roverC.cCoordinateX == rover.coordinateX) {
          roverCMoves ();       
          }
        else if (roverC.cCoordinateY+1 == roverB.bCoordinateY && roverC.cCoordinateX == roverB.bCoordinateX) {
          roverCMoves ();       
          }
        else {
          roverC.cCoordinateY++;
          }
        break;
          
    case 3: //left
        if((roverC.cCoordinateX -1) < 0 || grid[roverC.cCoordinateY][roverC.cCoordinateX -1] == "*") {
          roverCMoves ();
          }
        else if (roverC.cCoordinateY == rover.coordinateY && roverC.cCoordinateX-1 == rover.coordinateX) {
          roverCMoves ();       
        }
        else if (roverC.cCoordinateY+1 == roverB.bCoordinateY && roverC.cCoordinateX-1 == roverB.bCoordinateX) {
          roverCMoves ();       
        }
        else {
          roverC.cCoordinateX--;
          }
        break;
          
    case 4: //right
        if((roverC.cCoordinateX +1) > 9 || grid[roverC.cCoordinateY][roverC.cCoordinateX +1] == "*") {
          roverCMoves ();
          }
        else if (roverC.cCoordinateY == rover.coordinateY && roverC.cCoordinateX+1 == rover.coordinateX) {
          roverCMoves ();       
          }
        else if (roverC.cCoordinateY == roverB.bCoordinateY && roverC.cCoordinateX+1 == roverB.bCoordinateX) {
          roverCMoves ();       
          }
        else {
          roverC.cCoordinateX++;
          }
        break;
      } 
     
  }
  
  
  // switchMove (Rover control)
  // ======================
  function moveRover(someMoves){
    console.log(`Rover is moving!`);
    for(let k = 0; k < someMoves.length; k++) {
  //move Rover B and C
        roverBMoves(); 
        roverCMoves();
       
  //move principal rover sending commands to each function
        switch(someMoves[k]) {
            case "l": 
              turnLeft(rover);
              break;
            case "r":
              turnRight(rover);
              break;
            case "f": 
              moveForward(rover); 
              break;
            case "b":
              moveBackward(rover);
          }
    }
  //Write down travel log
   console.log(`Travel log:`);
    for(let j = 0; j < rover.travelLog.length; j++){
        console.log(`Position No.${j} => x=${rover.travelLog[j].x}, y=${rover.travelLog[j].y}`);
      }
  }
  
  
  // Give commands
  // ======================
  function marsRoverOn() {
    let offStr = /off/i;
    let askCommand = prompt(`Mars Rover is ON. You can switch it off or move it.`, `off`);
    
  //If prompt off, switch rover off
          if (offStr.test(askCommand)) {
            console.log(`Mars Rover OFF.
  The last position is
  x=${rover.coordinateX}
  y=${rover.coordinateY}`);
            return;
          }
    
   //If nothing is prompted, try again
          else if(askCommand == null){
            return console.log(`No values. Try again.`);
          }
    
  //If the given command it´s not l,r,b,f string, verifyCommand function returns instruccions
          else if(verifyCommand(askCommand) !== true) {
            return;
          }
    
   //If a proper string command is given, pass it to moveRover function
          else {
            console.log(`Command list: ${askCommand}`);
            moveRover(askCommand);
          }
  } 
      
  
  // test goes here
  // ======================
  marsRoverOn();