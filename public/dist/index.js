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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ InvalidTokenError),\n/* harmony export */   jwtDecode: () => (/* binding */ jwtDecode)\n/* harmony export */ });\nclass InvalidTokenError extends Error {\n}\nInvalidTokenError.prototype.name = \"InvalidTokenError\";\nfunction b64DecodeUnicode(str) {\n    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {\n        let code = p.charCodeAt(0).toString(16).toUpperCase();\n        if (code.length < 2) {\n            code = \"0\" + code;\n        }\n        return \"%\" + code;\n    }));\n}\nfunction base64UrlDecode(str) {\n    let output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch (output.length % 4) {\n        case 0:\n            break;\n        case 2:\n            output += \"==\";\n            break;\n        case 3:\n            output += \"=\";\n            break;\n        default:\n            throw new Error(\"base64 string is not of the correct length\");\n    }\n    try {\n        return b64DecodeUnicode(output);\n    }\n    catch (err) {\n        return atob(output);\n    }\n}\nfunction jwtDecode(token, options) {\n    if (typeof token !== \"string\") {\n        throw new InvalidTokenError(\"Invalid token specified: must be a string\");\n    }\n    options || (options = {});\n    const pos = options.header === true ? 0 : 1;\n    const part = token.split(\".\")[pos];\n    if (typeof part !== \"string\") {\n        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);\n    }\n    let decoded;\n    try {\n        decoded = base64UrlDecode(part);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);\n    }\n    try {\n        return JSON.parse(decoded);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);\n    }\n}\n\n\n//# sourceURL=webpack://ecommerceapp/./node_modules/jwt-decode/build/esm/index.js?");

/***/ }),

