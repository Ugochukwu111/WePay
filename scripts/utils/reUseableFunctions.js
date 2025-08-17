export function popUpContainer(containerElement, open) {
  if (containerElement) {
    if (open === 'show') {
      containerElement.classList.remove('hide');
      containerElement.classList.add('show');
    } else if (open === 'hide') {
      containerElement.classList.remove('show');
      containerElement.classList.add('hide');
    } else {
      console.error('Invalid action. Use "show" or "hide".');
    }
  } else {
    console.error(`Container not found: ${containerElement}`);
  }
}

// shows and hide inputed password
export function toggleViewPassword(passwordInputID){
   const passwordInput = document.getElementById(`${passwordInputID}`);
   if (passwordInput){
        if (passwordInput.type == "password"){
          passwordInput.type = "text";
        }else if (passwordInput.type == "text"){
          passwordInput.type = "password";
        }
   }
}