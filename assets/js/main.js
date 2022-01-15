/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/menu-bar.js":
/*!************************!*\
  !*** ./js/menu-bar.js ***!
  \************************/
/***/ (() => {

(function () {
  var footerShow = document.getElementById('footerShow');
  var footerClose = document.getElementById('footerClose');
  var footer = document.getElementById('footer-content'); // let menuBar = document.querySelector(".menu-bar--mobile");

  var body = document.getElementsByTagName("html")[0]; //mostrar panel de informacion footer 

  footerShow.addEventListener("click", function (event) {
    event.preventDefault();
    footer.classList.add('active');
    body.style.overflow = "hidden";
  }); //ocultar panel de informacion footer

  footerClose.addEventListener("click", function () {
    footer.classList.remove('active');
    body.style.overflow = "auto";
  });
})();

/***/ }),

/***/ "./js/super-menu.js":
/*!**************************!*\
  !*** ./js/super-menu.js ***!
  \**************************/
/***/ (() => {

(function () {
  var btnMenuToggle = document.getElementById('btn-nav__toggle'),
      btnCerrarMenu = document.getElementById('btn-nav__close'),
      grid = document.getElementById('grid'),
      contenedorSubCategorias = document.getElementById('subcategory-container'); //version desktop 

  if (!tfo_is_mobile()) {
    //cuando se hace click sobre un elemento de la bara de menu
    document.querySelectorAll('.menu-bar--desktop .menuBar-list__items .icon').forEach(function (items) {
      items.addEventListener('click', function (e) {
        //show grid
        grid.classList.add('active'); //show list items especific

        document.querySelectorAll('.grid .supermenu-item__list').forEach(function (itemList) {
          itemList.classList.remove('active');

          if (itemList.dataset.categoria == items.dataset.categoria) {
            itemList.classList.add('active');
          }
        }); //show banner specific 

        document.querySelectorAll('.grid-container .grid .subcategory-container .supermenu-banner').forEach(function (bannerMenu) {
          bannerMenu.classList.remove('active');

          if (bannerMenu.dataset.categoria == items.dataset.categoria) {
            bannerMenu.classList.add('active');
          }
        }); //hidden subcategories specific

        document.querySelectorAll('.grid-container .grid .subcategory-content').forEach(function (subcategoria) {
          subcategoria.classList.remove('active');
        });
      });
    }); //cuando el puntero del mouse salga del grid

    grid.addEventListener('mouseleave', function () {
      document.querySelectorAll('.grid-container .active').forEach(function (elemento) {
        elemento.classList.remove('active');
      });
    }); // cuando el puntero salga de la bara de menu y entre en el header

    document.getElementById('header').addEventListener('mouseover', function (e) {
      document.querySelectorAll('.grid-container .active').forEach(function (elemento) {
        elemento.classList.remove('active');
      });
    }); //show subcategory content cursor items

    document.querySelectorAll('.grid-container .grid .category-container .supermenu-item__list .list-item__category').forEach(function (elemento) {
      elemento.addEventListener('mouseenter', function (e) {
        //show subcategory content specific
        document.querySelectorAll('.grid-container .grid .subcategory-content').forEach(function (subcategoria) {
          subcategoria.classList.remove('active');

          if (subcategoria.dataset.categoria == elemento.dataset.categoria) {
            document.querySelectorAll('.grid-container .grid .subcategory-container .supermenu-banner').forEach(function (bannerMenu) {
              bannerMenu.classList.remove('active');
            });
            subcategoria.classList.add('active');
          }
        });
      });
    });
  } //-------------------------------- version mobile ---------------------//


  if (tfo_is_mobile()) {
    // Click en boton menu (Para version movil).
    btnMenuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      grid.classList.add('active');
      document.querySelector(".grid-container__overlay").classList.add('active');
      btnCerrarMenu.classList.add('active');
      document.querySelector('body').style.overflow = 'hidden';
    }); //click en los h3 principales

    document.querySelectorAll('.grid .supermenu-item__mobile').forEach(function (elemento) {
      elemento.addEventListener('click', function (e) {
        //show list container 
        document.querySelectorAll('.grid .supermenu-item__list').forEach(function (list) {
          // list.classList.remove('active');
          if (list.dataset.categoria == elemento.dataset.categoria) {
            list.classList.toggle('active');
          }
        }); //animation icon transform

        document.querySelectorAll('.grid .supermenu-item__mobile .icon-plus').forEach(function (icono) {
          if (icono.dataset.categoria == elemento.dataset.categoria) {
            icono.classList.toggle('active');
          }
        }); //animation padding items

        document.querySelectorAll('.grid .supermenu-item__list .list-item__category').forEach(function (link) {
          if (link.dataset.items == elemento.dataset.categoria) {
            link.classList.toggle('active');
          }
        });
      });
    }); // Boton de regresar en el menu de categorias

    document.querySelector('#grid .category-container .btn-back').addEventListener('click', function () {
      document.querySelectorAll('.grid-container .active').forEach(function (elemento) {
        elemento.classList.remove('active');
        document.querySelector(".grid-container__overlay").classList.remove('active');
      });
      document.querySelector('body').style.overflow = 'visible';
    }); //click en los enlaces de las categorias en los link

    document.querySelectorAll('.grid-container .category-container .list-item__category').forEach(function (elemento) {
      elemento.addEventListener('click', function (e) {
        document.querySelectorAll('.grid-container .subcategory-content').forEach(function (categoria) {
          categoria.classList.remove('active');

          if (categoria.dataset.categoria == elemento.dataset.categoria) {
            contenedorSubCategorias.classList.add('active');
            categoria.classList.add('active');
          }
        });
      });
    }); // Boton de regresar en el menu de subcategorias

    document.querySelectorAll('#grid .subcategory-container .btn-regresar').forEach(function (boton) {
      boton.addEventListener('click', function (e) {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('active');
      });
    }); //boton cerrar menu

    btnCerrarMenu.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.grid-container .active').forEach(function (elemento) {
        elemento.classList.remove('active');
      });
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector(".grid-container__overlay").classList.remove('active');
    }); // cerrar tocando fuera del grid

    document.querySelector(".grid-container__overlay").addEventListener('click', function (e) {
      if (e.target === document.querySelector(".grid-container__overlay")) {
        document.querySelectorAll('.grid-container__overlay .active').forEach(function (elemento) {
          elemento.classList.remove('active');
          document.querySelector(".grid-container__overlay").classList.remove('active');
          document.querySelector('body').style.overflow = 'visible';
        });
      }
    }); //responsive admin bar wordpress

    if (document.body.classList.contains('admin-bar')) {
      grid.style.top = '46px';
    }
  }
})();

