(function() {
    let footerShow = document.getElementById('footerShow');
    let footerClose = document.getElementById('footerClose');
    let footer = document.getElementById('footer-content');
    // let menuBar = document.querySelector(".menu-bar--mobile");
    let body = document.getElementsByTagName("html")[0];
     
    //mostrar panel de informacion footer 
    footerShow.addEventListener("click", function(event) {
        event.preventDefault();
        footer.classList.add('active');
        body.style.overflow = "hidden";
    });
    //ocultar panel de informacion footer
    footerClose.addEventListener("click", function() {
        footer.classList.remove('active');
        body.style.overflow = "auto";
    });
})(); 