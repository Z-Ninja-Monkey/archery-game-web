let sprite;
let control;

function setup() {
	new Canvas(800, 600);

	sprite = new Sprite();
	sprite.addAni('idle', 'assets/ghost_standing0001.png', 1);
}
function draw() {
	clear();

	sprite.ani = 'idle';
	
	console.log(sprite.x);
	console.log(control);
	if (sprite.x > 100){
		control = 'forward';
	} else if(sprite.x < 700){
		control = 'backward';
	}
	
	if (control == 'forward') {
		sprite ++;
	} else if(control == 'backward'){
		sprite --;
	} else sprite.visible = false;

}