/***/ }),

/***/ "./js/tfo-notification-push.js":
/*!*************************************!*\
  !*** ./js/tfo-notification-push.js ***!
  \*************************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var notificationIcon, notificationIconContent, notificationContainer, notificationClose, notificationList, homeURL, addAttribute, getData, loader, data;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          notificationIcon = document.querySelector('#notification-icon'), notificationIconContent = document.getElementById('notification-icon__content'), notificationContainer = document.getElementById('notification-container'), notificationClose = document.getElementById('notification-close'), notificationList = notificationContainer.querySelector('.notification-list'); //link base root home url

          homeURL = document.getElementById('home-url').href;

          if (!tfo_is_mobile()) {
            //si no es mobile
            //function iterar object
            addAttribute = function addAttribute(element, attributes) {
              for (var attribute in attributes) {
                element.setAttribute(attribute, attributes[attribute]);
              }
            };

            //function get data ajax
            getData = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response, datos;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(ajax_notification_object.url, {
                          method: 'POST',
                          credentials: 'same-origin',
                          body: data
                        });

                      case 2:
                        response = _context.sent;
                        _context.next = 5;
                        return response.text();

                      case 5:
                        datos = _context.sent;
                        return _context.abrupt("return", datos);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function getData() {
                return _ref2.apply(this, arguments);
              };
            }();

            loader = document.createElement('img');
            addAttribute(loader, {
              src: homeURL + '/wp-content/plugins/tfo-notification-push/assets/image/loader.gif',
              width: 50,
              height: 50,
              "class": 'loader'
            }); //add parameters ajax

            data = new FormData();
            data.append('nonce', ajax_notification_object.nonce);
            data.append('action', ajax_notification_object.action);
            notificationIcon.addEventListener('click', /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var _datos, datos;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        notificationIcon.style.display = 'none';
                        notificationIconContent.append(loader);

                        if (!sessionStorage.getItem('notification-push')) {
                          _context2.next = 10;
                          break;
                        }

                        _datos = sessionStorage.getItem('notification-push');
                        notificationList.innerHTML = _datos;
                        notificationContainer.classList.add('active');
                        notificationIconContent.querySelector('.loader').remove();
                        notificationIcon.style.display = 'block';
                        return _context2.abrupt("return");

                      case 10:
                        _context2.next = 12;
                        return getData();

                      case 12:
                        datos = _context2.sent;
                        notificationList.innerHTML = datos;
                        notificationIconContent.querySelector('.loader').remove();
                        notificationContainer.classList.add('active');
                        notificationIcon.style.display = 'block';
                        window.sessionStorage.setItem('notification-push', datos);

                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());
            notificationClose.addEventListener('click', function (e) {
              notificationContainer.classList.remove('active');
            });
          }

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}))();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-bar.js */ "./js/menu-bar.js");
/* harmony import */ var _menu_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_bar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _super_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./super-menu.js */ "./js/super-menu.js");
/* harmony import */ var _super_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_super_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tfo_notification_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tfo-notification-push.js */ "./js/tfo-notification-push.js");
/* harmony import */ var _tfo_notification_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tfo_notification_push_js__WEBPACK_IMPORTED_MODULE_2__);
// JS.


 // import imageWilly from '../images/about-us/willy.jpg';
