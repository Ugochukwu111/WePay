export function signUpSuccessHTML(){
  const html = `
      <div class= "sign-up-success-container bg-white  notification-popup">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
       <p class="FWB">
        Your account has been created
       </p>
       <small class="font-sans text-muted">
         You can login with your registered email address
       </small>

       <a href="logIn.html" class="bg-blue-primary text-white FWB">
         Log In to Continue
       </a>
    </div>
  `;
  
  return html;
}

export function  generateNotLoggedInHTML() {
  const html = `
        <div class= "sign-up-success-container bg-white  notification-popup">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-off-icon lucide-circle-off"><path d="m2 2 20 20"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/><path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"/></svg>
       <p class="FWB">
        Your are not Logged in
       </p>
       <small class="font-sans text-muted">
         You can login with your registered email address
       </small>

       <a href="logIn.html" class="bg-blue-primary text-white FWB">
         Log In to Continue
       </a>
    </div>
  `;
  return html;
}

export function confirmAirtimePurchaseHTML(network , phoneNumber , amount) {
  const html = `
      <div>
            <h3>
              Confirm Airtime Purchase
            </h3>

            <div class="confirm-purchase-container d-flex flex-column">
              <p class="d-flex justify-s-between align-center">
                <span class="text-muted">Network</span>
                <span>${network}</span>
              </p>

              <p class="d-flex justify-s-between align-center confirm-phone-number-details">
                <span class="text-muted">Phone Number</span>
                <span>${phoneNumber}</span>
              </p>

              <p class="d-flex justify-s-between align-center">
                <span class="text-muted">
                Amount
                </span>
                <span>
                  ${amount}
                </span>
              </p>

            </div>

            <button class="bg-navy-blue">
              Confirm
            </button>
            <button>
              Cancel
            </button>
          </div>
  `;

  return html;
}

export function generateEnterPinHtml(){
  const html = `
    <div class=" custom-container enter-pin-container d-flex flex-column justify-center align-center">
      <h4 class="text-center">
        WePay
      </h4>
      <p class="text-center FWB">
       Enter Transaction PIN
      </p>
       <small class="text-center text-muted font-sans">
        Please enter your 4-digit PIN to confirm this payment 
       </small>

       <div class=" d-flex flex-column">
       <div class="d-flex account-pin-container">
          <input type="text"  inputmode="none" 
            readonly autocomplete="off" class="acc-PIN-input" maxlength="1" pattern="[0-9]*" placeholder="" autofocus>

          <input type="text"  inputmode="none" 
            readonly autocomplete="off" class="acc-PIN-input" maxlength="1" pattern="[0-9]*" placeholder="">
          <input type="text"  inputmode="none" 
            readonly autocomplete="off" class="acc-PIN-input" maxlength="1" pattern="[0-9]*" placeholder="">
          <input type="text"  inputmode="none" 
            readonly autocomplete="off" class="acc-PIN-input" maxlength="1" pattern="[0-9]*" placeholder="">
       </div>
         <small>
         </small>
       </div>

       <div class="enter-acc-PIN-btn-container">
       <button type="button" class="acc-PIN-btn">1</button>
       <button type="button" class="acc-PIN-btn">2</button>
       <button type="button" class="acc-PIN-btn">3</button>
       <button type="button" class="acc-PIN-btn">4</button>
       <button type="button" class="acc-PIN-btn">5</button>
       <button type="button" class="acc-PIN-btn">6</button>
       <button type="button" class="acc-PIN-btn">7</button>
       <button type="button" class="acc-PIN-btn">8</button>
       <button type="button" class="acc-PIN-btn">9</button>
       <button type="button" class = "backspace">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-delete-icon lucide-delete"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/></svg>
       </button>
       <button type="button">0</button>
       <button type="button">1</button>
       </div>

       <div class="w-100">
        <button type="button" class="w-100">
          Confirm
        </button>
         <a href="" class="text-muted d-flex flex-center text-icon-container w-100 text-center">
          forgot PIN?
         </a>
       <div>
    </div>
  `;

  return html;
}

export function transactionSuccessfulHTML(){
  const html = `
    <div>
            <div>
              
              <h4>Transaction Successful!</h4>
              <p>
                Your transaction has been completed successfully.
                A confirmation receipt has been sent to your email.
              </p>
            </div>

            <button class="
            bg-navy-blue">
              Go to Home
            </button>
          </div>`;

          return html;
}

export function generateAccountVerificationHTML(){
  const html = `<div id="verify-account-details-container" class="custom-container flex-center flex-column">
   <h4 class ="text-end">
   Verification & Summary
   </h4>
   <ul class="w-100">
    <li class="d-flex justify-s-between align-center">
      <span>Status</span>
      <span class="text-icon-container bg-blue-light BR-small pd-normal">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
       Verified
      </span>
    </li>
    <li class="d-flex justify-s-between align-center">
      <span>Recipient</span>
      <span>
       John Doe
      </span>
    </li>
    <li class="d-flex justify-s-between align-center">
      <span>Account</span>
      <span>
      1234567890
      </span>
    </li>
    <li class="d-flex justify-s-between align-center">
      <span>Bank</span>
      <span>
       BankName
      </span>
    </li>
    <li class="d-flex justify-s-between align-center">
      <span>Amount</span>
      <span>
       $0.00
      </span>
    </li>
    <li class="d-flex justify-s-between align-center">
      <span>Narration</span>
      <span>
       Payment for services
      </span>
    </li>
   </ul>

   <button id="confirm-intra-trasfer" class="bg-green text-white M w-100 ">
    Confirm & tranfer
   </button>
  </div>`;

  return html;
}