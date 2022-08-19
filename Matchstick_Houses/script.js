function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}

----------------------------------------------------------------

function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

