
import {generateAccountVerificationHTML,generateEnterPinHtml } from './utils/htmlComponents.js';

import { popUpContainer } from './utils/reUseableFunctions.js';
import { dataPlans } from './airtime/airtime.js';
import { generateAirtimePurchaseBundle } from './airtime/airTimeViews.js';


const popUpContainerEl = document.querySelector('.notification-container');

function updateUserDetailsHtml(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  const fullNameHTML = document.querySelector('.full-name');
  const firstName =  userData?.fullName?.split(" ", 1)[0] || 'John Doe';
  fullNameHTML.textContent = firstName || 'John Doe' ;
}
updateUserDetailsHtml();


                               //================== Simple routing ============= //
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("aside a");

    function showSection(hash) {
      sections.forEach(sec => {
        if ("#" + sec.id === hash) {
          sec.classList.add("active");  // show current section
        } else {
             sec.classList.remove("active");   // hide all others
        }
      });

        // Highlight active nav link
        navLinks.forEach(link => {
          if (link.getAttribute("href") === hash) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
    }

    // On first load
    window.addEventListener("DOMContentLoaded", () => {
      let hash = window.location.hash || "#buyData"; // default to home
      showSection(hash);
    });

    // On hash change (navigation / back / forward)
    window.addEventListener("hashchange", () => {
      let hash = window.location.hash || "#buyData";
      showSection(hash);
    });



    const intrabankTransferWrapper = document.querySelector('.bank-transfer-verify-account-wrapper');
    const intraTransferMoneyBtn = document.getElementById('intra-transfer-money-btn');
   
    intraTransferMoneyBtn?.addEventListener('click',()=>{
      intrabankTransferWrapper.innerHTML = generateAccountVerificationHTML();

      const confirmTranferBtn = document.getElementById('confirm-intra-trasfer');

      confirmTranferBtn?.addEventListener('click',()=>{
        popUpContainer(popUpContainerEl, 'show');
        popUpContainerEl.innerHTML = generateEnterPinHtml();
         setupPinInput();
      });

    });

function setupPinInput() {
  const pinInputs = document.querySelectorAll('.acc-PIN-input');
  const buttons = document.querySelectorAll('.acc-PIN-btn');
  const backspaceBtn = document.querySelector('.backspace');

  // Helper: move to next/previous input
  function focusInput(index) {
    if (index >= 0 && index < pinInputs.length) {
      pinInputs[index].focus();
    }
  }

  // Fill PIN inputs when number button clicked
  buttons.forEach((btn) => {
    if (!btn.classList.contains('backspace')) {
      btn.addEventListener('click', () => {
        for (let i = 0; i < pinInputs.length; i++) {
          if (!pinInputs[i].value) {
            pinInputs[i].value = btn.textContent.trim();
            focusInput(i + 1);
            break;
          }
        }
      });
    }
  });

  // Handle backspace button
  if (backspaceBtn) {
    backspaceBtn.addEventListener('click', () => {
      for (let i = pinInputs.length - 1; i >= 0; i--) {
        if (pinInputs[i].value) {
          pinInputs[i].value = '';
          focusInput(i);
          break;
        }
      }
    });
  }

  // Optional: allow manual typing (if you remove readonly later)
  pinInputs.forEach((input, idx) => {
    input.addEventListener('input', () => {
      if (input.value.length > 1) {
        input.value = input.value.slice(0, 1); // restrict to 1 char
      }
      if (input.value) {
        focusInput(idx + 1);
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value) {
        focusInput(idx - 1);
      }
    });
  });
}


// ================== Populate Data Plans scripts ============= //
const dataPlansContainer = document.querySelector('.data-plans-container');
function populateDataPlans(){
  let html = '';
  dataPlans.forEach(plan => {
    html += generateAirtimePurchaseBundle(plan.plan, plan.validity, plan.price);
  });
  dataPlansContainer.innerHTML = html;
}

populateDataPlans();


// ================== FIXED SAVINGS SCRIPTS ============= //
const fixedSavingsForm = document.getElementById('fixed-savings-form');
const fixedSavingsAmountInput = fixedSavingsForm?.querySelector('#fixed-savings-amount');

fixedSavingsAmountInput?.addEventListener('input', (e) => {
   let value = e.target.value;
   value = value.replace(/^₦\s?/, '');
    value = value.replace(/[^0-9]/g, '');
     e.target.value = value ? `₦${value}` : '₦';
});


function toggleAutoRenew(){
  let isAutoRenew = false;

    function autoRenewOnMaturityToggle(){
      const autoRenewToggleBtn = document.getElementById('auto-renew-btn');

        if(autoRenewToggleBtn){
            if (!isAutoRenew){
              autoRenewToggleBtn.style.transform = 'translateX(80%)';
              isAutoRenew = true;
               return isAutoRenew;
            }else{
              autoRenewToggleBtn.style.transform = 'translateX(-80%)';
              isAutoRenew = false;
              return isAutoRenew;
            }
        }
    }

return autoRenewOnMaturityToggle()
};