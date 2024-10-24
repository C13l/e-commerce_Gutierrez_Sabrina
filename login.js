const User = {
    email: "abc@gmail.com",
    password: "abc"
}

const form = document.querySelector("#form");
console.dir(form.elements.email);
console.dir(form.elements.password);

form.addEventListener("submit", (event) => {
    event.preventDefault()
const email = form.elements.email.value;
const password = form.elements.password.value;

console.log("Email: ", email);
console.log("Password: ", password);

if (User.email === email && User.password === password) {
    localStorage.setItem("userEmail", email);
    window.location.href = "index.html";
} else {
    alert("Usuario incorrecto");
    form.elements.email.value = "";
    form.elements.password.value = "";
  };
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "../index.html";
};

console.log(User);