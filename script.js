class Cat {
	speak() {
		console.log('Prrr...');
	}

	play() {
		console.log('Playing with yarn ball...');
	}

	eat() {
		console.log('Meow mix me, please!');
	}
}

//Cat 1
const cat1 = new Cat();
cat1.type = 'Siamese';
cat1.color = 'white';
cat1.age = 5;
console.log(cat1);

const cat2 = new Cat();
cat2.type = 'Burmese';
cat2.color = 'black';
cat2.age = 7;
console.log(cat2);

cat1.speak();
cat1.play();
cat1.eat();

cat2.speak();
cat2.play();
cat2.eat();

/**
 * ********** Pirate Class *********
 */
class Pirate {
	constructor(name, distinction, drinkOfChoice) {
		this.name = name;
		this.distinction = distinction;
		this.drinkOfChoice = drinkOfChoice;
	}

	speak() {
		console.log(
			`Aargggh..  Matee! I'm ${this.name}, and don't stare at my ${this.distinction}!`
		);
	}

	doWork() {
		console.log(
			`Why ${this.name}? Find somebody else to swab the deck! Aargggh...!`
		);
	}

	drink() {
		console.log(`Pass me my ${this.drinkOfChoice}, matee!`);
	}
}

//Pirate Ships
const jollyRoger = [
	new Pirate('Sneaky Sam', 'eye patch', 'rum'),

	new Pirate('Bad Bart', 'hook', 'whiskey'),

	new Pirate('Grimey Greg', 'pegged leg', 'bourbon'),
];

const blackPearl = [
	new Pirate('Robert the Rascal', 'missing teeth', 'bootlegged beer'),

	new Pirate('Evil Eddie', 'extra pinky', 'vodka'),

	new Pirate('Laughing Larry', 'belly shaking', 'everything'),
];

const ships = [jollyRoger, blackPearl];

ships.forEach(ship => {
	ship.forEach(pirate => {
		console.log(
			`name: ${pirate.name}, distinction: ${pirate.distinction}, drinkOfChoice: ${pirate.drinkOfChoice}`
		);
	});
});

// jollyRoger.forEach(pirate => {
// 	console.log(
// 		`name: ${pirate.name}, distinction: ${pirate.distinction}, drinkOfChoice: ${pirate.drinkOfChoice}`
// 	);
// });

// blackPearl.forEach(pirate => {
// 	console.log(
// 		`name: ${pirate.name}, distinction: ${pirate.distinction}, drinkOfChoice: ${pirate.drinkOfChoice}`
// 	);
// });

blackPearl[2].doWork();
