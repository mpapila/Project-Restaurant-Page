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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n\n\nfunction createHomePageContent() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    (0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePageContent);\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHoursPageContent() {\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const titleDiv = document.createElement('div');\n    const title = document.createElement('h1')\n    title.textContent = 'Hours';\n    content.style.display = 'flex';\n    content.style.flexDirection = 'column';\n    content.style.justifyContent = 'flex-start';\n    content.style.alignItems = 'center';\n\n    const hoursDiv = document.createElement('div')\n    let ul = document.createElement('ul')\n    ul.style.listStyle = 'none';\n    ul.style.paddingInlineStart = '0px';\n    ul.style.fontSize = '30px'\n    hoursDiv.append(ul)\n    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n    let hours = '12 PM to 6 PM'\n\n    for (let i = 0; i < days.length; i++) {\n        let li = document.createElement('li')\n        li.textContent = `${days[i]} : ${hours}`\n        ul.append(li);\n    }\n\n    titleDiv.append(title);\n    content.append(titleDiv);\n    content.append(hoursDiv)\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHoursPageContent);\n\n//# sourceURL=webpack://project-restaurant-page/./src/hours.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hours */ \"./src/hours.js\");\n\n\n\n\n\nconst nav = document.querySelector('nav')\nnav.style.display = 'flex';\nnav.style.flexDirection = 'column'\ndocument.body.style.display = 'flex';\ndocument.body.style.gap = '25px'\nconst content = document.getElementById('content');\ncontent.style.width = '40vw';\ncontent.style.height = '60vh';\ncontent.style.backgroundColor = '#1f2937';\ncontent.style.color ='white';\ncontent.style.borderRadius = '10px'\n\nconst buttons = document.querySelectorAll('button');\nbuttons.forEach(function(button) {\n    button.style.height = '80px';\n    button.style.width = 'auto'\n    button.style.fontSize  = '30px';\n    button.style.borderRadius = '10px'\n    button.style.backgroundColor = 'orange'\n    button.style.color = 'red'\n});\n\n\nconst homeButton = document.getElementById('home');\nhomeButton.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst menuButton = document.getElementById('menu');\nmenuButton.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst hoursButton = document.getElementById('hours')\nhoursButton.addEventListener('click', _hours__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadInitialContent() {\n\n    const content = document.getElementById('content');\n    \n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('titleDiv')\n    const title = document.createElement('h1');\n    title.textContent = 'HomePage';\n    titleDiv.style.display = 'flex';\n    titleDiv.style.justifyContent = 'center';\n    titleDiv.style.alignItems = 'center';\n\n    const homeContent = document.createElement('div');\n    homeContent.textContent = 'Welcome to Our Restaurant Discover the finest dining experience in town.'\n    \n    \n    content.appendChild(titleDiv);\n    titleDiv.appendChild(title);\n    content.append(homeContent);\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInitialContent);\n\n//# sourceURL=webpack://project-restaurant-page/./src/initialLoad.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuPageContent() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    content.style.height = 'auto';\n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('titleDiv')\n    const title = document.createElement('h1');\n    title.textContent = 'Menu';\n    titleDiv.style.display = 'flex';\n    titleDiv.style.justifyContent = 'center';\n    titleDiv.style.alignItems = 'center';\n\n    const menuItem = document.createElement(\"div\");\n    const menu = {\n        meals: [\n            {\n                title: \"Eggs with Sucuk\",\n                description: \"Eggs with Sucuk (Sucuklu Yumurta): A flavorful Turkish dish combining succulent sucuk sausage and eggs, delivering a hearty and satisfying meal.\",\n                price: 12.99,\n                image: \"./eggwsucuk.jpeg\" \n            },\n            {\n                title: \"Menemen\",\n                description: \"Menemen: A delicious Turkish dish made with tomatoes, peppers, and eggs, creating a flavorful and satisfying breakfast or brunch option.\",\n                price: 9.99,\n                image: \"./menemen.jpg\" \n            },\n            {\n                title: \"Iskender\",\n                description: \"Iskender: A classic Turkish dish featuring tender slices of grilled meat atop a bed of bread, drizzled with tangy tomato sauce and creamy yogurt, delivering a savory and indulgent culinary experience.\",\n                price: 10.99,\n                image: \"./iskender.jpg\" \n            }\n        ]\n    };\n    titleDiv.append(title)\n    content.appendChild(titleDiv);\n    content.append(menuItem);\n    for (let i = 0; i < menu.meals.length; i++) {\n        const meal = menu.meals[i];\n\n        const mealDiv = document.createElement('div');\n        const title = document.createElement('h2');\n        const description = document.createElement('p');\n        const price = document.createElement('p');\n        const image = document.createElement('img');\n    \n\n        title.textContent = meal.title;\n        description.textContent = meal.description;\n        price.textContent = `$${meal.price.toFixed(2)}`;\n        image.src = meal.image;\n        image.style.width = '200px'; \n    \n        mealDiv.appendChild(title);\n        mealDiv.appendChild(description);\n        mealDiv.appendChild(price);\n        mealDiv.appendChild(image);\n    \n        content.appendChild(mealDiv);\n    }\n\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPageContent);\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;