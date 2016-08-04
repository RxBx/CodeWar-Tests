function declareWinner(fighter1, fighter2, firstAttacker) {
	var player1, player2, firstGo = true;
	firstAttacker === fighter1.name ? (player1 = fighter1, player2 = fighter2) : (player1 = fighter2, player2 = fighter1);
	while (player1.health > 0 && player2.health > 0) {
		if (firstGo) {
			player2.health -= player1.damagePerAttack;
			if (player2.health < 1) { break; }
			firstGo = false;
		} else {
			player1.health -= player2.damagePerAttack;
			if (player1.health < 1) { break; }
			firstGo = true;
		}
	}
	if (player1.health < 1) {
		return player2.name;
	} else {
		return player1.name;
	}
}

//best 
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

//next best
const declareWinner = (f1, f2, fa) => (f1.health-=(f2.name===fa?f2.damagePerAttack:0)) > 0 && (f2.health-=(f1.name===fa?f1.damagePerAttack:0)) > 0 ? declareWinner(f1,f2,f1.name===fa?f2.name:f1.name) : f1.health <= 0 ? f2.name : f1.name;