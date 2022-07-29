// Berechnung des zu versteuernden Einkommens (zvE)
// Grund­tarif für allein­stehende Person: zvE  = tat­säch­liches zu versteuerndes Einkommen.
// Splitting­tarif für zwei Personen zusammen: zvE = S 2 teilen

// Ausgabe der errechneten Einkommensteuer
const output = (est) => {
	const result = document.getElementById('einkommenSteuer');
	resultLabel.innerHTML = est + ',00 Euro';
};

// Einkommensteuer-Berechnung 2019
const calcEst2019 = () => {
	const grundfreibetrag = 9168;
	const zve = calcZve();
	let est;

	// Einkommensteuer berechnen
	// 5 Fälle mit gesetz­lich fest­gelegten Formeln:
	switch (true) {
		// Fall 1
		case zve <= grundfreibetrag:
			// Einkommens­bereich unter 9.169 Euro
			est = 0;
			break;
		// Fall 2
		case grundfreibetrag < zve && zve <= 14254:
			// Einkommens­bereich 9.169 Euro bis 14.254 Euro
			const calcTwo = () => {
				// Hilfs­wert bestimmen
				// y = (zvE - 9.168) / 10.000
				const hilfswert = (zve - grundfreibetrag) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (980,14 * y + 1.400) * y
				const est = Math.floor((980.14 * hilfswert + 1400) * hilfswert);

				return est;
			};
			est = calcTwo();
			break;
		// Fall 3
		case 14255 < zve && zve <= 55960:
			// Einkommens­bereich 14.255 Euro bis 55.960 Euro
			const calcThree = () => {
				// Hilfs­wert bestimmen
				// z = (zvE - 14.254) / 10.000
				const hilfswert = (zve - grundfreibetrag) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (216,16 * z + 2.397) * z + 965,58
				const est = Math.floor((216.16 * hilfswert + 2397) * hilfswert);

				return est;
			};
			est = calcThree();
			break;

		// Fall 4
		case 55961 < zve && zve <= 265326:
			// Spitzensteuersatz
			// Einkommens­bereich von 55.961 Euro bis 265.326 Euro
			const calcFour = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0,42 * zvE - 8.780,9
				const est = Math.floor(0.42 * zve - 8780.9);

				return est;
			};
			est = calcFour();
			break;
		// Fall 5
		case 265327 <= zve:
			// Höchststeuersatz
			// Einkommen ab 265.327 Euro
			const calcFive = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0, 45 * zvE - 16.740, 68
				const est = Math.floor(0.45 * zve - 16740.68);

				return est;
			};
			est = calcFive();
			break;

		default:
			console.log('no entry');
	}

	return output(est);
};

// Einkommensteuer-Berechnung 2020
const calcEst2020 = () => {
	const grundfreibetrag = 9408;
	const zve = calcZve();
	let est;

	// Einkommensteuer berechnen
	// 5 Fälle mit gesetz­lich fest­gelegten Formeln:
	switch (true) {
		// Fall 1
		case zve <= grundfreibetrag:
			// Einkommens­bereich unter 9.409 Euro
			est = 0;
			break;
		// Fall 2
		case grundfreibetrag < zve && zve <= 14532:
			// Einkommens­bereich von 9.409 Euro bis 14.532 Euro
			const calcTwo = () => {
				// Hilfs­wert bestimmen
				// y = (zvE - 9.408) / 10.000
				const hilfswert = (zve - grundfreibetrag) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (972,87 * y + 1.400) * y
				const est = Math.floor((972.87 * hilfswert + 1400) * hilfswert);

				return est;
			};
			est = calcTwo();
			break;
		// Fall 3
		case 14533 < zve && zve <= 57051:
			// Einkommens­bereich von 14.533 Euro bis 57.051 Euro
			const calcThree = () => {
				// Hilfs­wert bestimmen
				// z = (zvE - 14.532) / 10.000
				const hilfswert = (zve - 14.532) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (212,02 * z + 2.397) * z + 972,79
				const est = Math.floor((212.02 * hilfswert + 2397) * hilfswert + 972.79);

				return est;
			};
			est = calcThree();
			break;
		// Fall 4
		case 57052 < zve && zve <= 270500:
			// Spitzensteuersatz
			// Einkommens­bereich von 57.052 Euro bis 270.500 Euro
			const calcFour = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0,42 * zvE - 8.963,74
				const est = Math.floor(0.42 * zve - 8963.74);

				return est;
			};
			est = calcFour();
			break;
		// Fall 5
		case 270501 <= zve:
			// Höchststeuersatz
			// Einkommen ab 270.501 Euro
			const calcFive = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0, 45 * zvE - 17.078, 74
				const est = Math.floor(0.45 * zve - 17078.74);

				return est;
			};
			est = calcFive();
			break;

		default:
			console.log('no entry');
	}

	return output(est);
};

