/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/woocommerce/cluster-categories.js":
/*!**********************************************!*\
  !*** ./js/woocommerce/cluster-categories.js ***!
  \**********************************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var container, homeURL, loader, templateString, renderHTML, more, cacheExist, _cacheExist;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _cacheExist = function _cacheExist3() {
            _cacheExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var datosCache;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!sessionStorage.getItem('categories')) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 3;
                      return sessionStorage.getItem('categories');

                    case 3:
                      datosCache = _context2.sent;
                      renderHTML(JSON.parse(datosCache), container);
                      more(JSON.parse(datosCache));
                      _context2.next = 9;
                      break;

                    case 8:
                      window.addEventListener('scroll', /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                          var datos;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (container.dataset.render) {
                                    _context.next = 10;
                                    break;
                                  }

                                  container.append(loader);
                                  container.setAttribute('data-render', 'render');
                                  _context.next = 5;
                                  return getData(cluster_categories_object.action, cluster_categories_object.nonce, cluster_categories_object.url);

                                case 5:
                                  datos = _context.sent;
                                  renderHTML(datos, container);
                                  more(datos); // document.querySelector('.loader-categories').style.display = 'none';

                                  container.querySelector('.loader-categories').remove();
                                  sessionStorage.setItem('categories', JSON.stringify(datos));

                                case 10:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x) {
                          return _ref2.apply(this, arguments);
                        };
                      }());

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
            return _cacheExist.apply(this, arguments);
          };

          cacheExist = function _cacheExist2() {
            return _cacheExist.apply(this, arguments);
          };

          more = function _more(datos) {
            if (document.querySelector('.more')) {
              var showMore = document.querySelectorAll('.more'); // debugger;

              showMore.forEach(function (element) {
                element.addEventListener('click', function (e) {
                  var excerpt = element.parentNode;
                  var index = excerpt.dataset.index;
                  excerpt.textContent = datos[index].description;
                }); //listener
              }); //foreach
            }
          };

          renderHTML = function _renderHTML(datos, container) {
            // debugger;
            var index = 0;
            datos.forEach(function (dato) {
              // debugger;
              var HTMLString = templateString(dato.name, dato.description, dato.url, dato.src, index++);
              var HTML = convertHTML(HTMLString);
              container.append(HTML);
              var image = HTML.querySelector('.thumbnail-image');
              image.addEventListener('load', function (e) {
                image.classList.add('fadeIn');
              });
            });
          };

          templateString = function _templateString(name, description, url, src, index) {
            var lengthText = description.length;
            var excerpt; //is mobile

            if (window.innerWidth < 425) {
              if (lengthText > 100) {
                excerpt = description.slice(0, 100) + '... <span class="more">más</span>';
              } else {
                excerpt = description;
              }
            } else {
              excerpt = description;
            }

            return "<li class=\"cluster-categories__item\">\n                <div class=\"thumbnail-container\">\n                    <a class=\"thumbnail-link\" href=\"".concat(url, "\">\n                        <img class=\"thumbnail-image\" src=\"").concat(src, "\" alt=\"").concat(name, "\">\n                    </a>\n                </div>\n                <div class=\"description-container\">\n                    <h2 class=\"title\">\n                        <a class=\"title-link\" href=\"").concat(url, "\">\n                            ").concat(name, "\n                            <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"20px\" height=\"20px\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 20 20\"><path d=\"M6 15l5-5l-5-5l1-2l7 7l-7 7z\" fill=\"#16a9ae;\"/></svg>\n                        </a>\n                    </h2>\n                    <p class=\"description\" data-index=\"").concat(index, "\">\n                        ").concat(excerpt, "\n                        \n                    </p>\n                    <a class=\"button\" href=\"").concat(url, "\">\n                        Ver ofertas\n                        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"20px\" height=\"20px\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 20 20\"><path d=\"M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z\" fill=\"#ffffff\"/></svg>\n                    </a>\n                </div>\n            </li>");
          };

          container = document.querySelector('.cluster-categories');
          homeURL = document.getElementById('home-url').href;
          loader = document.createElement('img'); // function addAttribute(element, attributes) {
          // 	for (let attribute in attributes) {
          // 	  element.setAttribute(attribute, attributes[attribute]);
          // 	}
          // }

          addAttribute(loader, {
            src: homeURL + '/wp-content/plugins/cluster-categories/assets/images/loader.gif',
            width: 50,
            height: 50,
            "class": 'loader-categories'
          }); //parameters 
          // const data = new FormData;
          // data.append('action', cluster_categories_object.action);
          // data.append('nonce', cluster_categories_object.nonce);
          // async function getData() {
          //     const response = await fetch(cluster_categories_object.url, {
          //         method: 'Post',
          //         credentials: 'same-origin',
          //         body: data
          //     });
          //     const datos = await response.json();
          //     return datos;
          // }
          // getData();

          cacheExist();

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}))();

/***/ }),

