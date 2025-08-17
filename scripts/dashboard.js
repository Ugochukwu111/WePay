

function updateUserDetailsHtml(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  const fullNameHTML = document.querySelector('.full-name');

  fullNameHTML.textContent = userData.fullName  || 'John Doe' ;

}
updateUserDetailsHtml();


function confirmAirtimePurchaseHTML(network , phoneNumber , amount) {
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

function enterPinHtml(){
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