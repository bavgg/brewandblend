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

/***/ "./public/header.mjs":
/*!***************************!*\
  !*** ./public/header.mjs ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./public/utils.mjs\");\nconst svgLogo =\n  `\n  <svg height=\"80px\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#646D76\">\n    <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n    <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n    <g id=\"SVGRepo_iconCarrier\">\n      <title></title>\n      <g id=\"teaLogo\">\n        <ellipse cx=\"28\" cy=\"29\" rx=\"25\" ry=\"6\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></ellipse>\n        <path d=\"M6,43A27.85,27.85,0,0,1,3,30V29\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <path d=\"M53,29v1c0,15.46-11.19,26-25,26a25.2,25.2,0,0,1-12-3\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <path d=\"M53,34a7.64,7.64,0,0,1,5-2,2.65,2.65,0,0,1,3,3v1a9,9,0,0,1-9,9s-3,0-4,1\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <path d=\"M43,51c4.31,1.28,7,3,7,5,0,3.87-9.85,7-22,7a53.81,53.81,0,0,1-15.4-2\"\n          style=\"fill:none;stroke:#646D76;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <polygon points=\"16 45 16 61 4 61 4 45 7 42 13 42 16 45\"\n          style=\"fill:none;stroke:#646D76;stroke-linejoin:round;stroke-width:2px\"></polygon>\n        <path d=\"M10,46V33a4,4,0,0,1,8,0v1\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"></path>\n        <circle cx=\"10\" cy=\"46\" r=\"2\"></circle>\n        <path d=\"M30,1c0,4.5-4,4.5-4,9s4,4.5,4,9\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <path d=\"M11,5c0,4-4,4-4,8s4,4,4,8\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <path d=\"M47,5c0,4-4,4-4,8s4,4,4,8\"\n          style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"></path>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"40\" x2=\"41\" y1=\"3\" y2=\"2\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"37\" x2=\"36\" y1=\"3\" y2=\"2\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"37\" x2=\"36\" y1=\"6\" y2=\"7\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"40\" x2=\"41\" y1=\"6\" y2=\"7\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"56\" x2=\"57\" y1=\"18\" y2=\"17\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"53\" x2=\"52\" y1=\"18\" y2=\"17\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"53\" x2=\"52\" y1=\"21\" y2=\"22\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"56\" x2=\"57\" y1=\"21\" y2=\"22\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"19\" x2=\"20\" y1=\"11\" y2=\"10\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"16\" x2=\"15\" y1=\"11\" y2=\"10\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"16\" x2=\"15\" y1=\"14\" y2=\"15\"></line>\n        <line style=\"fill:none;stroke:#646D76;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px\"\n          x1=\"19\" x2=\"20\" y1=\"14\" y2=\"15\"></line>\n      </g>\n    </g>\n  </svg>\n`;\nconst svgShoppingBag =\n`\n  <style>\n  #count {\n    background-color: #0968DA;\n    color: white;\n    font-weight: 700;\n    font-size: 11px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    padding-left: 6px;\n    padding-right: 6px;\n    border-radius: 8px;\n    right: -3px;\n    bottom: 8px;\n  }\n  </style>\n  <div>\n    <div id=\"count\"></div>\n    <svg height=\"25px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n      <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n      <g id=\"SVGRepo_iconCarrier\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z\"\n          fill=\"#646D76\"></path>\n      </g>\n    </svg>\n  </div>\n`;\nconst header =\n  `\n<header>\n  <menu style=\"display: flex; align-items: center;\">\n    <div >\n      <a href=\"/\">\n        ${svgLogo}\n      </a>\n    </div>\n    <a href=\"/\">Home</a>\n    <a style=\"margin-right: auto;\"  href=\"./beverages.html\"><li>Beverages</li></a>\n\n    <a id=\"signup\" href=\"./signup.html\">Sign Up</a>\n    <a id=\"signin\" href=\"./signin.html\">Signin</a>\n    <a id=\"signout\" >Signout</a>\n    <a href=\"/cart.html\">\n      ${svgShoppingBag}\n    </a>\n  </menu>\n</header>\n`;\n\ndocument.write(header);\n\n\n\n(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.initializeCartUI)();\n\nconst renderAuthButtons = () => {\n  const signinElement = document.getElementById('signin');\n  const signupElement = document.getElementById('signup');\n  const signoutElement = document.getElementById('signout');\n\n  if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isAuthenticated)()) {\n    signinElement.style.display = 'none';\n    signupElement.style.display = 'none';\n    signoutElement.style.display = 'block';\n  } else {\n    signinElement.style.display = 'block';\n    signupElement.style.display = 'block';\n    signoutElement.style.display = 'none';\n  }\n};\n\nconst signOutElement = document.getElementById('signout');\nsignOutElement.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.onSignOut)();\n});\n\nrenderAuthButtons();\n\n//# sourceURL=webpack://ecommercekittens/./public/header.mjs?");

/***/ }),