/***/ "./js/woocommerce/cluster-information.js":
/*!***********************************************!*\
  !*** ./js/woocommerce/cluster-information.js ***!
  \***********************************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var container, templateString, renderHTML, cacheExist, _cacheExist;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _cacheExist = function _cacheExist3() {
            _cacheExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var datosCache;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!sessionStorage.getItem('information')) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 3;
                      return sessionStorage.getItem('information');

                    case 3:
                      datosCache = _context2.sent;
                      renderHTML(JSON.parse(datosCache), container);
                      _context2.next = 8;
                      break;

                    case 7:
                      window.addEventListener('scroll', /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                          var datos;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (container.dataset.render) {
                                    _context.next = 7;
                                    break;
                                  }

                                  container.setAttribute('data-render', 'render');
                                  _context.next = 4;
                                  return getData(cluster_information_object.action, cluster_information_object.nonce, cluster_information_object.url);

                                case 4:
                                  datos = _context.sent;
                                  renderHTML(datos, container);
                                  sessionStorage.setItem('information', JSON.stringify(datos));

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x) {
                          return _ref2.apply(this, arguments);
                        };
                      }());

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
            return _cacheExist.apply(this, arguments);
          };

          cacheExist = function _cacheExist2() {
            return _cacheExist.apply(this, arguments);
          };

          renderHTML = function _renderHTML(datos, container) {
            // debugger;
            datos.forEach(function (dato) {
              // debugger;
              var HTMLString = templateString(dato.post_title, dato.post_excerpt, dato.url, dato.src);
              var HTML = convertHTML(HTMLString);
              container.append(HTML);
              var image = HTML.querySelector('.thumbnail-image');
              image.addEventListener('load', function (e) {
                image.classList.add('fadeIn');
              });
            });
          };

          templateString = function _templateString(post_title, post_excerpt, url, src) {
            return "<li class=\"cluster-information__item\">\n                <div class=\"thumbnail-container\">\n                    <a class=\"thumbnail-link\" href=\"".concat(url, "\">\n                        <img class=\"thumbnail-image\" src=\"").concat(src, "\" alt=\"").concat(post_title, "\">\n                    </a>\n                </div>\n                <div class=\"post_excerpt-container\">\n                    <h2 class=\"title\">\n                        <a class=\"title-link\" href=\"").concat(url, "\">").concat(post_title, "</a>\n                    </h2>\n                    <p class=\"post_excerpt\">\n                        ").concat(post_excerpt, "\n                        <span class=\"more\">M\xE1s</span>\n                    </p>\n                    <a class=\"link\" href=\"").concat(url, "\">\n                        Ver m\xE1s informaci\xF3n\n                        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"20px\" height=\"20px\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 20 20\"><path d=\"M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z\" fill=\"#3e3e3e\"/></svg>\n                    </a>\n                </div>\n            </li>");
          };

          container = document.querySelector('.cluster-information'); //parameters 
          // const data = new FormData;
          // data.append('action', cluster_information_object.action);
          // data.append('nonce', cluster_information_object.nonce);
          // async function getData() {
          //     const response = await fetch(cluster_information_object.url, {
          //         method: 'Post',
          //         credentials: 'same-origin',
          //         body: data
          //     });
          //     const datos = await response.json();
          //     return datos;
          // }
          // getData();

          cacheExist();

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}))();

/***/ }),

