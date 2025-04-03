function message() {
    alert("Hallo, Selamat Datang Di Website Kami");
}
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "user" && pass == "123456") {
        alert("Selamat anda berhasil login");
    } else {
        alert("Username dan password anda salah!");
    }
}

function signin() {
    alert("Selamat anda berhasil masuk");
}

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};
//toggle class active untuk login
const loginForm = document.querySelector(".user-form");
const button = document.querySelector(".button");
document.querySelector(".btn").onclick = (e) => {
    loginForm.classList.remove("active");
    button.classList.remove("active");
    login();
};
document.querySelector(".button").onclick = (e) => {
    loginForm.classList.toggle("active");
    e.preventDefault();
};

const signinForm = document.querySelector(".signin-form");
document.querySelector(".bttn").onclick = (e) => {
    signinForm.classList.remove("active");
    button.classList.remove("active");
    signin();
};
document.querySelector("#sign-in-form").onclick = (e) => {
    signinForm.classList.toggle("active");
    loginForm.classList.remove("active");
    e.preventDefault();
};

//klik keluar sembarang
const sc = document.querySelector("#shopping-cart-button");
const uf = document.querySelector(".button");
const sf = document.querySelector("#sign-in-form");

document.addEventListener("click", function (e) {
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
    if (!uf.contains(e.target) && !loginForm.contains(e.target)) {
        loginForm.classList.remove("active");
    }
    if (!sf.contains(e.target) && !signinForm.contains(e.target)) {
        signinForm.classList.remove("active");
    }
});