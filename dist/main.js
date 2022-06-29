/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\r\n\r\nfetch(api, {\r\n  method: 'POST',\r\n  body: JSON.stringify({\r\n    name: 'My cool new game',\r\n  }),\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n});\r\n\r\nconst form = document.querySelector('#leader_form');\r\nconst userName = document.querySelector('#userName');\r\nconst userScore = document.querySelector('#userScore');\r\n\r\nconst newScoreAndUser = async () => {\r\n  await fetch(`${api}games/Zl4d7IVkemOTTVg2fUdz/scores/`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      user: userName.value,\r\n      score: userScore.value,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  newScoreAndUser();\r\n  form.reset();\r\n});\r\n\r\n// Display the Data\r\n\r\nconst scoresList = document.querySelector('.lead_list');\r\n\r\nconst display = (data) => {\r\n  scoresList.innerHTML = '';\r\n  data.forEach((item) => {\r\n    scoresList.innerHTML += `<li>${item.user}:${item.score}</li>`;\r\n  });\r\n};\r\n\r\n// GET Data to API\r\n\r\nconst refreshBtn = document.querySelector('.refresh_btn');\r\n\r\nconst getScoresList = async () => {\r\n  const getScrores = await fetch(`${api}games/Zl4d7IVkemOTTVg2fUdz/scores/`);\r\n  const reponse = await getScrores.json();\r\n  const data = JSON.parse(JSON.stringify(reponse));\r\n  display(data.result);\r\n};\r\n\r\nrefreshBtn.addEventListener('click', getScoresList);\r\n\r\n// Window onLoad\r\n\r\nwindow.onload = getScoresList();\n\n//# sourceURL=webpack://leaderboard-list-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;