/***/ "./public/beveragesData.mjs":
/*!**********************************!*\
  !*** ./public/beveragesData.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   beverages: () => (/* binding */ beverages),\n/* harmony export */   getDataByPageAndCategory: () => (/* binding */ getDataByPageAndCategory),\n/* harmony export */   getTotalPages: () => (/* binding */ getTotalPages),\n/* harmony export */   topFiveBeveragesByRank: () => (/* binding */ topFiveBeveragesByRank)\n/* harmony export */ });\nconst beverages = [\n  {\n    \"title\": \"Black Coffee\",\n    \"image\": \"https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 1,\n    \"price\": 128,\n    \"category\": \"coffee\",\n    \"rank\": 10,\n  },\n  {\n    \"title\": \"Latte\",\n    \"image\": \"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww\",\n    \"id\": 2,\n    \"price\": 204,\n    \"category\": \"coffee\",\n    \"rank\": 1,\n  },\n  {\n    \"title\": \"Caramel Latte\",\n    \"image\": \"https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 3,\n    \"price\": 224,\n    \"category\": \"coffee\",\n    \"rank\": 7,\n  },\n  {\n    \"title\": \"Cappuccino\",\n    \"image\": \"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 4,\n    \"price\": 92,\n    \"category\": \"coffee\",\n    \"rank\": 2,\n  },\n  {\n    \"title\": \"Americano\",\n    \"image\": \"https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 5,\n    \"price\": 61,\n    \"category\": \"coffee\",\n    \"rank\": 3,\n  },\n  {\n    \"title\": \"Espresso\",\n\n    \"image\": \"https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 6,\n    \"price\": 137,\n    \"category\": \"coffee\",\n    \"rank\": 4,\n  },\n  {\n    \"title\": \"Macchiato\",\n    \"image\": \"https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 7,\n    \"price\": 192,\n    \"category\": \"coffee\",\n    \"rank\": 6,\n  },\n  {\n    \"title\": \"Mocha\",\n\n    \"image\": \"https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n    \"id\": 8,\n    \"price\": 93,\n    \"category\": \"coffee\",\n    \"rank\": 5,\n  },\n  {\n    \"title\": \"Hot Chocolate\",\n\n    \"image\": \"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D\",\n    \"id\": 9,\n    \"price\": 99,\n    \"category\": \"hot_beverage\",\n    \"rank\": 13,\n  },\n  {\n    \"title\": \"Chai Latte\",\n\n    \"image\": \"https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D\",\n    \"id\": 10,\n    \"price\": 89,\n    \"category\": \"hot_beverage\",\n    \"rank\": 11,\n  },\n  {\n    \"title\": \"Matcha Latte\",\n\n    \"image\": \"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D\",\n    \"id\": 11,\n    \"price\": 240,\n    \"category\": \"hot_beverage\",\n    \"rank\": 12,\n  },\n  {\n    \"title\": \"Seasonal Brew\",\n\n    \"image\": \"https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D\",\n    \"id\": 12,\n    \"price\": 269,\n    \"category\": \"seasonal\",\n    \"rank\": 16,\n  },\n  {\n    \"title\": \"Svart Te\",\n\n    \"image\": \"https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D\",\n    \"id\": 13,\n    \"price\": 63,\n    \"category\": \"tea\",\n    \"rank\": 18,\n  },\n  {\n    \"title\": \"Islatte\",\n\n    \"image\": \"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww\",\n    \"id\": 14,\n    \"price\": 255,\n    \"category\": \"coffee\",\n    \"rank\": 9,\n  },\n  {\n    \"title\": \"Islatte Mocha\",\n\n    \"image\": \"https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww\",\n    \"id\": 15,\n    \"price\": 52,\n    \"category\": \"coffee\",\n    \"rank\": 8,\n  },\n  {\n    \"title\": \"Frapino Caramel\",\n\n    \"image\": \"https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D\",\n    \"id\": 16,\n    \"price\": 56,\n    \"category\": \"cold_beverage\",\n    \"rank\": 14,\n  },\n  {\n    \"title\": \"Frapino Mocka\",\n\n    \"image\": \"https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww\",\n    \"id\": 17,\n    \"price\": 107,\n    \"category\": \"cold_beverage\",\n    \"rank\": 15,\n  },\n  {\n    \"title\": \"Apelsinjuice\",\n\n    \"image\": \"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww\",\n    \"id\": 18,\n    \"price\": 287,\n    \"category\": \"cold_beverage\",\n    \"rank\": 22,\n  },\n  {\n    \"title\": \"Frozen Lemonade\",\n\n    \"image\": \"https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9uYWRlJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D\",\n    \"id\": 19,\n    \"price\": 242,\n    \"category\": \"cold_beverage\",\n    \"rank\": 23,\n  },\n  {\n    \"title\": \"Lemonad\",\n\n    \"image\": \"https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D\",\n    \"id\": 20,\n    \"price\": 249,\n    \"category\": \"cold_beverage\",\n    \"rank\": 24,\n  }\n];\nconst topFiveBeveragesByRank = beverages\n  .slice() // Create a shallow copy of the array to avoid mutating the original\n  .sort((a, b) => a.rank - b.rank) // Sort the array by rank in ascending order\n  .slice(0, 5); // Slice the sorted array to only include the first 5 elements\n// console.log(topFiveBeveragesByRank);\n\n/* ------------------------------- pagination ------------------------------- */\nconst ITEMS_PER_PAGE = 3;\n\nfunction getTotalPages(data) {\n  \n  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);\n  return totalPages;\n}\n\nfunction getDataByPageAndCategory(page, category) {\n  let data;\n  if (category === 'all') {\n    data = beverages;\n  } else {\n    data = beverages.filter(beverage => beverage.category === category);\n  }\n  const offset = (page - 1) * ITEMS_PER_PAGE;\n  return { partition: data.slice(offset, offset + ITEMS_PER_PAGE), length: getTotalPages(data) };\n}\n\n\n\n\n//# sourceURL=webpack://ecommerceapp/./public/beveragesData.mjs?");

/***/ }),

/***/ "./public/index.mjs":
/*!**************************!*\
  !*** ./public/index.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _beveragesData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beveragesData.mjs */ \"./public/beveragesData.mjs\");\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ \"./public/utils.mjs\");\n\nconst beverageContainer = document.getElementById('beverageContainer');\n\n\n(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.initializeCartUI)();\nconst displayBeverages = async () => {\n\n  _beveragesData_mjs__WEBPACK_IMPORTED_MODULE_0__.topFiveBeveragesByRank.map(beverage => {\n    const form = document.createElement('form');\n\n    const addToCartButton = document.createElement('button');\n    addToCartButton.innerText = 'Add to cart';\n\n    addToCartButton.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.addToCart)({ ...beverage });\n\n      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.updateUICartIcon)();\n    });\n\n    form.innerHTML = `\n          <img height='170' src=${beverage.image}>\n          <h4>${beverage.title}</h4>\n          <p>$${beverage.price}.00</p>\n        `;\n    form.appendChild(addToCartButton);\n    beverageContainer.appendChild(form);\n  });\n}\ndisplayBeverages();\n\n//# sourceURL=webpack://ecommerceapp/./public/index.mjs?");

/***/ }),

