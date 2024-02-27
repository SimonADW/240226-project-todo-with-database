/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./src/js/validateForm.js\");\n\n\n//\tDOM CONTENT TARGETS\n\t// SIGN IN/UP SECTIONS\nconst signInButton = document.querySelector(\".header__sign-in-button\");\nconst signUpButton = document.querySelector(\".header__signup-button\");\nconst signInSection = document.querySelector(\".sign-in-section\");\nconst signUpSection = document.querySelector(\".signup-section\");\nconst closeButtons = document.querySelectorAll(\".close-form-button\");\n\n\t// TODO FORM SECTION\nconst titleInput = document.querySelector(\".todo-title-input\");\nconst dateInput = document.querySelector(\".todo-date-input\");\nconst descriptionInput = document.querySelector(\".todo-description-input\");\nconst submitTodoButton = document.querySelector(\".submit-todo-button\");\nconst charCounter = document.querySelector(\".char-count\");\n\t\t// ERRORS\nconst titleError = document.querySelector(\".title-error\");\nconst dateError = document.querySelector(\".date-error\");\nconst descriptionError = document.querySelector(\".description-error\");\n\n\n// SIGN UP/IN EVENTLISTENERS\n\nsignInButton.addEventListener(\"click\", ()=> {\n\tsignInSection.style.display = \"flex\";\n})\n\nsignUpButton.addEventListener(\"click\", ()=> {\n\tsignUpSection.style.display = \"flex\";\n})\n\ncloseButtons.forEach((button)=>{\n\tbutton.addEventListener(\"click\", (event)=> {\n\t\tevent.preventDefault();\n\t\tevent.currentTarget.parentElement.style.display = \"none\";\n\t});\n});\n\n// VALIDATE FORM\n\nsubmitTodoButton.addEventListener(\"click\", (event)=>{\n\tevent.preventDefault();\n\tconst {formErrorStatus} = (0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateForm)(titleInput.value, dateInput.value, titleError, dateError);\n\tif (formErrorStatus()){\n\t\treturn\n\t} else {\n\t\tconsole.log(\"Submitted\")\n\t}\n});\n\n(0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateDescription)(descriptionInput, descriptionError, charCounter);\n\n\n\n//# sourceURL=webpack://240226-todo-app-solo/./src/js/app.js?");

/***/ }),

/***/ "./src/js/validateForm.js":
/*!********************************!*\
  !*** ./src/js/validateForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateDescription: () => (/* binding */ validateDescription),\n/* harmony export */   validateForm: () => (/* binding */ validateForm)\n/* harmony export */ });\n\nconst validateForm = (titleInput, dateInput, titleError, dateError)=> {\n\tlet errors = {\n\t\terrorStatus: false,\n\t\ttitleError: \"Please enter a title\",\n\t\tdateError: \"Please set a due date\"\n\t}\n\t\n\ttitleError.textContent = errors.titleError\n\tdateError.textContent = errors.dateError\n\t\n\tif (!titleInput && !dateInput) {\n\t\terrors.errorStatus = true;\n\t\ttitleError.style.visibility = \"visible\"\n\t\tdateError.style.visibility = \"visible\"\n\t\t\n\t} else if (!titleInput) {\n\t\terrors.errorStatus = true;\n\t\ttitleError.style.visibility = \"visible\"\n\t\tdateError.style.visibility = \"hidden\"\n\t} else if (!dateInput) {\n\t\terrors.errorStatus = true;\n\t\tdateError.style.visibility = \"visible\"\n\t\tdateError.style.visibility = \"visible\"\n\t\ttitleError.style.visibility = \"hidden\"\n\t} else {\n\t\terrors.errorStatus = false;\n\t\tdateError.style.visibility = \"hidden\"\n\t\ttitleError.style.visibility = \"hidden\"\n\t}\n\n\tconst formErrorStatus = () => {\n\t\treturn errors.errorStatus;\n\t}\n\treturn {formErrorStatus}\n};\n\nconst validateDescription = (descInput, descError, descCounter)=> {\n\tdescInput.addEventListener(\"input\", ()=> {\n\t\tdescCounter.textContent = `Characters: ${descInput.value.length}`;\n\n\t\tif(descInput.value.length >= 100){\n\t\t\tdescError.textContent = \"Max characters reached ⚠️\"\n\t\t\tdescError.style.visibility = \"visible\";\n\t\t} else {\n\t\t\t// descCounter.textContent = `Characters: 0`;\n\t\t\tdescError.style.visibility = \"hidden\";\n\t\t};\n\t});\n\n\tdescInput.addEventListener(\"keydown\", (event)=>{\n\t\tif(descInput.value.length >= 100 && event.key !== \"Backspace\") {\n\t\t\tevent.preventDefault();\n\t\t};\n\t});\n\n}\n\n\n\n\n//# sourceURL=webpack://240226-todo-app-solo/./src/js/validateForm.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;