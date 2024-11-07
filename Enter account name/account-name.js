function confirmTransfer() {
	const username = document.getElementById("username").value;
	if (username) {
		alert(`Transfer to ${username} confirmed!`);
	} else {
		alert("Please enter a username or usertag.");
	}
}
