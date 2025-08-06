                            /**============ SIDE BAR SCRIPTS ================*/
const sideBar = document.getElementById('sidebar');
const sideBarBtn = document.getElementById('sidebar-btn');
console.log(sideBar, sideBarBtn)
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