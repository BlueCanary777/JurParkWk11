const assert = require('assert');
const Park = require('../park.js');
const Enclosure = require('../enclosure.js');
const Dinosaur = require('../dinosaur.js');

describe("Park", function(){

  let park;
  let enclosure;
  // let dinosaur;

  beforeEach(function(){
    park = new Park();
    enclosure = new Enclosure();
    // dinosaur = new Dinosaur("Velociraptor", 3);
    // dinosaur = new Dinosaur("Velociraptor", 1);
    // dinosaur = new Dinosaur("T Rex", 2);
    // dinosaur = new Dinosaur("T Rex", 4);
    // dinosaur = new Dinosaur("Triceratops", 0);
    // dinosaur = new Dinosaur("Triceratops", 3);
  })

  it("can add enclosure", function(){
    park.addEnclosure(enclosure);
    assert.strictEqual(park.enclosureNum(), 1);
  })

})
