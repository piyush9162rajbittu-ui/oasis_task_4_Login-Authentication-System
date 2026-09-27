function register() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("registerError");

    error.textContent = "";

    // Password Validation
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
        error.textContent =
            "Password must be at least 8 characters and contain at least 1 number.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Duplicate Check
    const userExists = users.some(
        user =>
            user.username === username ||
            user.email === email
    );

    if (userExists) {
        error.textContent =
            "Username or email already exists.";
        return;
    }

    users.push({
        username,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "index.html";
}

function login() {
    const loginUser =
        document.getElementById("loginUser").value.trim();

    const loginPass =
        document.getElementById("loginPass").value.trim();

    const error =
        document.getElementById("loginError");

    error.textContent = "";

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u =>
            (u.username === loginUser ||
                u.email === loginUser) &&
            u.password === loginPass
    );

    if (!user) {
        error.textContent =
            "Invalid username/email or password.";
        return;
    }

    localStorage.setItem(
        "loggedInUser",
        user.username
    );

    window.location.href =
        "dashboard.html";
}