function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
    document.getElementById("message").innerText = "Login successful!";
    window.location.href = "bud.html";
  } else {
      document.getElementById("message").innerText = "Incorrect username or password.";
  }
}

