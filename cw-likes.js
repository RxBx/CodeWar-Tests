function likesOld(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) { 
    return names[0]+" likes this";
  } else if (names.length === 2) { 
  		return names[0] + " and " + names[1] + " like this";
  }else if (names.length === 3) { 
  		return names[0] + ", " + names[1] + " and "  + names[2] +  " like this";
  } else {
    return names[0] + ", " + names[1] + " and "+ (names.length - 2) +" others like this";
  }
}

function likes(names) {
  switch (names.length) {
    case 0: 
      return "no one likes this";
    case 1: 
      return names[0]+" likes this";
    case 2: 
        return names[0] + " and " + names[1] + " like this";
    case 3: 
      return names[0] + ", " + names[1] + " and "  + names[2] +  " like this";
    default:
      return names[0] + ", " + names[1] + " and "+ (names.length - 2) +" others like this";
  }
}