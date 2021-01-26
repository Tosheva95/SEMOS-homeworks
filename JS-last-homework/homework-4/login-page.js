const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const btn = document.getElementById('login');

btn.addEventListener('click', function(){
  if(email.value == localStorage.getItem('email') && pwd.value == localStorage.getItem('password')){
    window.location = 'home-page.html';
  }if(email.value == ''){
    alert('E-mail field cannot be empty');
	}if(pwd.value == ''){
    alert('Password field cannot be empty');
  }if(email.value != localStorage.getItem('email')){
    alert ('The e-mail you entered doesn`t belong to an account!');
  }if(pwd.value != localStorage.getItem('password')){
    alert ('Password is incorrect, please try again!')
  }
})