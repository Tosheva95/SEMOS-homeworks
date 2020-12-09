const email = document.getElementById('email');
const username = document.getElementById('username');
const pwd = document.getElementById('pwd');
const rpwd = document.getElementById('repwd');
const btn = document.getElementById('register');


const checkForm = function(email, pwd, rpwd){
  if(pwd.value != ''){
    if(email.value !='' && username.value != '' && pwd.value === rpwd.value){
      return true;
    } 
  }else{
    alert('Password field cannot be empty');
  }
  if(email.value == ''){
    alert('E-mail field cannot be empty');
  }
  if(username.value == ''){
		alert ('Username field cannot be empty');
	}if(rpwd.value == ''){
		alert ('Retype your password!')
	}
  if(pwd.value != rpwd.value){
    alert('Password did not match');
  }
};

const saveVal = function(){
  let formRes = checkForm(email, pwd, rpwd);
  if(typeof(formRes) == 'boolean'){
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', pwd.value);
    localStorage.setItem('username', username.value);
    window.location = 'login-page.html';
  }
};

btn.addEventListener('click', function(){
  if(localStorage.getItem('email') != null){
    if(localStorage.getItem('email') == email.value){
      alert ('Username already exists');
    }else{
      saveVal(); 
    }
  }else{
    saveVal(); 
  }
});


