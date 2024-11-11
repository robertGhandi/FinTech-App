document.querySelector('.confirm-button').addEventListener('click', () => {
    const amount = document.querySelector('.amount-input').value;
    const comment = document.querySelector('.comment-input').value;

    if (!amount || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    alert(`Transfer of ₣${amount} confirmed!${comment ? '\nComment: ' + comment : ''}`);
});

function reward() {
    window.location.href = "../Rewards/rewards.html"
}

function home() {
    window.location.href = "../homePage/homePage.html"
}

function confirmTransaction() {
    window.location.href = "../password/password.html"
}

function previousPage() {
    window.location.href = "../selectAccount/selectAccount.html"
}