// fonts
// import '../fonts/fonts';
// images.
// import '../images/image.jpg';
// console.log(imageWilly);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E0Qix3QkFBQUEsZ0JBQWdCLENBQUMzQixLQUFqQixDQUF1QjBELE9BQXZCLEdBQWlDLE9BQWpDO0FBQ0FJLHdCQUFBQSxNQUFNLENBQUNILGNBQVAsQ0FBc0JJLE9BQXRCLENBQThCLG1CQUE5QixFQUFtRGYsS0FBbkQ7O0FBakJ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQWxCLFlBQUFBLGlCQUFpQixDQUFDbkMsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFVBQUNnQixDQUFELEVBQU87QUFDL0NrQixjQUFBQSxxQkFBcUIsQ0FBQy9CLFNBQXRCLENBQWdDSSxNQUFoQyxDQUF1QyxRQUF2QztBQUNILGFBRkQ7QUFHSDs7QUEzREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21lbnUtYmFyLmpzIiwid2VicGFjazovLy8uL2pzL3N1cGVyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGZvLW5vdGlmaWNhdGlvbi1wdXNoLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAgIGxldCBmb290ZXJTaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlclNob3cnKTtcclxuICAgIGxldCBmb290ZXJDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJDbG9zZScpO1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXItY29udGVudCcpO1xyXG4gICAgLy8gbGV0IG1lbnVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYmFyLS1tb2JpbGVcIik7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICBcclxuICAgIC8vbW9zdHJhciBwYW5lbCBkZSBpbmZvcm1hY2lvbiBmb290ZXIgXHJcbiAgICBmb290ZXJTaG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgfSk7XHJcbiAgICAvL29jdWx0YXIgcGFuZWwgZGUgaW5mb3JtYWNpb24gZm9vdGVyXHJcbiAgICBmb290ZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH0pO1xyXG59KSgpOyAiLCIoZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYnRuTWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmF2X190b2dnbGUnKSxcclxuXHRidG5DZXJyYXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1uYXZfX2Nsb3NlJyksXHJcblx0Z3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkJyksXHJcblx0Y29udGVuZWRvclN1YkNhdGVnb3JpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViY2F0ZWdvcnktY29udGFpbmVyJyk7XHJcblxyXG5cdC8vdmVyc2lvbiBkZXNrdG9wIFxyXG5cclxuXHRpZiAoICEgdGZvX2lzX21vYmlsZSgpICkge1xyXG5cdFx0Ly9jdWFuZG8gc2UgaGFjZSBjbGljayBzb2JyZSB1biBlbGVtZW50byBkZSBsYSBiYXJhIGRlIG1lbnVcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJhci0tZGVza3RvcCAubWVudUJhci1saXN0X19pdGVtcyAuaWNvbicpLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcblx0XHRcdGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHQvL3Nob3cgZ3JpZFxyXG5cdFx0XHRcdGdyaWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0Ly9zaG93IGxpc3QgaXRlbXMgZXNwZWNpZmljXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQgLnN1cGVybWVudS1pdGVtX19saXN0JykuZm9yRWFjaCgoaXRlbUxpc3QpID0+IHtcclxuXHRcdFx0XHRcdGl0ZW1MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0aWYoaXRlbUxpc3QuZGF0YXNldC5jYXRlZ29yaWEgPT0gaXRlbXMuZGF0YXNldC5jYXRlZ29yaWEpIHtcclxuXHRcdFx0XHRcdFx0aXRlbUxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly9zaG93IGJhbm5lciBzcGVjaWZpYyBcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jb250YWluZXIgLmdyaWQgLnN1YmNhdGVnb3J5LWNvbnRhaW5lciAuc3VwZXJtZW51LWJhbm5lcicpLmZvckVhY2goKGJhbm5lck1lbnUpID0+IHtcclxuXHRcdFx0XHRcdGJhbm5lck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRpZihiYW5uZXJNZW51LmRhdGFzZXQuY2F0ZWdvcmlhID09IGl0ZW1zLmRhdGFzZXQuY2F0ZWdvcmlhKSB7XHJcblx0XHRcdFx0XHRcdGJhbm5lck1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly9oaWRkZW4gc3ViY2F0ZWdvcmllcyBzcGVjaWZpY1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lciAuZ3JpZCAuc3ViY2F0ZWdvcnktY29udGVudCcpLmZvckVhY2goKHN1YmNhdGVnb3JpYSkgPT4ge1xyXG5cdFx0XHRcdFx0c3ViY2F0ZWdvcmlhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9jdWFuZG8gZWwgcHVudGVybyBkZWwgbW91c2Ugc2FsZ2EgZGVsIGdyaWRcclxuXHRcdGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyIC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50bykgPT4ge1xyXG5cdFx0XHRcdGVsZW1lbnRvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gY3VhbmRvIGVsIHB1bnRlcm8gc2FsZ2EgZGUgbGEgYmFyYSBkZSBtZW51IHkgZW50cmUgZW4gZWwgaGVhZGVyXHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyIC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50bykgPT4ge1xyXG5cdFx0XHRcdGVsZW1lbnRvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9zaG93IHN1YmNhdGVnb3J5IGNvbnRlbnQgY3Vyc29yIGl0ZW1zXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jb250YWluZXIgLmdyaWQgLmNhdGVnb3J5LWNvbnRhaW5lciAuc3VwZXJtZW51LWl0ZW1fX2xpc3QgLmxpc3QtaXRlbV9fY2F0ZWdvcnknKS5mb3JFYWNoKChlbGVtZW50bykgPT4ge1xyXG5cdFx0XHRlbGVtZW50by5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcclxuXHRcdFx0XHQvL3Nob3cgc3ViY2F0ZWdvcnkgY29udGVudCBzcGVjaWZpY1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lciAuZ3JpZCAuc3ViY2F0ZWdvcnktY29udGVudCcpLmZvckVhY2goKHN1YmNhdGVnb3JpYSkgPT4ge1xyXG5cdFx0XHRcdFx0c3ViY2F0ZWdvcmlhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0aWYoc3ViY2F0ZWdvcmlhLmRhdGFzZXQuY2F0ZWdvcmlhID09IGVsZW1lbnRvLmRhdGFzZXQuY2F0ZWdvcmlhKSB7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lciAuZ3JpZCAuc3ViY2F0ZWdvcnktY29udGFpbmVyIC5zdXBlcm1lbnUtYmFubmVyJykuZm9yRWFjaCgoYmFubmVyTWVudSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGJhbm5lck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRzdWJjYXRlZ29yaWEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZXJzaW9uIG1vYmlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHRpZiAodGZvX2lzX21vYmlsZSgpKSB7XHJcblx0XHQvLyBDbGljayBlbiBib3RvbiBtZW51IChQYXJhIHZlcnNpb24gbW92aWwpLlxyXG5cdFx0YnRuTWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Z3JpZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lcl9fb3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0YnRuQ2VycmFyTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHR9KTtcclxuXHRcdC8vY2xpY2sgZW4gbG9zIGgzIHByaW5jaXBhbGVzXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCAuc3VwZXJtZW51LWl0ZW1fX21vYmlsZScpLmZvckVhY2goKGVsZW1lbnRvKSA9PiB7XHJcblx0XHRcdGVsZW1lbnRvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHQvL3Nob3cgbGlzdCBjb250YWluZXIgXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQgLnN1cGVybWVudS1pdGVtX19saXN0JykuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdGlmIChsaXN0LmRhdGFzZXQuY2F0ZWdvcmlhID09IGVsZW1lbnRvLmRhdGFzZXQuY2F0ZWdvcmlhKSB7XHJcblx0XHRcdFx0XHRcdGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7IFxyXG5cdFx0XHRcdC8vYW5pbWF0aW9uIGljb24gdHJhbnNmb3JtXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQgLnN1cGVybWVudS1pdGVtX19tb2JpbGUgLmljb24tcGx1cycpLmZvckVhY2goKGljb25vKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaWNvbm8uZGF0YXNldC5jYXRlZ29yaWEgPT0gZWxlbWVudG8uZGF0YXNldC5jYXRlZ29yaWEpIHtcclxuXHRcdFx0XHRcdFx0aWNvbm8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly9hbmltYXRpb24gcGFkZGluZyBpdGVtc1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkIC5zdXBlcm1lbnUtaXRlbV9fbGlzdCAubGlzdC1pdGVtX19jYXRlZ29yeScpLmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdFx0XHRcdGlmKGxpbmsuZGF0YXNldC5pdGVtcyA9PSBlbGVtZW50by5kYXRhc2V0LmNhdGVnb3JpYSkge1xyXG5cdFx0XHRcdFx0XHRsaW5rLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pOyBcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdC8vIEJvdG9uIGRlIHJlZ3Jlc2FyIGVuIGVsIG1lbnUgZGUgY2F0ZWdvcmlhc1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyaWQgLmNhdGVnb3J5LWNvbnRhaW5lciAuYnRuLWJhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyIC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50bykgPT4ge1xyXG5cdFx0XHRcdGVsZW1lbnRvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJfX292ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcblx0XHR9KTtcclxuXHRcdC8vY2xpY2sgZW4gbG9zIGVubGFjZXMgZGUgbGFzIGNhdGVnb3JpYXMgZW4gbG9zIGxpbmtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lciAuY2F0ZWdvcnktY29udGFpbmVyIC5saXN0LWl0ZW1fX2NhdGVnb3J5JykuZm9yRWFjaCgoZWxlbWVudG8pID0+IHtcclxuXHRcdFx0ZWxlbWVudG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lciAuc3ViY2F0ZWdvcnktY29udGVudCcpLmZvckVhY2goKGNhdGVnb3JpYSkgPT4ge1xyXG5cdFx0XHRcdFx0Y2F0ZWdvcmlhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0aWYgKGNhdGVnb3JpYS5kYXRhc2V0LmNhdGVnb3JpYSA9PSBlbGVtZW50by5kYXRhc2V0LmNhdGVnb3JpYSkge1xyXG5cdFx0XHRcdFx0XHRjb250ZW5lZG9yU3ViQ2F0ZWdvcmlhcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCBcdGNhdGVnb3JpYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdC8vIEJvdG9uIGRlIHJlZ3Jlc2FyIGVuIGVsIG1lbnUgZGUgc3ViY2F0ZWdvcmlhc1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyaWQgLnN1YmNhdGVnb3J5LWNvbnRhaW5lciAuYnRuLXJlZ3Jlc2FyJykuZm9yRWFjaCgoYm90b24pID0+IHtcclxuXHRcdFx0Ym90b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRjb250ZW5lZG9yU3ViQ2F0ZWdvcmlhcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdC8vYm90b24gY2VycmFyIG1lbnVcclxuXHRcdGJ0bkNlcnJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyIC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50bykgPT4ge1xyXG5cdFx0XHRcdGVsZW1lbnRvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtY29udGFpbmVyX19vdmVybGF5XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBjZXJyYXIgdG9jYW5kbyBmdWVyYSBkZWwgZ3JpZFxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lcl9fb3ZlcmxheVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuXHRcdFx0aWYoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJfX292ZXJsYXlcIikpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jb250YWluZXJfX292ZXJsYXkgLmFjdGl2ZScpLmZvckVhY2goKGVsZW1lbnRvKSA9PiB7XHJcblx0XHRcdFx0XHRlbGVtZW50by5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJfX292ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9yZXNwb25zaXZlIGFkbWluIGJhciB3b3JkcHJlc3NcclxuXHRcdGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnYWRtaW4tYmFyJykpIHtcclxuXHRcdFx0Z3JpZC5zdHlsZS50b3AgPSAnNDZweCc7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn0pKCk7IiwiKCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9uLWljb24nKSxcclxuICAgICAgICBub3RpZmljYXRpb25JY29uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24taWNvbl9fY29udGVudCcpLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tY29udGFpbmVyJyksXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLWNsb3NlJyksXHJcbiAgICAgICAgbm90aWZpY2F0aW9uTGlzdCA9IG5vdGlmaWNhdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uLWxpc3QnKTtcclxuICAgIC8vbGluayBiYXNlIHJvb3QgaG9tZSB1cmxcclxuICAgIGNvbnN0IGhvbWVVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS11cmwnKS5ocmVmO1xyXG5cclxuICAgIGlmICggISB0Zm9faXNfbW9iaWxlKCkgKSB7IC8vc2kgbm8gZXMgbW9iaWxlXHJcbiAgICAgICAvL2Z1bmN0aW9uIGl0ZXJhciBvYmplY3RcclxuICAgICAgICBmdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGFkZEF0dHJpYnV0ZShsb2FkZXIsIHtcclxuICAgICAgICAgICAgc3JjOiBob21lVVJMICsgJy93cC1jb250ZW50L3BsdWdpbnMvdGZvLW5vdGlmaWNhdGlvbi1wdXNoL2Fzc2V0cy9pbWFnZS9sb2FkZXIuZ2lmJyxcclxuICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICBjbGFzczogJ2xvYWRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2FkZCBwYXJhbWV0ZXJzIGFqYXhcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCAnbm9uY2UnLCAgYWpheF9ub3RpZmljYXRpb25fb2JqZWN0Lm5vbmNlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCggJ2FjdGlvbicsIGFqYXhfbm90aWZpY2F0aW9uX29iamVjdC5hY3Rpb24gKTtcclxuICAgICAgICAvL2Z1bmN0aW9uIGdldCBkYXRhIGFqYXhcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFqYXhfbm90aWZpY2F0aW9uX29iamVjdC51cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0b3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uSWNvbkNvbnRlbnQuYXBwZW5kKGxvYWRlcik7XHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RpZmljYXRpb24tcHVzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRvcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGlmaWNhdGlvbi1wdXNoJyk7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25MaXN0LmlubmVySFRNTCA9IGRhdG9zO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uSWNvbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRvcyA9IGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uTGlzdC5pbm5lckhUTUwgPSBkYXRvcztcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uSWNvbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdub3RpZmljYXRpb24tcHVzaCcsIGRhdG9zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBub3RpZmljYXRpb25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEpTLlxyXG5pbXBvcnQgJy4vbWVudS1iYXIuanMnO1xyXG5pbXBvcnQgJy4vc3VwZXItbWVudS5qcyc7XHJcbmltcG9ydCAnLi90Zm8tbm90aWZpY2F0aW9uLXB1c2guanMnO1xyXG5cclxuLy8gaW1wb3J0IGltYWdlV2lsbHkgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXVzL3dpbGx5LmpwZyc7XHJcblxyXG4vLyBmb250c1xyXG4vLyBpbXBvcnQgJy4uL2ZvbnRzL2ZvbnRzJztcclxuXHJcbi8vIGltYWdlcy5cclxuLy8gaW1wb3J0ICcuLi9pbWFnZXMvaW1hZ2UuanBnJztcclxuXHJcbi8vIGNvbnNvbGUubG9nKGltYWdlV2lsbHkpO1xyXG4iXSwibmFtZXMiOlsiZm9vdGVyU2hvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb290ZXJDbG9zZSIsImZvb3RlciIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImJ0bk1lbnVUb2dnbGUiLCJidG5DZXJyYXJNZW51IiwiZ3JpZCIsImNvbnRlbmVkb3JTdWJDYXRlZ29yaWFzIiwidGZvX2lzX21vYmlsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbXMiLCJlIiwiaXRlbUxpc3QiLCJkYXRhc2V0IiwiY2F0ZWdvcmlhIiwiYmFubmVyTWVudSIsInN1YmNhdGVnb3JpYSIsImVsZW1lbnRvIiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJ0b2dnbGUiLCJpY29ubyIsImxpbmsiLCJib3RvbiIsInRhcmdldCIsImNvbnRhaW5zIiwidG9wIiwibm90aWZpY2F0aW9uSWNvbiIsIm5vdGlmaWNhdGlvbkljb25Db250ZW50Iiwibm90aWZpY2F0aW9uQ29udGFpbmVyIiwibm90aWZpY2F0aW9uQ2xvc2UiLCJub3RpZmljYXRpb25MaXN0IiwiaG9tZVVSTCIsImhyZWYiLCJhZGRBdHRyaWJ1dGUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImdldERhdGEiLCJmZXRjaCIsImFqYXhfbm90aWZpY2F0aW9uX29iamVjdCIsInVybCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiZGF0YSIsInJlc3BvbnNlIiwidGV4dCIsImRhdG9zIiwibG9hZGVyIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJub25jZSIsImFjdGlvbiIsImRpc3BsYXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==