/***/ "./js/woocommerce/cluster-services.js":
/*!********************************************!*\
  !*** ./js/woocommerce/cluster-services.js ***!
  \********************************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var container, templateString, renderHTML, cacheExist, _cacheExist;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _cacheExist = function _cacheExist3() {
            _cacheExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var datosCache;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!sessionStorage.getItem('services')) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 3;
                      return sessionStorage.getItem('services');

                    case 3:
                      datosCache = _context2.sent;
                      renderHTML(JSON.parse(datosCache), container);
                      _context2.next = 8;
                      break;

                    case 7:
                      window.addEventListener('scroll', /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                          var datos;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (container.dataset.render) {
                                    _context.next = 7;
                                    break;
                                  }

                                  container.setAttribute('data-render', 'render');
                                  _context.next = 4;
                                  return getData(cluster_services_object.action, cluster_services_object.nonce, cluster_services_object.url);

                                case 4:
                                  datos = _context.sent;
                                  renderHTML(datos, container);
                                  sessionStorage.setItem('services', JSON.stringify(datos));

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x) {
                          return _ref2.apply(this, arguments);
                        };
                      }());

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
            return _cacheExist.apply(this, arguments);
          };

          cacheExist = function _cacheExist2() {
            return _cacheExist.apply(this, arguments);
          };

          renderHTML = function _renderHTML(datos, container) {
            // debugger;
            datos.forEach(function (dato) {
              // debugger;
              var HTMLString = templateString(dato.name, dato.description, dato.url, dato.src);
              var HTML = convertHTML(HTMLString);
              container.append(HTML);
              var image = HTML.querySelector('.thumbnail-image');
              image.addEventListener('load', function (e) {
                image.classList.add('fadeIn');
              });
            });
          };

          templateString = function _templateString(name, description, url, src) {
            return "<li class=\"cluster-services__item\">\n                <div class=\"thumbnail-container\">\n                    <a class=\"thumbnail-link\" href=\"".concat(url, "\">\n                        <img class=\"thumbnail-image\" src=\"").concat(src, "\" alt=\"").concat(name, "\">\n                    </a>\n                </div>\n                <div class=\"description-container\">\n                    <h2 class=\"title\">\n                        <a class=\"title-link\" href=\"").concat(url, "\">\n                            ").concat(name, "\n                            <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"20px\" height=\"20px\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 20 20\"><path d=\"M6 15l5-5l-5-5l1-2l7 7l-7 7z\" fill=\"#16a9ae;\"/></svg>\n                         </a>\n                    </h2>\n                    <p class=\"description\">\n                        ").concat(description, "\n                        <span class=\"more\">M\xE1s</span>\n                    </p>\n                    <a class=\"button\" href=\"").concat(url, "\">\n                        Ver m\xE1s\n                        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"20px\" height=\"20px\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 20 20\"><path d=\"M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z\" fill=\"#ffffff\"/></svg>\n                    </a>\n                </div>\n            </li>");
          };

          container = document.querySelector('.cluster-services'); //parameters 
          // const data = new FormData;
          // data.append('action', cluster_services_object.action);
          // data.append('nonce', cluster_services_object.nonce);
          // async function getData() {
          //     const response = await fetch(cluster_services_object.url, {
          //         method: 'Post',
          //         credentials: 'same-origin',
          //         body: data
          //     });
          //     const datos = await response.json();
          //     return datos;
          // }
          // getData();

          cacheExist();

        case 6:
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
/*!***************************************!*\
  !*** ./js/woocommerce/woocommerce.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cluster_categories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster-categories.js */ "./js/woocommerce/cluster-categories.js");
