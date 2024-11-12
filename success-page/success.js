function closeButton() {
	window.location.href = "../homePage/homePage.html";
}

function reward() {
	window.location.href = "../Rewards/rewards.html";
}

function home() {
	window.location.href = "../homePage/homePage.html";
}

function copy() {
	const copyButton = document.getElementById("copy-btn");

	copyButton.addEventListener("click", () => {
		const transactionCode = document.getElementById("transaction-code").value;
		navigator.clipboard.writeText(transactionCode).then(() => {
			alert("transaction code copied!");
		});
	});
}
