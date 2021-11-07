const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
//중요하지 않는 string을 저장할 때는 대문자로 작성한다.
const USERNAME_KEY = 'username';


function onLoginBtnSubmit(event) {
  event.preventDefault();
  //위 문구로 브라우저의 기본기능을 막아주고 원하는 코드로 동작시킬 수가 있어진다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(username);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  //로컬 스토리지에 username 키에 username의 값을 저장한다.
  paintGreetings();
}

loginForm.addEventListener('submit', onLoginBtnSubmit)
//인터넷 브라우저는 submit을 하게 되면 다른 창으로 넘어가는 기본 기능이 있다.

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.textContent = `Hello ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
//localStorage.getItem()시 값이 없을땐 null이 출력된다.

if(saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginBtnSubmit)
} else {
  //show the greetings
  paintGreetings();
}