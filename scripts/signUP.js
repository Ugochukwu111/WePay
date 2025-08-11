const passwordEl = document.getElementById("password");
const signUpPasswordErrors = document.querySelector('.sign-up-password-error-container');
console.log(signUpPasswordErrors)
const hyphenIcon = '—';
const goodIcon = '✓';
const warningIcon = `<svg class="fill-red" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#f44336"><path d="M117.23-184 480-784l362.77 600H117.23ZM175-216h610L480-724 175-216Zm304.79-63.38 q8.67 0 14.75-5.87t6.08-14.54q0-8.67-5.87-14.75t-14.54-6.08q-8.67 0-14.75 5.87t-6.08 14.54q0 8.67 5.87 14.75t14.54 6.08ZM464-368.62h32v-192h-32v192Z"/></svg>`;

passwordEl.addEventListener('input', () => {
  signUpPasswordErrors.classList.add('show');
  const value = passwordEl.value.trim();
  const allerrorRules = signUpPasswordErrors.querySelectorAll('span');
  let passedCount = 0;

  allerrorRules.forEach((rule) => {
    const text = rule.textContent.toLowerCase();
    let passed = false;
    let icon = warningIcon;

    // Rule 1: uppercase & lowercase
    if (text.includes("upper & lowercase")) {
      passed = /[a-z]/.test(value) && /[A-Z]/.test(value);
      icon = passed ? goodIcon : warningIcon;
      rule.innerHTML = `${icon} &nbsp; 1 upper & lowercase`;
    }
    // Rule 2: number
    else if (text.includes("number")) {
      passed = /\d/.test(value);
      icon = passed ? goodIcon : warningIcon;
      rule.innerHTML = `${icon} &nbsp; 1 number (0 - 9)`;
    }
    // Rule 3: symbol
    else if (text.includes("symbol")) {
      passed = /[!@#$%]/.test(value);
      icon = passed ? goodIcon : warningIcon;
      rule.innerHTML = `${icon} &nbsp; 1 symbol (!@#$%)`;
    }
    // Rule 4: length
    else if (text.includes("at least")) {
      passed = value.length >= 8;
      icon = passed ? goodIcon : warningIcon;
      rule.innerHTML = `${icon} &nbsp; At least 8 characters`;
    }

    // ✅ Add this for every rule after icon update:
if (passed) {
  rule.classList.add('passed');
} else {
  rule.classList.remove('passed');
}

    if (passed) passedCount++;
  });

  // Shrink if all rules pass
  if (passedCount === allerrorRules.length) {
    signUpPasswordErrors.classList.add('shrink');
  } else {
    signUpPasswordErrors.classList.remove('shrink');
  }
});













const signUpform = document.getElementById('signUp-form');

signUpform.addEventListener('submit', async (e) => {
 let Errors = [];
e.preventDefault();
 const password = document.getElementById("password").value.trim();
 const fullName = document.getElementById("fullname").value.trim();
 const email = document.getElementById("email").value.trim();
 const phoneNumber = document.getElementById("phone").value.trim();

 let passwordErrorEl = document.querySelector('.password-error');
 let fullNameErrorEl = document.querySelector('.fullName-error');
 let phoneNumberErrorEl = document.querySelector('.phone-error');
 const signUpBtn = document.getElementById('signUp-btn');


  passwordErrorEl.classList.remove('show');
  fullNameErrorEl.classList.remove('show');
  phoneNumberErrorEl.classList.remove('show');

 if(fullName.length <= 8){
    Errors.push('full name errror');
    fullNameErrorEl.classList.add('show');
 }
 if (password.length < 8){
    Errors.push('password errror');
    passwordErrorEl.classList.add('show');
 }
   const allerrorRules = document.querySelectorAll('.sign-up-password-error-container span');
  let passedCount = 0;
  allerrorRules.forEach(rule => {
    if (rule.classList.contains('passed')) passedCount++;
  });
  if (passedCount !== allerrorRules.length) {
    Errors.push('password error');
    passwordErrorEl.classList.add('show');
  }

  const phonePattern = /^\+?\d{8,15}$/;
  if (!phonePattern.test(phoneNumber)) {
    Errors.push('Phone error');
    phoneNumberErrorEl.classList.add('show');
    phoneNumberErrorEl.textContent = 'Invalid phone number format';
  }
    if (Errors.length > 0) {
    return;
  }

  const originalText =  signUpBtn.innerHTML;
  signUpBtn.disabled = true;
  signUpBtn.textContent = 'Signing Up ...';
  signUpBtn.style.opacity = '.5';
  try {
    const res = await fetch('https://we-pay.onrender.com/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-TENANT-ID': '1'  },
      body: JSON.stringify({
        fullName,
        email,
        phone: phoneNumber,
        password
      })
    });

   if (!res.ok) {
    const errorData = await res.json().catch(() => null);
      console.log('Backend error:', errorData);
    throw new Error(errorData?.message || `HTTP error: ${res.status}`);
  }

    const data = await res.json();
        console.log(data.user)
    localStorage.setItem('userData', JSON.stringify( data.data.user));
    const userData = JSON.parse(localStorage.getItem('userData')) ;
   
   window.location.href = 'dashboard.html';

  } catch (err) {
     console.error('❌ Error submitting form:', err);

  const message = err.message || 'Something went wrong. Please try again.';

  // Clear previous backend error displays first (optional but recommended)
  phoneNumberErrorEl.classList.remove('show');
  phoneNumberErrorEl.textContent = '';
  const emailErrorEl = document.querySelector('.email-error');
  if (emailErrorEl) {
    emailErrorEl.classList.remove('show');
    emailErrorEl.textContent = '';
  }

  if (message.toLowerCase().includes('phone')) {
    phoneNumberErrorEl.classList.add('show');
    phoneNumberErrorEl.textContent = message;
  } else if (message.toLowerCase().includes('email')) {
    if (emailErrorEl) {
      emailErrorEl.classList.add('show');
      emailErrorEl.textContent = message;
    } else {
      alert(message);
    }
  } else {
    alert(message);
  }
  } finally{
    signUpBtn.disabled = false;
    signUpBtn.innerHTML = originalText;
    signUpBtn.style.opacity = '1';
  }

});


document.getElementById('google-sign-up-btn').addEventListener('click', () => {
  window.location.href = 'https://we-pay.onrender.com/v1/auth/google';
});





