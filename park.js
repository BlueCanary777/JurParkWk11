function Park(){
  // this.name = "Jurassic Park";
  this.enclosures = [];
};

Park.prototype.addEnclosure = function(enclosure){
  this.enclosures.push(enclosure);
};

Park.prototype.enclosureNum = function(){
  return this.enclosure.length;
}