/* harmony import */ var _cluster_categories_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cluster_categories_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cluster_information_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cluster-information.js */ "./js/woocommerce/cluster-information.js");
/* harmony import */ var _cluster_information_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cluster_information_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cluster_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cluster-services.js */ "./js/woocommerce/cluster-services.js");
/* harmony import */ var _cluster_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cluster_services_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUErREFyQixVQUFBQSxVQUFVOztBQWhGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFGOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3dvb2NvbW1lcmNlL2NsdXN0ZXItY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy93b29jb21tZXJjZS9jbHVzdGVyLWluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3dvb2NvbW1lcmNlL2NsdXN0ZXItc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL3dvb2NvbW1lcmNlL3dvb2NvbW1lcmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiggYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2x1c3Rlci1jYXRlZ29yaWVzJyk7XHJcbiAgICBjb25zdCBob21lVVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdXJsJykuaHJlZjtcclxuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XHJcblx0Ly8gXHRmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xyXG5cdC8vIFx0ICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cdGFkZEF0dHJpYnV0ZSggbG9hZGVyLCB7XHJcblx0XHRzcmM6IGhvbWVVUkwgKyAnL3dwLWNvbnRlbnQvcGx1Z2lucy9jbHVzdGVyLWNhdGVnb3JpZXMvYXNzZXRzL2ltYWdlcy9sb2FkZXIuZ2lmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgIGNsYXNzOiAnbG9hZGVyLWNhdGVnb3JpZXMnXHJcblx0fSk7XHJcbiAgICAvL3BhcmFtZXRlcnMgXHJcbiAgICAvLyBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgLy8gZGF0YS5hcHBlbmQoJ2FjdGlvbicsIGNsdXN0ZXJfY2F0ZWdvcmllc19vYmplY3QuYWN0aW9uKTtcclxuICAgIC8vIGRhdGEuYXBwZW5kKCdub25jZScsIGNsdXN0ZXJfY2F0ZWdvcmllc19vYmplY3Qubm9uY2UpO1xyXG5cclxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjbHVzdGVyX2NhdGVnb3JpZXNfb2JqZWN0LnVybCwge1xyXG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQb3N0JyxcclxuICAgIC8vICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAvLyAgICAgICAgIGJvZHk6IGRhdGFcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBjb25zdCBkYXRvcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICByZXR1cm4gZGF0b3M7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0RGF0YSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nKG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwsIHNyYywgaW5kZXgpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoVGV4dCA9IGRlc2NyaXB0aW9uLmxlbmd0aDtcclxuICAgICAgICBsZXQgZXhjZXJwdDtcclxuICAgICAgICAvL2lzIG1vYmlsZVxyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCA0MjUgKSB7XHJcbiAgICAgICAgICAgIGlmICggbGVuZ3RoVGV4dCA+IDEwMCApIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VycHQgPSBkZXNjcmlwdGlvbi5zbGljZSgwICwgMTAwKSArICcuLi4gPHNwYW4gY2xhc3M9XCJtb3JlXCI+bcOhczwvc3Bhbj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBleGNlcnB0ID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgYDxsaSBjbGFzcz1cImNsdXN0ZXItY2F0ZWdvcmllc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRodW1ibmFpbC1saW5rXCIgaHJlZj1cIiR7dXJsfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidGh1bWJuYWlsLWltYWdlXCIgc3JjPVwiJHtzcmN9XCIgYWx0PVwiJHtuYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGUtbGlua1wiIGhyZWY9XCIke3VybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHN0eWxlPVwiLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTYgMTVsNS01bC01LTVsMS0ybDcgN2wtNyA3elwiIGZpbGw9XCIjMTZhOWFlO1wiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2V4Y2VycHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIGhyZWY9XCIke3VybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmVyIG9mZXJ0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgc3R5bGU9XCItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMiAxMVY5aDEybC00LTRsMS0ybDcgN2wtNyA3bC0xLTJsNC00SDJ6XCIgZmlsbD1cIiNmZmZmZmZcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBmdW5jdGlvbiBjb252ZXJ0SFRNTChIVE1MU3RyaW5nKSB7XHJcbiAgICAvLyAgICAgY29uc3QgSFRNTCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgpO1xyXG4gICAgLy8gICAgIEhUTUwuYm9keS5pbm5lckhUTUwgPSBIVE1MU3RyaW5nO1xyXG4gICAgLy8gICAgIHJldHVybiBIVE1MLmJvZHkuY2hpbGRyZW5bMF07XHJcbiAgICAvLyB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXJIVE1MKGRhdG9zLCBjb250YWluZXIpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGRhdG9zLmZvckVhY2goIGRhdG8gPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgY29uc3QgSFRNTFN0cmluZyA9IHRlbXBsYXRlU3RyaW5nKGRhdG8ubmFtZSwgZGF0by5kZXNjcmlwdGlvbiwgZGF0by51cmwsIGRhdG8uc3JjLCBpbmRleCsrKTtcclxuICAgICAgICAgICAgY29uc3QgSFRNTCA9IGNvbnZlcnRIVE1MKEhUTUxTdHJpbmcpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKEhUTUwpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEhUTUwucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbC1pbWFnZScpO1xyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2Z1bmN0aW9uIHZlciBtYXNcclxuICAgIGZ1bmN0aW9uIG1vcmUoZGF0b3MpIHtcclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlJykgKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG93TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgc2hvd01vcmUuZm9yRWFjaCggKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBleGNlcnB0ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGV4Y2VycHQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBleGNlcnB0LnRleHRDb250ZW50ID0gZGF0b3NbaW5kZXhdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSApOyAvL2xpc3RlbmVyXHJcbiAgICAgICAgICAgIH0gKTsvL2ZvcmVhY2hcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FjaGVFeGlzdCgpIHtcclxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdG9zQ2FjaGUgPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJyk7XHJcbiAgICAgICAgICAgIHJlbmRlckhUTUwoSlNPTi5wYXJzZShkYXRvc0NhY2hlKSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgbW9yZSggSlNPTi5wYXJzZShkYXRvc0NhY2hlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICggISBjb250YWluZXIuZGF0YXNldC5yZW5kZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChsb2FkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVuZGVyJywgJ3JlbmRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgZ2V0RGF0YSggY2x1c3Rlcl9jYXRlZ29yaWVzX29iamVjdC5hY3Rpb24sIGNsdXN0ZXJfY2F0ZWdvcmllc19vYmplY3Qubm9uY2UsIGNsdXN0ZXJfY2F0ZWdvcmllc19vYmplY3QudXJsICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySFRNTChkYXRvcywgY29udGFpbmVyICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZShkYXRvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci1jYXRlZ29yaWVzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxvYWRlci1jYXRlZ29yaWVzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGRhdG9zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWNoZUV4aXN0KCk7XHJcbiAgICBcclxuICAgIFxyXG5cclxufSApKCk7IiwiKCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbHVzdGVyLWluZm9ybWF0aW9uJyk7XHJcbiAgICAvL3BhcmFtZXRlcnMgXHJcbiAgICAvLyBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhO1xyXG4gICAgLy8gZGF0YS5hcHBlbmQoJ2FjdGlvbicsIGNsdXN0ZXJfaW5mb3JtYXRpb25fb2JqZWN0LmFjdGlvbik7XHJcbiAgICAvLyBkYXRhLmFwcGVuZCgnbm9uY2UnLCBjbHVzdGVyX2luZm9ybWF0aW9uX29iamVjdC5ub25jZSk7XHJcblxyXG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNsdXN0ZXJfaW5mb3JtYXRpb25fb2JqZWN0LnVybCwge1xyXG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQb3N0JyxcclxuICAgIC8vICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAvLyAgICAgICAgIGJvZHk6IGRhdGFcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBjb25zdCBkYXRvcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICByZXR1cm4gZGF0b3M7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0RGF0YSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nKHBvc3RfdGl0bGUsIHBvc3RfZXhjZXJwdCwgdXJsLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJjbHVzdGVyLWluZm9ybWF0aW9uX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGh1bWJuYWlsLWxpbmtcIiBocmVmPVwiJHt1cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWwtaW1hZ2VcIiBzcmM9XCIke3NyY31cIiBhbHQ9XCIke3Bvc3RfdGl0bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdF9leGNlcnB0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGUtbGlua1wiIGhyZWY9XCIke3VybH1cIj4ke3Bvc3RfdGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3N0X2V4Y2VycHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwb3N0X2V4Y2VycHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPk3DoXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGlua1wiIGhyZWY9XCIke3VybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmVyIG3DoXMgaW5mb3JtYWNpw7NuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHN0eWxlPVwiLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTIgMTFWOWgxMmwtNC00bDEtMmw3IDdsLTcgN2wtMS0ybDQtNEgyelwiIGZpbGw9XCIjM2UzZTNlXCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gZnVuY3Rpb24gY29udmVydEhUTUwoSFRNTFN0cmluZykge1xyXG4gICAgLy8gICAgIGNvbnN0IEhUTUwgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcclxuICAgIC8vICAgICBIVE1MLmJvZHkuaW5uZXJIVE1MID0gSFRNTFN0cmluZztcclxuICAgIC8vICAgICByZXR1cm4gSFRNTC5ib2R5LmNoaWxkcmVuWzBdO1xyXG4gICAgLy8gfVxyXG4gICAgZnVuY3Rpb24gcmVuZGVySFRNTChkYXRvcywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgZGF0b3MuZm9yRWFjaCggZGF0byA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zdCBIVE1MU3RyaW5nID0gdGVtcGxhdGVTdHJpbmcoZGF0by5wb3N0X3RpdGxlLCBkYXRvLnBvc3RfZXhjZXJwdCwgZGF0by51cmwsIGRhdG8uc3JjKTtcclxuICAgICAgICAgICAgY29uc3QgSFRNTCA9IGNvbnZlcnRIVE1MKEhUTUxTdHJpbmcpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKEhUTUwpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEhUTUwucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbC1pbWFnZScpO1xyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjYWNoZUV4aXN0KCkge1xyXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdG9zQ2FjaGUgPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbmZvcm1hdGlvbicpO1xyXG4gICAgICAgICAgICByZW5kZXJIVE1MKEpTT04ucGFyc2UoZGF0b3NDYWNoZSksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFjb250YWluZXIuZGF0YXNldC5yZW5kZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVuZGVyJywgJ3JlbmRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgZ2V0RGF0YSggY2x1c3Rlcl9pbmZvcm1hdGlvbl9vYmplY3QuYWN0aW9uLCBjbHVzdGVyX2luZm9ybWF0aW9uX29iamVjdC5ub25jZSwgY2x1c3Rlcl9pbmZvcm1hdGlvbl9vYmplY3QudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJIVE1MKGRhdG9zLCBjb250YWluZXIgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbmZvcm1hdGlvbicsIEpTT04uc3RyaW5naWZ5KGRhdG9zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FjaGVFeGlzdCgpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbn0gKSgpOyIsIiggYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2x1c3Rlci1zZXJ2aWNlcycpO1xyXG4gICAgLy9wYXJhbWV0ZXJzIFxyXG4gICAgLy8gY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuICAgIC8vIGRhdGEuYXBwZW5kKCdhY3Rpb24nLCBjbHVzdGVyX3NlcnZpY2VzX29iamVjdC5hY3Rpb24pO1xyXG4gICAgLy8gZGF0YS5hcHBlbmQoJ25vbmNlJywgY2x1c3Rlcl9zZXJ2aWNlc19vYmplY3Qubm9uY2UpO1xyXG5cclxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjbHVzdGVyX3NlcnZpY2VzX29iamVjdC51cmwsIHtcclxuICAgIC8vICAgICAgICAgbWV0aG9kOiAnUG9zdCcsXHJcbiAgICAvLyAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgLy8gICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgZGF0b3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdG9zO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldERhdGEoKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZVN0cmluZyhuYW1lLCBkZXNjcmlwdGlvbiwgdXJsLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJjbHVzdGVyLXNlcnZpY2VzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGh1bWJuYWlsLWxpbmtcIiBocmVmPVwiJHt1cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWwtaW1hZ2VcIiBzcmM9XCIke3NyY31cIiBhbHQ9XCIke25hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZS1saW5rXCIgaHJlZj1cIiR7dXJsfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgc3R5bGU9XCItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNNiAxNWw1LTVsLTUtNWwxLTJsNyA3bC03IDd6XCIgZmlsbD1cIiMxNmE5YWU7XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj5Nw6FzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIGhyZWY9XCIke3VybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmVyIG3DoXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgc3R5bGU9XCItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMiAxMVY5aDEybC00LTRsMS0ybDcgN2wtNyA3bC0xLTJsNC00SDJ6XCIgZmlsbD1cIiNmZmZmZmZcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBmdW5jdGlvbiBjb252ZXJ0SFRNTChIVE1MU3RyaW5nKSB7XHJcbiAgICAvLyAgICAgY29uc3QgSFRNTCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgpO1xyXG4gICAgLy8gICAgIEhUTUwuYm9keS5pbm5lckhUTUwgPSBIVE1MU3RyaW5nO1xyXG4gICAgLy8gICAgIHJldHVybiBIVE1MLmJvZHkuY2hpbGRyZW5bMF07XHJcbiAgICAvLyB9XHJcbiAgICBmdW5jdGlvbiByZW5kZXJIVE1MKGRhdG9zLCBjb250YWluZXIpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICBkYXRvcy5mb3JFYWNoKCBkYXRvID0+IHtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IEhUTUxTdHJpbmcgPSB0ZW1wbGF0ZVN0cmluZyhkYXRvLm5hbWUsIGRhdG8uZGVzY3JpcHRpb24sIGRhdG8udXJsLCBkYXRvLnNyYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IEhUTUwgPSBjb252ZXJ0SFRNTChIVE1MU3RyaW5nKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChIVE1MKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBIVE1MLnF1ZXJ5U2VsZWN0b3IoJy50aHVtYm5haWwtaW1hZ2UnKTtcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FjaGVFeGlzdCgpIHtcclxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2VydmljZXMnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRvc0NhY2hlID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2VydmljZXMnKTtcclxuICAgICAgICAgICAgcmVuZGVySFRNTChKU09OLnBhcnNlKGRhdG9zQ2FjaGUpLCBjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhY29udGFpbmVyLmRhdGFzZXQucmVuZGVyICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVuZGVyJywgJ3JlbmRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgZ2V0RGF0YSggY2x1c3Rlcl9zZXJ2aWNlc19vYmplY3QuYWN0aW9uLCBjbHVzdGVyX3NlcnZpY2VzX29iamVjdC5ub25jZSwgY2x1c3Rlcl9zZXJ2aWNlc19vYmplY3QudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJIVE1MKGRhdG9zLCBjb250YWluZXIgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXJ2aWNlcycsIEpTT04uc3RyaW5naWZ5KGRhdG9zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYWNoZUV4aXN0KCk7XHJcbiAgICBcclxuICAgIFxyXG5cclxufSApKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jbHVzdGVyLWNhdGVnb3JpZXMuanMnO1xyXG5pbXBvcnQgJy4vY2x1c3Rlci1pbmZvcm1hdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9jbHVzdGVyLXNlcnZpY2VzLmpzJztcclxuIl0sIm5hbWVzIjpbInRlbXBsYXRlU3RyaW5nIiwicmVuZGVySFRNTCIsIm1vcmUiLCJjYWNoZUV4aXN0Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0b3NDYWNoZSIsIkpTT04iLCJwYXJzZSIsImNvbnRhaW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YXNldCIsInJlbmRlciIsImFwcGVuZCIsImxvYWRlciIsInNldEF0dHJpYnV0ZSIsImdldERhdGEiLCJjbHVzdGVyX2NhdGVnb3JpZXNfb2JqZWN0IiwiYWN0aW9uIiwibm9uY2UiLCJ1cmwiLCJkYXRvcyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZG9jdW1lbnQiLCJzaG93TW9yZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImV4Y2VycHQiLCJwYXJlbnROb2RlIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsImRlc2NyaXB0aW9uIiwiZGF0byIsIkhUTUxTdHJpbmciLCJuYW1lIiwic3JjIiwiSFRNTCIsImNvbnZlcnRIVE1MIiwiaW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZW5ndGhUZXh0IiwibGVuZ3RoIiwiaW5uZXJXaWR0aCIsInNsaWNlIiwiaG9tZVVSTCIsImdldEVsZW1lbnRCeUlkIiwiaHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJhZGRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImNsdXN0ZXJfaW5mb3JtYXRpb25fb2JqZWN0IiwicG9zdF90aXRsZSIsInBvc3RfZXhjZXJwdCIsImNsdXN0ZXJfc2VydmljZXNfb2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==