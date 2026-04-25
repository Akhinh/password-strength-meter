function checkStrength() {
    const password = document.getElementById("password").value;
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const result = document.getElementById("result");

    if (score <= 2) {
        result.textContent = "Weak";
        result.style.color = "red";
    } else if (score <= 4) {
        result.textContent = "Medium";
        result.style.color = "orange";
    } else {
        result.textContent = "Strong";
        result.style.color = "green";
    }
}