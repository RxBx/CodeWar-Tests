function watchPyramidFromTheSide(characters){
	var length = characters.length;
	var span = characters.length*2 -1;
	var resultArray = [];
	var resultString = "";
	for (i=length-1; i>-1;i--) {
		var row = [];
		var rowItem = characters[i];
		for (j=0; j<length;j++){
			var item = (i <= j) ? rowItem : " ";
			row.push(item);
		}
		resultArray.push(row);
	}
	for (i = 0; i < length; i++) {
		for (j=length - 2; j >= 0; j--) {
			resultArray[i].push(resultArray[i][j]);
		}
	}
	for (i = 0; i < resultArray.length; i++) {
		for (j = 0; j < span; j++) {
			resultString = (j<span) ? resultString + resultArray[i][j] : (resultString[i][j] !== " ") ? resultString + resultArray[i][j] : resultString;
		}
		resultString += "\n";
	}
	return resultString;
}

function watchPyramidFromAbove(characters){
	var length = characters.length;
	var span = characters.length*2 -1;
	var resultArray = [];
	var resultString = "";
	for (i=0; i<length;i++) {
		var row = [];
		var rowNumber = i;
		for (j=0; j<length;j++){
			var limit = rowNumber;
			var index = (j < limit + 1) ? j : limit;
			row.push(characters[index]);
		}
		resultArray.push(row);
	}
	for (i = 0; i < length; i++) {
		for (j=length - 2; j >= 0; j--) {
			resultArray[i].push(resultArray[i][j]);
		}
	}
	for (i = length - 2; i >= 0; i--) {
		resultArray.push(resultArray[i]);
	}
	for (i = 0; i < span; i++) {
		for (j = 0; j < span; j++) {
			resultString += resultArray[i][j];
		}
		if (i < span - 1) {resultString += "\n";}
	}
	return resultString;
}

function countVisibleCharactersOfThePyramid(characters){
	if (characters.length < 2) {
		return characters.length;
	} else {
	var wholePyramid = countAllCharactersOfThePyramid(characters);
	var innerPyramid = countAllCharactersOfThePyramid(characters.slice(1));
	return wholePyramid - innerPyramid;
	}
}

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