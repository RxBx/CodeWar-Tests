function countAllCharactersOfThePyramid(characters){
  var total;
  var stringLength = characters.length;
  var stringLastIndex = stringLength - 1;
  var stoneCount = 0;
  for (i = stringLength; i > 0; i--) {
  	stoneCount += Math.pow(i*2-1, 2);
  }
  return stoneCount;
}