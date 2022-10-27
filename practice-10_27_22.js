const firstCat = {
  name: "Luka",
  breed: "Bombay",
  eyeColor: "yellow",
  weight: 12,
  hasPatches: false,
  hasStripes: false,
  favToys: ["metal bouncy ball", "mouse"],
};

console.log(firstCat.favToys[1]);

const secondCat = {
  name: "Pepper",
  breed: "Bombay",
  eyeColor: "green",
  weight: 12,
  hasPatches: false,
  hasStripes: false,
  favToys: ["ballons"],
};

console.log(secondCat.favToys[0]);

class Cat {
  constructor(name, breed, eyeColor, weight, hasPatches, hasStripes, favToys) {
    this.name = name;
    this.breed = breed;
    this.eyeColor = eyeColor;
    this.weight = weight;
    this.hasPatches = hasPatches;
    this.hasStripes = hasStripes;
    this.favToys = favToys;
  }
}

const Cello = new Cat("Cello", "Tabby", "Blue", 7, true, false);
console.log(Cello);

const Mello = new Cat("Mello", "Ginger", "green", 10, false, false, [
  "yarn",
  "mouse",
]);
console.log(Mello);

class bigCat extends Cat {
  constructor(
    name,
    breed,
    eyeColor,
    weight,
    isDomesticated,
    hasPatches,
    hasStripes,
    favToys
  ) {
    super(name, breed, eyeColor, weight, isDomesticated);
    this.isDomesticated = isDomesticated;
  }
}

const Tchalla = new bigCat("Tchalla", "Panther", "green", 150, false);
console.log(Tchalla);



const Sprinkles = new bigCat('Sprinkles', "Lion", 'orange', 90, false);
console.log(Sprinkles)
