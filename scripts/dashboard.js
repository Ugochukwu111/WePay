

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
      let hash = window.location.hash || "#home"; // default to home
      showSection(hash);
    });

    // On hash change (navigation / back / forward)
    window.addEventListener("hashchange", () => {
      let hash = window.location.hash || "#home";
      showSection(hash);
    });




