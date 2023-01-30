document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    // const menubutton = document.querySelector('.menu-button');
    // const menunav = document.querySelector('.toggle-nav');
    // menubutton.addEventListener('click', function () {
    //     if (menunav.getAttribute('data-navstate') === 'open') {
    //         // if true do this
    //         menunav.setAttribute('data-navstate', 'closed');
    //     } else {
    //         // else (if false) do this
    //         menunav.setAttribute('data-navstate', 'open');
    //     };
    // });

    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
    const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-list-state", "active");
      } else {
        entry.target.setAttribute("data-list-state", "inactive");
      }
    });
  });
  
  
  document.querySelectorAll(".featured-projects li").forEach((item) => {
    myobserver.observe(item);
  });

});
