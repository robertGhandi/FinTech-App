const pin = [];
const maxPinLength = 4;

function updatePinDots() {
	const pinDots = document.querySelectorAll(".pin-dot");
	pinDots.forEach((dot, index) => {
		dot.style.backgroundColor = index < pin.length ? "#d1b88f" : "#f0e9dd";
	});
}

function inputPin(number) {
	if (pin.length < maxPinLength) {
		pin.push(number);
		updatePinDots();
	}
}

function deletePin() {
	pin.pop();
	updatePinDots();
}

function clearPin() {
	pin.length = 0;
	updatePinDots();
}

function confirmPin() {
	if (pin.length === maxPinLength) {
		alert("PIN Confirmed: " + pin.join(""));
		clearPin();
	} else {
		alert("Please enter a 4-digit PIN.");
	}
}
