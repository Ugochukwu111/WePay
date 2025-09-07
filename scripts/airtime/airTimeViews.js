export function generateAirtimePurchaseBundle(plan, validity, price){
  let html;
   html = `    <button>
                <span class="plan">${plan}</span>
                <span class="validity">validity:<span>${validity}</span></span>
                <span class="price">${price}</span>
              </button>
              `;
    
   return html;
}