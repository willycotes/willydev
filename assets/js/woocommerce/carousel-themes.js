/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./js/woocommerce/carousel-themes.js ***!
  \*******************************************/
(function () {
  var btn_next = document.getElementById("btn-tematicas__next"),
      btn_prev = document.getElementById('btn-tematicas__prev'),
      sliderTematicasContent = document.querySelector(".slider-tematicas-content");
  var alto_img = document.querySelector(".slide-tematicas__items").clientHeight; // const homeURL = document.getElementById('home-url').href;
  // const sliderList = document.getElementById('slider-tematicas-content');

  btn_prev.addEventListener("click", function () {
    sliderTematicasContent.scrollBy({
      top: 0,
      left: -alto_img * 4,
      behavior: "smooth"
    });
  });
  btn_next.addEventListener("click", function () {
    sliderTematicasContent.scrollBy({
      top: 0,
      left: alto_img * 4,
      behavior: "smooth"
    });
  }); //ajax
  // let data = new FormData();
  // data.append('nonce', 'prueba'  );
  // async function getData() {
  //     const response = await fetch(location.href + '?wc-ajax=carousel', {
  //         method: 'POST',
  //         credentials: 'same-origin',
  //         body: data
  //     });
  //     const datos = await response.text();
  //     return datos;
  // }
  // const datos = await getData();
  // sliderList.innerHTML = datos;
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd29vY29tbWVyY2UvY2Fyb3VzZWwtdGhlbWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsQ0FBRSxZQUFXO0FBQ1QsTUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWpCO0FBQUEsTUFDQUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBRFg7QUFBQSxNQUVBRSxzQkFBc0IsR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLDJCQUF2QixDQUZ6QjtBQUdBLE1BQU1DLFFBQVEsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLHlCQUF2QixFQUFrREUsWUFBbkUsQ0FKUyxDQUtUO0FBQ0E7O0FBRUFKLEVBQUFBLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUNyQ0osSUFBQUEsc0JBQXNCLENBQUNLLFFBQXZCLENBQWlDO0FBQUNDLE1BQUFBLEdBQUcsRUFBQyxDQUFMO0FBQVFDLE1BQUFBLElBQUksRUFBRSxDQUFDTCxRQUFELEdBQVUsQ0FBeEI7QUFBMkJNLE1BQUFBLFFBQVEsRUFBQztBQUFwQyxLQUFqQztBQUNILEdBRkQ7QUFHQVosRUFBQUEsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3JDSixJQUFBQSxzQkFBc0IsQ0FBQ0ssUUFBdkIsQ0FBZ0M7QUFBQ0MsTUFBQUEsR0FBRyxFQUFDLENBQUw7QUFBUUMsTUFBQUEsSUFBSSxFQUFFTCxRQUFRLEdBQUMsQ0FBdkI7QUFBMEJNLE1BQUFBLFFBQVEsRUFBQztBQUFuQyxLQUFoQztBQUNDLEdBRkwsRUFYUyxDQWNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUCxDQTlCRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvd29vY29tbWVyY2UvY2Fyb3VzZWwtdGhlbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgXHJcbiggZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBidG5fbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRlbWF0aWNhc19fbmV4dFwiKSxcclxuICAgIGJ0bl9wcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10ZW1hdGljYXNfX3ByZXYnKSxcclxuICAgIHNsaWRlclRlbWF0aWNhc0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci10ZW1hdGljYXMtY29udGVudFwiKTtcclxuICAgIGNvbnN0IGFsdG9faW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS10ZW1hdGljYXNfX2l0ZW1zXCIpLmNsaWVudEhlaWdodDtcclxuICAgIC8vIGNvbnN0IGhvbWVVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS11cmwnKS5ocmVmO1xyXG4gICAgLy8gY29uc3Qgc2xpZGVyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItdGVtYXRpY2FzLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgYnRuX3ByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzbGlkZXJUZW1hdGljYXNDb250ZW50LnNjcm9sbEJ5KCB7dG9wOjAsIGxlZnQ6IC1hbHRvX2ltZyo0LCBiZWhhdmlvcjpcInNtb290aFwifSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIGJ0bl9uZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVyVGVtYXRpY2FzQ29udGVudC5zY3JvbGxCeSh7dG9wOjAsIGxlZnQ6IGFsdG9faW1nKjQsIGJlaGF2aW9yOlwic21vb3RoXCJ9KTsgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2FqYXhcclxuICAgICAgICAvLyBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIC8vIGRhdGEuYXBwZW5kKCdub25jZScsICdwcnVlYmEnICApO1xyXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb24uaHJlZiArICc/d2MtYWpheD1jYXJvdXNlbCcsIHtcclxuICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgLy8gICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZGF0b3M7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IGRhdG9zID0gYXdhaXQgZ2V0RGF0YSgpO1xyXG5cclxuICAgICAgICAvLyBzbGlkZXJMaXN0LmlubmVySFRNTCA9IGRhdG9zO1xyXG59KSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJidG5fbmV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5fcHJldiIsInNsaWRlclRlbWF0aWNhc0NvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWx0b19pbWciLCJjbGllbnRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsQnkiLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9