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

/***/ "./node_modules/jwt-decode/build/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/jwt-decode/build/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ InvalidTokenError),\n/* harmony export */   jwtDecode: () => (/* binding */ jwtDecode)\n/* harmony export */ });\nclass InvalidTokenError extends Error {\n}\nInvalidTokenError.prototype.name = \"InvalidTokenError\";\nfunction b64DecodeUnicode(str) {\n    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {\n        let code = p.charCodeAt(0).toString(16).toUpperCase();\n        if (code.length < 2) {\n            code = \"0\" + code;\n        }\n        return \"%\" + code;\n    }));\n}\nfunction base64UrlDecode(str) {\n    let output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch (output.length % 4) {\n        case 0:\n            break;\n        case 2:\n            output += \"==\";\n            break;\n        case 3:\n            output += \"=\";\n            break;\n        default:\n            throw new Error(\"base64 string is not of the correct length\");\n    }\n    try {\n        return b64DecodeUnicode(output);\n    }\n    catch (err) {\n        return atob(output);\n    }\n}\nfunction jwtDecode(token, options) {\n    if (typeof token !== \"string\") {\n        throw new InvalidTokenError(\"Invalid token specified: must be a string\");\n    }\n    options || (options = {});\n    const pos = options.header === true ? 0 : 1;\n    const part = token.split(\".\")[pos];\n    if (typeof part !== \"string\") {\n        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);\n    }\n    let decoded;\n    try {\n        decoded = base64UrlDecode(part);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);\n    }\n    try {\n        return JSON.parse(decoded);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);\n    }\n}\n\n\n//# sourceURL=webpack://ecommercekittens/./node_modules/jwt-decode/build/esm/index.js?");

/***/ }),

/***/ "./public/checkout.mjs":
/*!*****************************!*\
  !*** ./public/checkout.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./public/utils.mjs\");\n\n\nconst cartItems = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.getCartItemsFromLocalStorage)();\n\nconst cartItemsContainer = document.getElementById('cartItems');\n\ncartItems.map((cartItem) => {\n  const form = document.createElement('form');\n\n  form.innerHTML = `\n    <img  width=\"100\" src=\"${cartItem.image}\">\n    <h4>${cartItem.title}</h4>\n    <p>Price: $${cartItem.price}</p>\n    <p>Quantity: ${cartItem.quantity}</p>\n    <p>Subtotal: $${cartItem.quantity * cartItem.price}</p>\n  `;\n  cartItemsContainer.appendChild(form);\n});\n\nconst form = document.getElementById('form');\nconst name = document.getElementById('name');\nconst phone = document.getElementById('phone');\nconst address = document.getElementById('address');\n\nif (getDeliveryInfoFromLocalstorage() !== null) {\n  const infoDelivery = getDeliveryInfoFromLocalstorage();\n  name.value = infoDelivery.name;\n  phone.value = infoDelivery.phone;\n  address.value = infoDelivery.address;\n}\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const deliveryInputs = { name: name.value, phone: phone.value, address: address.value }\n\n  saveToLocalStorage(deliveryInputs);\n  alert(\"Your order has been successfully placed! Thank you for shopping with us.\")\n  window.location.href = 'http://localhost:3000/';\n});\n\nfunction saveToLocalStorage(inputs) {\n  localStorage.setItem('deliveryInfo', JSON.stringify(inputs))\n}\n\nfunction getDeliveryInfoFromLocalstorage() {\n  let deliveryInfo = localStorage.getItem('deliveryInfo');\n  if (deliveryInfo !== null) {\n    deliveryInfo = JSON.parse(deliveryInfo);\n    return deliveryInfo;\n  } else {\n    return null;\n  }\n}\n\n//# sourceURL=webpack://ecommercekittens/./public/checkout.mjs?");

/***/ }),

