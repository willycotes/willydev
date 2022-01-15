/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/woocommerce/woocommerce-admin/services-custom-fields.js":
/*!********************************************************************!*\
  !*** ./js/woocommerce/woocommerce-admin/services-custom-fields.js ***!
  \********************************************************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  $('.custom-media-item-upload').on("click", function () {
    var send_attachment_bkp = wp.media.editor.send.attachment;
    var button = $(this);

    wp.media.editor.send.attachment = function (props, attachment) {
      $(button).next().val(attachment.id);
      $(button).next().next().attr('src', attachment.url);
      $(button).next().next().show();
      $(button).next().next().next().show();
      wp.media.editor.send.attachment = send_attachment_bkp;
    };

    wp.media.editor.open(button);
    return false;
  });
  $('.custom-media-item-delete').on("click", function () {
    var button = $(this);
    $(button).hide();
    $(button).prev().attr('src', '');
    $(button).prev().hide();
    $(button).prev().prev().val('');
    return false;
  });
});

/***/ }),

/***/ "./js/woocommerce/woocommerce-admin/servicios-custom-taxonomy.js":
/*!***********************************************************************!*\
  !*** ./js/woocommerce/woocommerce-admin/servicios-custom-taxonomy.js ***!
  \***********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./js/woocommerce/woocommerce-admin/tematicas-custom-taxonomy.js":
/*!***********************************************************************!*\
  !*** ./js/woocommerce/woocommerce-admin/tematicas-custom-taxonomy.js ***!
  \***********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./js/woocommerce/woocommerce-admin/thematic-custom-fields-taxonomy.js":
/*!*****************************************************************************!*\
  !*** ./js/woocommerce/woocommerce-admin/thematic-custom-fields-taxonomy.js ***!
  \*****************************************************************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  //button upload
  $('.custom-media-item-upload').on("click", function () {
    var send_attachment_bkp = wp.media.editor.send.attachment;
    var button = $(this);

    wp.media.editor.send.attachment = function (props, attachment) {
      $(button).next().val(attachment.id);
      $(button).next().next().attr('src', attachment.url);
      $(button).next().next().show();
      $(button).next().next().next().show();
      wp.media.editor.send.attachment = send_attachment_bkp;
    };

    wp.media.editor.open(button);
    return false;
  }); //button remove

  $('.custom-media-item-delete').on("click", function () {
    var button = $(this);
    $(button).hide();
    $(button).prev().attr('src', '');
    $(button).prev().hide();
    $(button).prev().prev().val('');
    return false;
  });
}); //este codigo funciona sobre la siguiente estructura html 
// <label for="thumbnail_id">Imagen destacada</label>
//           <div class="custom-media-item">
//               <a href="#" class="button button-primary custom-media-item-upload">Subir imagen</a>
//               <input type="hidden" id="thumbnail_id" name="thumbnail_id" value="">
//               <img src="" alt="" style="max-width:150px;display:none;">
//               <a href="#" class="button button-primary custom-media-item-delete">Eliminar</a>
//           </div>
//y se agrega a traves de este gancho
//js library enqueue media
// add_action( 'admin_print_scripts', 'my_admin_scripts' );
// function my_admin_scripts() {
//     //Agregamos nuestro JS
//     wp_enqueue_script( 'my_custom_fields_js', plugins_url() . '/tematicas-custom-taxonomy/assets/js/custom-fields.js', array('jquery'), true );
//     //Añadimos la librería multimedia
//     wp_enqueue_media();
// }

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
/*!***************************************************************!*\
  !*** ./js/woocommerce/woocommerce-admin/woocommerce-admin.js ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_custom_fields_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-custom-fields.js */ "./js/woocommerce/woocommerce-admin/services-custom-fields.js");
