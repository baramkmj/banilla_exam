const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#login-form .title");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);

  paintGreeting(loginInput.value);
}

function paintGreeting(userName) {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreeting(savedUserName);
}
