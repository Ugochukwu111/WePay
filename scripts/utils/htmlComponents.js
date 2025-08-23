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

export function enterPinHtml(){
  const html = `
    <div class="enter-pin-container">
            
              <div class="d-flex justify-s-between">
                <h4>
                  Enter Your PIN
                </h4>
                <p>
                  svg
                </p>
              </div>

              <p class="FWB text-muted text-center">
                Please enter your 4-digit PIN to complete the transacion
              </p>

              <input type="text"  maxlength="7" inputmode="numeric" name="PIN" id="pin" placeholder=". . . .">

              <button class="w-100 bg-navy-blue">
                Confirm PIN
              </button>

            </div>
  `;
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