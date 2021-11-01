class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

setposition(){
this.input.position(width/2-128,height/2-100);
this.input.class("customInput");

this.playButton.position(width/2-110,height/2-25);
this.playButton.class("customButton");

this.titleImg.position(width/50,height/20);
this.titleImg.class("gameTitle");

this.greeting.position(width/2,height/2);
this.greeting.class("greeting");

}

handlePlaybutton(){
this.playButton.mousePressed(()=>{
  this.input.hide()
  this.playButton.hide()
  var message = `Game Starts Here`

  this.greeting.html(message);

})


}


  display(){

this.setposition();
this.handlePlaybutton();

}
}
