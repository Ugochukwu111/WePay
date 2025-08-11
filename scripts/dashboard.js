

function updateUserDetailsHtml(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  const fullNameHTML = document.querySelector('.full-name');

  fullNameHTML.textContent = userData.fullName  || 'John Doe'

}

updateUserDetailsHtml();


