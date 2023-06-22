document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
      console.log('click');
           document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
    })