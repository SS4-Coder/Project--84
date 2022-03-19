canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
	window.addEventListener("keydown", my_keydown);
     function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)||
		 (keyPressed >=65 && keyPressed<=90)){
		 aplhabetkey();
		 document.getElementById("d1").innerHTML="You pressed an alphabet key";
		 console.log("alphabet key");
		 }
		 else if(keyPressed >=48 && keyPressed<=57)
		 {
		 numberkey();
		 document.getElementById("d1").innerHTML="You pressed a number key";
		 console.log("number Key");
		 }
		else if (keyPressed>=37 && keyPressed<=40){
			Arrkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
			console.log("Arrow Key");
		}

		else if(keyPressed=='37'){
			left();
			console.log("left");
		   }
		  else if(keyPressed=='38'){
			   up();
			   console.log("up");
			  }
			 else if(keyPressed=='39'){
			   right();
			   console.log("right");
			  }
			  else if(keyPressed=='40'){
			   down();
			   console.log("down");
			  }
			  
				else if((keyPressed =17 )||(keyPressed=18)||(keyPressed=27))
			   {
				specialkey();
				document.getElementById("d1").innerHTML="You pressed symbol or other key";
				console.log("special key");}
			 else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key");
	} 

}

function aplhabetkey()
{
   img_image="Alpkey.png";
   add();

}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function Arrkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
}