/***/ "./public/utils.mjs":
/*!**************************!*\
  !*** ./public/utils.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: () => (/* binding */ addToCart),\n/* harmony export */   clearPaginationContainer: () => (/* binding */ clearPaginationContainer),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createPaginationButton: () => (/* binding */ createPaginationButton),\n/* harmony export */   getCartItemsFromLocalStorage: () => (/* binding */ getCartItemsFromLocalStorage),\n/* harmony export */   initializeCartUI: () => (/* binding */ initializeCartUI),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   loadImages: () => (/* binding */ loadImages),\n/* harmony export */   onSignOut: () => (/* binding */ onSignOut),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),\n/* harmony export */   updatePageAndCategory: () => (/* binding */ updatePageAndCategory),\n/* harmony export */   updateUICartIcon: () => (/* binding */ updateUICartIcon)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\n\n// Function to load images into a container\nfunction loadImages(data) {\n  const imageContainer = document.getElementById('loadImages');\n\n  data.forEach(item => {\n    const imageForm = document.createElement('form');\n    imageForm.innerHTML = `<img height='170' src=${item.image}>`;\n    imageContainer.appendChild(imageForm);\n  });\n}\n\n// Function to update URL with page and category query parameters\nfunction updatePageAndCategory(page, category) {\n  const url = new URL(window.location.href);\n  url.searchParams.set('page', page);\n  url.searchParams.set('category', category);\n  window.history.pushState({}, '', url);\n}\n\n// Function to clear the contents of a pagination container\nfunction clearPaginationContainer() {\n  const paginationContainer = document.getElementById('paginationDivContainer');\n  paginationContainer.innerHTML = '';\n}\n\n// Function to create a button element\nfunction createButton(text) {\n  const button = document.createElement('button');\n  button.textContent = text;\n  return button;\n}\n\n// Function to check if a user is authenticated\nfunction isAuthenticated() {\n  const token = localStorage.getItem('authToken');\n  \n  if (!token) {\n    return false;\n  }\n  \n  try {\n    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);\n    const currentTime = Date.now() / 1000; // current time in seconds\n\n    return decodedToken.exp >= currentTime;\n  } catch (error) {\n    console.error('Invalid token:', error);\n    return false;\n  }\n}\n\n// Function to update the cart icon with the total quantity of items\nfunction updateUICartIcon() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to initialize the cart UI with the current total quantity\nfunction initializeCartUI() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to add an item to the cart\nfunction addToCart(item) {\n  item.quantity = 1;\n  const cartItems = getCartItemsFromLocalStorage();\n  const updatedCartItems = addOrUpdateCartItem(cartItems, item);\n\n  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));\n}\n\n// Function to get cart items from local storage\nfunction getCartItemsFromLocalStorage() {\n  const storedCartItems = localStorage.getItem('cartItems');\n  return JSON.parse(storedCartItems) || [];\n}\n\nfunction updateLocalStorage(cartItem, quantity) {\n  const cartItems = getCartItemsFromLocalStorage();\n  const matchedItem = cartItems.find(item => item.title === cartItem.title);\n\n  matchedItem.quantity = quantity;\n  localStorage.setItem('cartItems', JSON.stringify(cartItems));\n}\n\n// Helper function to add or update an item in the cart\nfunction addOrUpdateCartItem(cartItems, newItem) {\n  const existingItem = cartItems.find(item => item.title === newItem.title);\n\n  if (existingItem) {\n    existingItem.quantity += newItem.quantity;\n  } else {\n    cartItems.push(newItem);\n  }\n  return cartItems;\n}\n\n// Helper function to get the total quantity of items in the cart\nfunction getTotalCartQuantity() {\n  const cartItems = getCartItemsFromLocalStorage();\n\n  return cartItems.reduce((total, item) => total + item.quantity, 0);\n}\n\nasync function onSignOut() {\n  try {\n    const cartItems = getCartItemsFromLocalStorage();\n\n    // save cart items if greater than zero\n    if (cartItems.length > 0) {\n      const response = await fetch('/user/cart/save', {\n        method: 'POST',\n        credentials: 'include',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ cartItems }),\n      });\n\n      if (!response.ok) throw new Error('Failed to save data to server');\n    }\n    localStorage.removeItem('cartItems');\n    localStorage.removeItem('authToken');\n    window.location.href = \"http://localhost:3000/\";\n\n\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\n// Create a pagination button with a click listener\nfunction createPaginationButton(content, callback) {\n  const button = createButton(content);\n  button.addEventListener('click', callback);\n  return button;\n}\n\n//# sourceURL=webpack://ecommercekittens/./public/utils.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/header.mjs");
/******/ 	
/******/ })()
;