// create an assert variable and require Dinosaur
const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  let testDino;
  let testDinoTwo;


  beforeEach(function(){
    testDino = new Dinosaur('Veloceraptor', 3);
    testDinoTwo = new Dinosaur('T Rex', 0);
    testDinoThree = new Dinosaur('Triceratops', 4);
  })

  it('should have a type', function(){
    testDino = new Dinosaur('Veloceraptor', 3);
    assert.strictEqual(testDino.type, 'Veloceraptor');
  })

  it('should have a number of offspring', function(){
    testDinoTwo = new Dinosaur('T Rex', 0);
    assert.strictEqual(testDinoTwo.offspring, 0)
  })
})
