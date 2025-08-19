import {toggleViewPassword} from './utils/reUseableFunctions.js';


// show and his password script
const seePasswordBtn = document.querySelector('.view-password-btn');
seePasswordBtn.addEventListener('click', ()=>{
  toggleViewPassword('password');
});




const loginForm = document.querySelector('form');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

const emailErrorEl = document.querySelector('.signin-email-error');
const passwordErrorEl = document.querySelector('.signin-password-error');

const loginBtn = loginForm.querySelector('button.signup-btn');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  emailErrorEl.textContent = '';
  emailErrorEl.classList.remove('show');
  passwordErrorEl.textContent = '';
  passwordErrorEl.classList.remove('show');

  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  let errors = [];

  if (!password) {
    errors.push('Password is required');
    passwordErrorEl.textContent = 'Password is required';
    passwordErrorEl.classList.add('show');
  }

  if (errors.length > 0) return;

  const originalText = loginBtn.innerHTML;
  loginBtn.disabled = true;
  loginBtn.textContent = 'Logging In...';
  loginBtn.style.opacity = '0.5';

  try {
    const res = await fetch('https://we-pay.onrender.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP error: ${res.status}`);
    }

    const data = await res.json();
    console.log('✅ User logged in:', data);
    console.log(data.user)
      localStorage.setItem('userData', JSON.stringify( data.data.user));

    const userData = JSON.parse(localStorage.getItem('userData')) ;

    console.log(userData)
  
    window.location.href = 'index.html';

    

  } catch (err) {
    const message = err.message || 'Login failed. Please try again.';

    if (message.toLowerCase().includes('email')) {
      emailErrorEl.textContent = message;
      emailErrorEl.classList.add('show');
    } else if (message.toLowerCase().includes('password')) {
      passwordErrorEl.textContent = message;
      passwordErrorEl.classList.add('show');
    } else {
      alert(message);
    }
  } finally {
    loginBtn.disabled = false;
    loginBtn.innerHTML = originalText;
    loginBtn.style.opacity = '1';
  }
});

document.getElementById('google-sign-up-btn').addEventListener('click', () => {
  window.location.href = 'https://we-pay.onrender.com/v1/auth/google';
});


//wepay123