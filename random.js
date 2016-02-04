function generate(name) {
	if(name === undefined) {
		console.log('Enter valid string');
		return 0;
	} else {
		low = 6;
		high = 15;

		number = Math.floor(Math.random() * (high - low) + low);

		console.log(name + ' ' + number);
	}
}