// Einkommensteuer-Berechnung 2021
const calcEst2021 = () => {
	const grundfreibetrag = 9744;
	const zve = calcZve();
	let est;

	// Einkommensteuer berechnen
	// 5 Fälle mit gesetz­lich fest­gelegten Formeln:
	switch (true) {
		// Fall 1
		case zve <= grundfreibetrag:
			// Einkommens­bereich unter 9.745 Euro
			est = 0;
			break;
		// Fall 2
		case grundfreibetrag < zve && zve <= 14753:
			// Einkommens­bereich von 9.745 Euro bis 14.753 Euro
			const calcTwo = () => {
				// Hilfs­wert bestimmen
				// y = (zvE - 9.744) / 10.000
				const hilfswert = (zve - grundfreibetrag) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (995,21 * y + 1.400) * y
				const est = Math.floor((995.21 * hilfswert + 1400) * hilfswert);

				return est;
			};
			est = calcTwo();
			break;
		// Fall 3
		case 14754 < zve && zve <= 57918:
			// Einkommens­bereich von 14.754 Euro bis 57.918 Euro
			const calcThree = () => {
				// Hilfs­wert bestimmen
				// z = (zvE - 14.753) / 10.000
				const hilfswert = (zve - 14753) / 10000;

				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = (208,85 * z + 2.397) * z + 950,96
				const est = Math.floor((208.85 * hilfswert + 2397) * hilfswert + 950.96);

				return est;
			};
			est = calcThree();
			break;
		// Fall 4
		case 57919 < zve && zve <= 274612:
			// Spitzensteuersatz
			// Einkommens­bereich von 57.919 Euro bis 274.612 Euro
			const calcFour = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0,42 * zvE - 9.136,63
				const est = Math.floor(0.42 * zve - 9136.63);

				return est;
			};
			est = calcFour();
			break;
		// Fall 5
		case 274613 <= zve:
			// Höchststeuersatz
			// Einkommen ab 274.613 Euro
			const calcFive = () => {
				// Einkommen­steuer berechnen
				// auf ganze Euro abrunden mit Math.floor(x)
				// ESt = 0,45 * zvE - 17.374,99
				const est = Math.floor(0.45 * zve - 17374.99);

				return est;
			};
			est = calcFive();
			break;

		default:
			console.log('no entry');
	}

	return output(est);
};

// Schritt 1: Berechnung des zu versteuernden Einkommens (zvE)
const calcZve = () => {
	// inputfeld- select name=status
	const s = document.querySelector('input[name="status"]:checked').value;

	// inputfeld id=einkommen
	const e = parseInt(document.getElementById('einkommen').value);

	if (s == 0) {
		// GrundTarif
		const zve = e;
		return zve;
	} else {
		// SplittingTarif
		const zve = e / 2;
		return zve;
	}
};

// Startfunktion onclick
const calcStart = () => {
	const year = document.getElementById('year').value;

	switch (year) {
		case '2019':
			calcEst2019();
			break;
		case '2020':
			calcEst2020();
			break;
		case '2021':
			calcEst2021();
			break;
		default:
			console.log('missing year');
	}
};

// Validation
const validate = () => {
	const zve = document.getElementById('einkommen').value;
	const status = document.querySelector('input[name="status"]:checked');
	const jahr = document.getElementById('year').value;

	if (zve && status && jahr) {
		calcStart();
	} else {
		console.log('Missing input');
	}
};
