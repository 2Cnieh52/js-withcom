function setup() {
    createCanvas(600, 600);
     background("black");
  }
  
  
  function draw() {
    
    stroke ("grey");
    fill ("white");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      circle(mouseX, mouseY, 20, 35);
    }
  }