/***/ "./public/utils.mjs":
/*!**************************!*\
  !*** ./public/utils.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: () => (/* binding */ addToCart),\n/* harmony export */   clearPaginationContainer: () => (/* binding */ clearPaginationContainer),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createPaginationButton: () => (/* binding */ createPaginationButton),\n/* harmony export */   getCartItemsFromLocalStorage: () => (/* binding */ getCartItemsFromLocalStorage),\n/* harmony export */   initializeCartUI: () => (/* binding */ initializeCartUI),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   loadImages: () => (/* binding */ loadImages),\n/* harmony export */   onSignOut: () => (/* binding */ onSignOut),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),\n/* harmony export */   updatePageAndCategory: () => (/* binding */ updatePageAndCategory),\n/* harmony export */   updateUICartIcon: () => (/* binding */ updateUICartIcon)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\n\n// Function to load images into a container\nfunction loadImages(data) {\n  const imageContainer = document.getElementById('loadImages');\n\n  data.forEach(item => {\n    const imageForm = document.createElement('form');\n    imageForm.innerHTML = `<img height='170' src=${item.image}>`;\n    imageContainer.appendChild(imageForm);\n  });\n}\n\n// Function to update URL with page and category query parameters\nfunction updatePageAndCategory(page, category) {\n  const url = new URL(window.location.href);\n  url.searchParams.set('page', page);\n  url.searchParams.set('category', category);\n  window.history.pushState({}, '', url);\n}\n\n// Function to clear the contents of a pagination container\nfunction clearPaginationContainer() {\n  const paginationContainer = document.getElementById('paginationDivContainer');\n  paginationContainer.innerHTML = '';\n}\n\n// Function to create a button element\nfunction createButton(text) {\n  const button = document.createElement('button');\n  button.textContent = text;\n  return button;\n}\n\n// Function to check if a user is authenticated\nfunction isAuthenticated() {\n  const token = localStorage.getItem('authToken');\n  \n  if (!token) {\n    return false;\n  }\n  \n  try {\n    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);\n    const currentTime = Date.now() / 1000; // current time in seconds\n\n    return decodedToken.exp >= currentTime;\n  } catch (error) {\n    console.error('Invalid token:', error);\n    return false;\n  }\n}\n\n// Function to update the cart icon with the total quantity of items\nfunction updateUICartIcon() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to initialize the cart UI with the current total quantity\nfunction initializeCartUI() {\n  const cartCountDiv = document.getElementById('count');\n  cartCountDiv.textContent = getTotalCartQuantity();\n}\n\n// Function to add an item to the cart\nfunction addToCart(item) {\n  item.quantity = 1;\n  const cartItems = getCartItemsFromLocalStorage();\n  const updatedCartItems = addOrUpdateCartItem(cartItems, item);\n\n  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));\n}\n\n// Function to get cart items from local storage\nfunction getCartItemsFromLocalStorage() {\n  const storedCartItems = localStorage.getItem('cartItems');\n  return JSON.parse(storedCartItems) || [];\n}\n\nfunction updateLocalStorage(cartItem, quantity) {\n  const cartItems = getCartItemsFromLocalStorage();\n  const matchedItem = cartItems.find(item => item.title === cartItem.title);\n\n  matchedItem.quantity = quantity;\n  localStorage.setItem('cartItems', JSON.stringify(cartItems));\n}\n\n// Helper function to add or update an item in the cart\nfunction addOrUpdateCartItem(cartItems, newItem) {\n  const existingItem = cartItems.find(item => item.title === newItem.title);\n\n  if (existingItem) {\n    existingItem.quantity += newItem.quantity;\n  } else {\n    cartItems.push(newItem);\n  }\n  return cartItems;\n}\n\n// Helper function to get the total quantity of items in the cart\nfunction getTotalCartQuantity() {\n  const cartItems = getCartItemsFromLocalStorage();\n\n  return cartItems.reduce((total, item) => total + item.quantity, 0);\n}\n\nasync function onSignOut() {\n  try {\n    const cartItems = getCartItemsFromLocalStorage();\n\n    // save cart items if greater than zero\n    if (cartItems.length > 0) {\n      const response = await fetch('/user/cart/save', {\n        method: 'POST',\n        credentials: 'include',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ cartItems }),\n      });\n\n      if (!response.ok) throw new Error('Failed to save data to server');\n    }\n    localStorage.removeItem('cartItems');\n    localStorage.removeItem('authToken');\n    localStorage.removeItem('deliveryInfo');\n    window.location.href = \"http://localhost:3000/\";\n\n\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\n// Create a pagination button with a click listener\nfunction createPaginationButton(content, callback) {\n  const button = createButton(content);\n  button.addEventListener('click', callback);\n  return button;\n}\n\n//# sourceURL=webpack://ecommerceapp/./public/utils.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/index.mjs");
/******/ 	
/******/ })()
;