class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

// Crow <: Bird <: Animal

function chirp(bird: Bird): Bird {
  bird.chirp();
  return bird;
}

chirp(new Crow)
chirp(new Bird)
// AnimalはBirdのスーパータイプなので渡せない
/*
  Argument of type 'Animal' is not assignable to parameter of type 'Bird'.
  Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.ts(2345)
*/
// chirp(new Animal)
