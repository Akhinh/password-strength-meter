function checkStrength() {
    const password = document.getElementById("password").value;
    let score = 0;

    if (password.length >= 8) score++;