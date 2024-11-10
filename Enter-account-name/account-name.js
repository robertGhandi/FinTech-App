function confirmTransfer() {
    window.location.href = "../selectAccount/selectAccount.html"
	const username = document.getElementById("username").value;
	if (username) {
		alert(`Transfer to ${username} confirmed!`);
	} else {
		alert("Please enter a username or usertag.");
	}
}


function home() {
    window.location.href = "../homePage/homePage.html"
}

function reward() {
    window.location.href = "../Rewards/rewards.html"
}

function back() {
    window.location.href = "../transfer-page/transfer.html"
}