/* harmony import */ var _services_custom_fields_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_custom_fields_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _servicios_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-custom-taxonomy.js */ "./js/woocommerce/woocommerce-admin/servicios-custom-taxonomy.js");
/* harmony import */ var _servicios_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_servicios_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tematicas_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tematicas-custom-taxonomy.js */ "./js/woocommerce/woocommerce-admin/tematicas-custom-taxonomy.js");
/* harmony import */ var _tematicas_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tematicas_custom_taxonomy_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thematic_custom_fields_taxonomy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thematic-custom-fields-taxonomy.js */ "./js/woocommerce/woocommerce-admin/thematic-custom-fields-taxonomy.js");
/* harmony import */ var _thematic_custom_fields_taxonomy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_thematic_custom_fields_taxonomy_js__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd29vY29tbWVyY2Uvd29vY29tbWVyY2UtYWRtaW4vd29vY29tbWVyY2UtYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7QUFDaENBLEVBQUFBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFXO0FBQ3BELFFBQUlDLG1CQUFtQixHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFVBQS9DO0FBQ0EsUUFBSUMsTUFBTSxHQUFHUixDQUFDLENBQUMsSUFBRCxDQUFkOztBQUVBRyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFVBQXJCLEdBQWtDLFVBQVNFLEtBQVQsRUFBZ0JGLFVBQWhCLEVBQTRCO0FBQzVEUCxNQUFBQSxDQUFDLENBQUNRLE1BQUQsQ0FBRCxDQUFVRSxJQUFWLEdBQWlCQyxHQUFqQixDQUFxQkosVUFBVSxDQUFDSyxFQUFoQztBQUNBWixNQUFBQSxDQUFDLENBQUNRLE1BQUQsQ0FBRCxDQUFVRSxJQUFWLEdBQWlCQSxJQUFqQixHQUF3QkcsSUFBeEIsQ0FBNkIsS0FBN0IsRUFBb0NOLFVBQVUsQ0FBQ08sR0FBL0M7QUFDQWQsTUFBQUEsQ0FBQyxDQUFDUSxNQUFELENBQUQsQ0FBVUUsSUFBVixHQUFpQkEsSUFBakIsR0FBd0JLLElBQXhCO0FBQ0FmLE1BQUFBLENBQUMsQ0FBQ1EsTUFBRCxDQUFELENBQVVFLElBQVYsR0FBaUJBLElBQWpCLEdBQXdCQSxJQUF4QixHQUErQkssSUFBL0I7QUFFQVosTUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLE1BQVQsQ0FBZ0JDLElBQWhCLENBQXFCQyxVQUFyQixHQUFrQ0wsbUJBQWxDO0FBQ0QsS0FQRDs7QUFRQUMsSUFBQUEsRUFBRSxD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QVA7QUFDRCxHQVREO0FBVUQsQ0E3QkgsR0ErQkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Y7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3dvb2NvbW1lcmNlL3dvb2NvbW1lcmNlLWFkbWluL3NlcnZpY2VzLWN1c3RvbS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvd29vY29tbWVyY2Uvd29vY29tbWVyY2UtYWRtaW4vdGhlbWF0aWMtY3VzdG9tLWZpZWxkcy10YXhvbm9teS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvd29vY29tbWVyY2Uvd29vY29tbWVyY2UtYWRtaW4vd29vY29tbWVyY2UtYWRtaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJCgnLmN1c3RvbS1tZWRpYS1pdGVtLXVwbG9hZCcpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZW5kX2F0dGFjaG1lbnRfYmtwID0gd3AubWVkaWEuZWRpdG9yLnNlbmQuYXR0YWNobWVudDtcclxuICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgXHJcbiAgICAgIHdwLm1lZGlhLmVkaXRvci5zZW5kLmF0dGFjaG1lbnQgPSBmdW5jdGlvbihwcm9wcywgYXR0YWNobWVudCkge1xyXG4gICAgICAgICQoYnV0dG9uKS5uZXh0KCkudmFsKGF0dGFjaG1lbnQuaWQpO1xyXG4gICAgICAgICQoYnV0dG9uKS5uZXh0KCkubmV4dCgpLmF0dHIoJ3NyYycsIGF0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAkKGJ1dHRvbikubmV4dCgpLm5leHQoKS5zaG93KCk7XHJcbiAgICAgICAgJChidXR0b24pLm5leHQoKS5uZXh0KCkubmV4dCgpLnNob3coKTtcclxuICBcclxuICAgICAgICB3cC5tZWRpYS5lZGl0b3Iuc2VuZC5hdHRhY2htZW50ID0gc2VuZF9hdHRhY2htZW50X2JrcDtcclxuICAgICAgfVxyXG4gICAgICB3cC5tZWRpYS5lZGl0b3Iub3BlbihidXR0b24pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gZmFsc2U7ICAgICAgIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCcuY3VzdG9tLW1lZGlhLWl0ZW0tZGVsZXRlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgXHJcbiAgICAgICQoYnV0dG9uKS5oaWRlKCk7XHJcbiAgICAgICQoYnV0dG9uKS5wcmV2KCkuYXR0cignc3JjJywgJycpO1xyXG4gICAgICAkKGJ1dHRvbikucHJldigpLmhpZGUoKTtcclxuICAgICAgJChidXR0b24pLnByZXYoKS5wcmV2KCkudmFsKCcnKTtcclxuICBcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICBcclxuICAgIH0pO1xyXG4gIH0pOyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAvL2J1dHRvbiB1cGxvYWRcclxuICAgICQoJy5jdXN0b20tbWVkaWEtaXRlbS11cGxvYWQnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2VuZF9hdHRhY2htZW50X2JrcCA9IHdwLm1lZGlhLmVkaXRvci5zZW5kLmF0dGFjaG1lbnQ7XHJcbiAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xyXG4gIFxyXG4gICAgICB3cC5tZWRpYS5lZGl0b3Iuc2VuZC5hdHRhY2htZW50ID0gZnVuY3Rpb24ocHJvcHMsIGF0dGFjaG1lbnQpIHtcclxuICAgICAgICAkKGJ1dHRvbikubmV4dCgpLnZhbChhdHRhY2htZW50LmlkKTtcclxuICAgICAgICAkKGJ1dHRvbikubmV4dCgpLm5leHQoKS5hdHRyKCdzcmMnLCBhdHRhY2htZW50LnVybCk7XHJcbiAgICAgICAgJChidXR0b24pLm5leHQoKS5uZXh0KCkuc2hvdygpO1xyXG4gICAgICAgICQoYnV0dG9uKS5uZXh0KCkubmV4dCgpLm5leHQoKS5zaG93KCk7XHJcbiAgXHJcbiAgICAgICAgd3AubWVkaWEuZWRpdG9yLnNlbmQuYXR0YWNobWVudCA9IHNlbmRfYXR0YWNobWVudF9ia3A7XHJcbiAgICAgIH1cclxuICAgICAgd3AubWVkaWEuZWRpdG9yLm9wZW4oYnV0dG9uKTtcclxuICBcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICBcclxuICAgIH0pO1xyXG4gIC8vYnV0dG9uIHJlbW92ZVxyXG4gICAgJCgnLmN1c3RvbS1tZWRpYS1pdGVtLWRlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xyXG4gIFxyXG4gICAgICAkKGJ1dHRvbikuaGlkZSgpO1xyXG4gICAgICAkKGJ1dHRvbikucHJldigpLmF0dHIoJ3NyYycsICcnKTtcclxuICAgICAgJChidXR0b24pLnByZXYoKS5oaWRlKCk7XHJcbiAgICAgICQoYnV0dG9uKS5wcmV2KCkucHJldigpLnZhbCgnJyk7XHJcbiAgXHJcbiAgICAgIHJldHVybiBmYWxzZTsgICAgICAgXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy9lc3RlIGNvZGlnbyBmdW5jaW9uYSBzb2JyZSBsYSBzaWd1aWVudGUgZXN0cnVjdHVyYSBodG1sIFxyXG4gIC8vIDxsYWJlbCBmb3I9XCJ0aHVtYm5haWxfaWRcIj5JbWFnZW4gZGVzdGFjYWRhPC9sYWJlbD5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1tZWRpYS1pdGVtXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGN1c3RvbS1tZWRpYS1pdGVtLXVwbG9hZFwiPlN1YmlyIGltYWdlbjwvYT5cclxuICAvLyAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ0aHVtYm5haWxfaWRcIiBuYW1lPVwidGh1bWJuYWlsX2lkXCIgdmFsdWU9XCJcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgc3R5bGU9XCJtYXgtd2lkdGg6MTUwcHg7ZGlzcGxheTpub25lO1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjdXN0b20tbWVkaWEtaXRlbS1kZWxldGVcIj5FbGltaW5hcjwvYT5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gIC8veSBzZSBhZ3JlZ2EgYSB0cmF2ZXMgZGUgZXN0ZSBnYW5jaG9cclxuLy9qcyBsaWJyYXJ5IGVucXVldWUgbWVkaWFcclxuLy8gYWRkX2FjdGlvbiggJ2FkbWluX3ByaW50X3NjcmlwdHMnLCAnbXlfYWRtaW5fc2NyaXB0cycgKTtcclxuXHJcbi8vIGZ1bmN0aW9uIG15X2FkbWluX3NjcmlwdHMoKSB7XHJcbi8vICAgICAvL0FncmVnYW1vcyBudWVzdHJvIEpTXHJcbi8vICAgICB3cF9lbnF1ZXVlX3NjcmlwdCggJ215X2N1c3RvbV9maWVsZHNfanMnLCBwbHVnaW5zX3VybCgpIC4gJy90ZW1hdGljYXMtY3VzdG9tLXRheG9ub215L2Fzc2V0cy9qcy9jdXN0b20tZmllbGRzLmpzJywgYXJyYXkoJ2pxdWVyeScpLCB0cnVlICk7XHJcbiAgXHJcbi8vICAgICAvL0HDsWFkaW1vcyBsYSBsaWJyZXLDrWEgbXVsdGltZWRpYVxyXG4vLyAgICAgd3BfZW5xdWV1ZV9tZWRpYSgpO1xyXG4vLyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zZXJ2aWNlcy1jdXN0b20tZmllbGRzLmpzJztcclxuaW1wb3J0ICcuL3NlcnZpY2lvcy1jdXN0b20tdGF4b25vbXkuanMnO1xyXG5pbXBvcnQgJy4vdGVtYXRpY2FzLWN1c3RvbS10YXhvbm9teS5qcyc7XHJcbmltcG9ydCAnLi90aGVtYXRpYy1jdXN0b20tZmllbGRzLXRheG9ub215LmpzJztcclxuIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwib24iLCJzZW5kX2F0dGFjaG1lbnRfYmtwIiwid3AiLCJtZWRpYSIsImVkaXRvciIsInNlbmQiLCJhdHRhY2htZW50IiwiYnV0dG9uIiwicHJvcHMiLCJuZXh0IiwidmFsIiwiaWQiLCJhdHRyIiwidXJsIiwic2hvdyIsIm9wZW4iLCJoaWRlIiwicHJldiJdLCJzb3VyY2VSb290IjoiIn0=