/***/ "./public/utils.mjs":
/*!**************************!*\
  !*** ./public/utils.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: () => (/* binding */ addToCart),\n/* harmony export */   clearPaginationContainer: () => (/* binding */ clearPaginationContainer),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createPaginationButton: () => (/* binding */ createPaginationButton),\n/* harmony export */   getCartItemsFromLocalStorage: () => (/* binding */ getCartItemsFromLocalStorage),\n/* harmony export */   initializeCartUI: () => (/* binding */ initializeCartUI),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   loadImages: () => (/* binding */ loadImages),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),\n/* harmony export */   updatePageAndCategory: () => (/* binding */ updatePageAndCategory),\n/* harmony export */   updateUICartIcon: () => (/* binding */ updateUICartIcon)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\n\n// Function to load images into a container\nfunction loadImages(data) {\n  const imageContainer = document.getElementById('loadImages');\n\n  data.forEach(item => {\n    const imageForm = document.createElement('form');\n    imageForm.innerHTML = `<img height='170' src=${item.image}>`;\n    imageContainer.appendChild(imageForm);\n  });\n}\n\n// Function to update URL with page and category query parameters\nfunction updatePageAndCategory(page, category) {\n  const url = new URL(window.location.href);\n  url.searchParams.set('page', page);\n  url.searchParams.set('category', category);\n  window.history.pushState({}, '', url);\n}\n\n// Function to clear the contents of a pagination container\nfunction clearPaginationContainer() {\n  const paginationContainer = document.getElementById('paginationDivContainer');\n  paginationContainer.innerHTML = '';\n}\n\n// Function to create a button element\nfunction createButton(text) {\n  const button = document.createElement('button');\n  button.textContent = text;\n  return button;\n}\n\n// Function to check if a user is authenticated\nfunction isAuthenticated() {\n  const token = localStorage.getItem('authToken');\n  \n  if (!token) {\n    return false;\n  }\n  \n  try {\n    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);\n    const currentTime = Date.now() / 1000; // current time in seconds\n\n    return decodedToken.exp >= currentTime;\n  } catch (error) {\n    console.error('Invalid token:', error);\n    return false;\n  }\n}\n\n// Function to update the cart icon with the total quantity of items\nfunction updateUICartIcon() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to initialize the cart UI with the current total quantity\nfunction initializeCartUI() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to add an item to the cart\nfunction addToCart(item) {\n  item.quantity = 1;\n  const cartItems = getCartItemsFromLocalStorage();\n  const updatedCartItems = addOrUpdateCartItem(cartItems, item);\n\n  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));\n}\n\n// Function to get cart items from local storage\nfunction getCartItemsFromLocalStorage() {\n  const storedCartItems = localStorage.getItem('cartItems');\n  return JSON.parse(storedCartItems) || [];\n}\n\nfunction updateLocalStorage(cartItem, quantity) {\n  const cartItems = getCartItemsFromLocalStorage();\n  const matchedItem = cartItems.find(item => item.title === cartItem.title);\n\n  matchedItem.quantity = quantity;\n  localStorage.setItem('cartItems', JSON.stringify(cartItems));\n}\n\n// Helper function to add or update an item in the cart\nfunction addOrUpdateCartItem(cartItems, newItem) {\n  const existingItem = cartItems.find(item => item.title === newItem.title);\n\n  if (existingItem) {\n    existingItem.quantity += newItem.quantity;\n  } else {\n    cartItems.push(newItem);\n  }\n  return cartItems;\n}\n\n// Helper function to get the total quantity of items in the cart\nfunction getTotalCartQuantity() {\n  const cartItems = getCartItemsFromLocalStorage();\n\n  return cartItems.reduce((total, item) => total + item.quantity, 0);\n}\n\n// Create a pagination button with a click listener\nfunction createPaginationButton(content, callback) {\n  const button = createButton(content);\n  button.addEventListener('click', callback);\n  return button;\n}\n\n//# sourceURL=webpack://ecommercekittens/./public/utils.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/checkout.mjs");
/******/ 	
/******/ })()
;