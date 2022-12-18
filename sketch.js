let sprite;
let direction;

function setup() {
	new Canvas(800, 600);

	sprite = new Sprite(400, 300, 100, 100);
	sprite.addAni('idle', 'assets/test01.png', 1);
	direction = 'forward';
}

function draw() {
	clear();

	sprite.ani = 'idle';

	if (sprite.x < 100){
		direction = 'forward';
	} else if (sprite.x > 700){
		direction = 'backward';
	}

	sprite.debug = mouse.pressing();

	if (direction == 'forward') {
		sprite.x += 4;
		sprite.rotation = 90;
	} else if (direction == 'backward'){
		sprite.x -= 4;
		sprite.rotation = -90;
	}
}