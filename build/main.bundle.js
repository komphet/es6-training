"use strict";

document.getElementById("loginBtn").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        console.log(username, password);
    } else {
        alert("Username or Password is Empty!");
    }
});
