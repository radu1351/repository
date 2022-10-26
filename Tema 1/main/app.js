
const distance = (a, b) => {

	if (typeof a === 'string' && typeof b === 'string') {

		const track = Array(b.length + 1).fill(null).map(() =>
			Array(a.length + 1).fill(null));
		for (let i = 0; i <= a.length; i += 1) {
			track[0][i] = i;
		}

		for (let j = 0; j <= b.length; j += 1) {
			track[j][0] = j;
		}

		for (let j = 1; j <= b.length; j += 1) {
			for (let i = 1; i <= a.length; i += 1) {

				var ind = 0;
				if (a[i - 1] === b[j - 1]) 
					ind = 0;
				else 
					ind = 1;

				track[j][i] = Math.min(
					track[j][i - 1] + 1,
					track[j - 1][i] + 1,
					track[j - 1][i - 1] + ind,
				);
			}
		}
		return track[b.length][a.length];
		
	}
	else throw new Error('InvalidType');
};

module.exports.distance = distance