var Triangle = {
  type: function(){
    if ((this.sideOne === this.sideTwo) && (this.sideTwo === this.sideThree)){
      return 'Equilateral';
      } else if (this.sideOne === this.sideTwo || this.sideTwo === this.sideThree || this.sideThree === this.sideOne) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  },
  valid: function() {
    return this.sideOne + this.sideTwo > this.sideThree && this.sideTwo + this.sideThree > this.sideOne && this.sideOne + this.sideThree > this.sideTwo;
  }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var sideOne = parseInt($("input#side-one").val());
    var sideTwo = parseInt($("input#side-two").val());
    var sideThree = parseInt($("input#side-three").val());
    var newTriangle = Object.create(Triangle);
    newTriangle.sideOne = sideOne;
    newTriangle.sideTwo = sideTwo;
    newTriangle.sideThree = sideThree;

    if(newTriangle.valid()){
      if(newTriangle.type() === 'Equilateral') {
        $("ul#equilateral").append('<li>' + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + '</li>');
      } else if(newTriangle.type() === 'Isosceles') {
        $("ul#isosceles").append('<li>' + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + '</li>');
      } else {
        $("ul#scalene").append('<li>' + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + '</li>');
      }
    } else {
      alert("Please enter a valid triangle");
    }
    });
    
    this.reset();
    
  });
