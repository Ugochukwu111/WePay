  import { popUpContainer } from './utils/reUseableFunctions.js';
  import { generateNotLoggedInHTML } from './utils/htmlComponents.js';
 

  const popUpContainerEl = document.querySelector('.notification-container');

(() => {
  const user = JSON.parse(localStorage.getItem('userData'));
  if (!user) {
    popUpContainer(popUpContainerEl, 'show'); // uses outer variable
    popUpContainerEl.innerHTML = generateNotLoggedInHTML();
    return false;
  }
  return true;
})();
  
  
  
  
  
  /**============ SIDE BAR SCRIPTS ================*/
const sideBar = document.getElementById('sidebar');
const sideBarBtn = document.getElementById('sidebar-btn');
sideBarBtn.addEventListener('click', ()=>{
 let isSidebarClosed = sideBar.getAttribute('aria-label');
    if (isSidebarClosed == 'sidebar closed'){
          sideBar.classList.add('show');
          isSidebarClosed = sideBar.setAttribute('aria-label', 'sidebar open');
    }else if(isSidebarClosed == 'sidebar open'){
        sideBar.classList.remove('show');
          isSidebarClosed = sideBar.setAttribute('aria-label', 'sidebar closed');
    }
});


// observer api
// scripts/index.js
const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // animate in
      obs.unobserve(entry.target);           // stop observing once visible
    }
  });
}, { threshold: 0.5 }); // trigger when 10% visible

features.forEach(f => observer.observe(f));



const introElements = document.querySelectorAll('.intro-section > div > *');

const introObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // trigger CSS animation
      observer.unobserve(entry.target);       // animate only once
    }
  });
}, { threshold: 0.1 });

// Observe each element in the intro section
introElements.forEach(el => introObserver.observe(el));