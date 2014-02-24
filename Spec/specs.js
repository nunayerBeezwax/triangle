describe("Triangle", function(){
  describe('type', function(){
    it('determines the type of a triangle based on 3 side input', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 3;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 3;
      testTriangle.type().should.equal('Equilateral');
    });
    it('determines the type of a triangle based on 3 side input', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 3;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 5;
      testTriangle.type().should.equal('Isosceles');
    });
    it('determines the type of a triangle based on 3 side input', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 2;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 4;
      testTriangle.type().should.equal('Scalene');
    });
  });
   describe('valid', function(){
    it('determines if 3 numbers can make a valid triangle', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 3;
      testTriangle.sideTwo = 4;
      testTriangle.sideThree = 5;
      testTriangle.valid().should.equal(true);
    });
  });
});









// describe('triangleChecker', function() {
//   it('determines if a triangle can be formed from 3 side lengths', function() {
//   triangleChecker(3, 4, 5).should.equal(true);
//   });
// });  
// describe('equilateral', function(){
//   it('returns equilateral if all three sides are equal', function(){
//     equilateral(3, 3, 3).should.equal('equilateral');
//   });
// });

