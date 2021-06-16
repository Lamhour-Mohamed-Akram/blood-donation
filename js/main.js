document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('name2').addEventListener('blur', validateName2);
document.getElementById('adresse').addEventListener('blur', validateAdresse);
document.getElementById('cin').addEventListener('blur', validateCin);
document.getElementById('tel').addEventListener('blur', validateTele);




function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.remove('is-valid');

    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
  }
}



function validatePassword() {

  const password = document.getElementById('password');
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (!re.test(password.value)) {
    password.classList.remove('is-valid');
    password.classList.add('is-invalid');

  }
  else {
    password.classList.remove('is-invalid');

    password.classList.add('is-valid');


  }
}


function validateName() {
  const name = document.getElementById('name');
  const re = /^[ a-zA-Z]{2,30}$/;

  if (!re.test(name.value)) {
    name.classList.remove('is-valid');
    name.classList.add('is-invalid');

  } else {
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');


  }
}

function validateName2() {
  const name2 = document.getElementById('name2');
  const ree = /^[ a-zA-Z]{2,30}$/;

  if (!ree.test(name2.value)) {
    name2.classList.remove('is-valid');
    name2.classList.add('is-invalid');

  } else {
    name2.classList.remove('is-invalid');
    name2.classList.add('is-valid');


  }
}


function validateAdresse() {
  const adresse = document.getElementById('adresse');
  const ree = /^[ +,0-9a-zA-Z]{10,100}$/;


  if (!ree.test(adresse.value)) {
    adresse.classList.remove('is-valid');
    adresse.classList.add('is-invalid');

  } else {
    adresse.classList.remove('is-invalid');
    adresse.classList.add('is-valid');


  }
}


function check_pass() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {


    document.getElementById('submit').disabled = false;
    confirm_password.classList.remove('is-invalid');
    confirm_password.classList.add('is-valid');

  } else {
    document.getElementById('submit').disabled = true;
    confirm_password.classList.remove('is-valid');
    confirm_password.classList.add('is-invalid');
  }
}


function validateCin() {
  const cin = document.getElementById('cin');
  const re = /^[0-9A-Z]{5,8}$/;

  if (!re.test(cin.value)) {
    cin.classList.remove('is-valid');
    cin.classList.add('is-invalid');

  } else {
    cin.classList.remove('is-invalid');
    cin.classList.add('is-valid');


  }
}


function validateTele() {

  const tel = document.getElementById('tel');
  const num = /^[ +0-9]{10,20}$/;

  if (!num.test(tel.value)) {

    tel.classList.remove('is-valid');
    tel.classList.add('is-invalid');


  } else {
    tel.classList.remove('is-invalid');
    tel.classList.add('is-valid');


  }


}


