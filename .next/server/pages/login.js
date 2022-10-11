"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/LoginForm/index.js":
/*!***************************************!*\
  !*** ./components/LoginForm/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.js\");\n\n\n\nclass LoginForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    state = {\n        email: \"\",\n        password: \"\"\n    };\n    handleChange = (e)=>{\n        this.setState((prevState)=>({\n                ...prevState,\n                [e.target.name]: e.target.value\n            }));\n    };\n    handleSubmit = (e)=>{\n        e.preventDefault();\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.loginUser)(this.state.email, this.state.password);\n    };\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: this.handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"test@mail.com\",\n                        onChange: this.handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        onChange: this.handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/components/LoginForm/index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNlO0FBRXpDLE1BQU1FLFNBQVMsU0FBU0Ysd0RBQWU7SUFDbkNJLEtBQUssR0FBRztRQUNKQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7SUFFRkMsWUFBWSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUNsQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxTQUFTLEdBQU07Z0JBQzFCLEdBQUdBLFNBQVM7Z0JBQ1osQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSixDQUFDLENBQUNHLE1BQU0sQ0FBQ0UsS0FBSzthQUNsQyxFQUFFLENBQUM7SUFDUixDQUFDLENBQUM7SUFFRkMsWUFBWSxHQUFHLENBQUNOLENBQUMsR0FBSztRQUNsQkEsQ0FBQyxDQUFDTyxjQUFjLEVBQUUsQ0FBQztRQUNuQmQsb0RBQVMsQ0FBQyxJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUM7SUFFRlUsTUFBTSxHQUFHO1FBQ0wscUJBQ0ksOERBQUNDLE1BQUk7WUFBQ0MsUUFBUSxFQUFFLElBQUksQ0FBQ0osWUFBWTs7OEJBQzdCLDhEQUFDSyxLQUFHOzhCQUNBLDRFQUFDQyxPQUFLO3dCQUNGQyxJQUFJLEVBQUMsT0FBTzt3QkFDWlQsSUFBSSxFQUFDLE9BQU87d0JBQ1pVLFdBQVcsRUFBQyxlQUFlO3dCQUMzQkMsUUFBUSxFQUFFLElBQUksQ0FBQ2hCLFlBQVk7Ozs7OzRCQUM3Qjs7Ozs7d0JBQ0E7OEJBQ04sOERBQUNZLEtBQUc7OEJBQ0EsNEVBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDVCxJQUFJLEVBQUMsVUFBVTt3QkFBQ1csUUFBUSxFQUFFLElBQUksQ0FBQ2hCLFlBQVk7Ozs7OzRCQUFJOzs7Ozt3QkFDcEU7OEJBQ04sOERBQUNZLEtBQUc7OEJBQ0EsNEVBQUNLLFFBQU07d0JBQUNILElBQUksRUFBQyxRQUFRO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDbkM7Ozs7OztnQkFDSCxDQUNUO0lBQ047Q0FDSDtBQUNELGlFQUFlbkIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LmpzPzkwZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7bG9naW5Vc2VyfSBmcm9tICcuLi8uLi9saWIvYXV0aCc7XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbG9naW5Vc2VyKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRlc3RAbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9naW5Vc2VyIiwiTG9naW5Gb3JtIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm/index.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser)\n/* harmony export */ });\nconst axios = (__webpack_require__(/*! axios */ \"axios\")[\"default\"]);\nconst loginUser = async (email, password)=>{\n    const { data  } = await axios.post(\"/api/login\", {\n        email,\n        password\n    });\n    console.log(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxzREFBd0I7QUFFL0IsTUFBTUUsU0FBUyxHQUFHLE9BQU9DLEtBQUssRUFBRUMsUUFBUSxHQUFLO0lBQ2hELE1BQU0sRUFBQ0MsSUFBSSxHQUFDLEdBQUcsTUFBTU4sS0FBSyxDQUFDTyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQUNILEtBQUs7UUFBRUMsUUFBUTtLQUFDLENBQUM7SUFDaEVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywge2VtYWlsLCBwYXNzd29yZH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0IiwibG9naW5Vc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm/index.js\");\n\n\nconst Login = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/michelekempinsky2/Development/projects/next-cookie-auth/pages/login.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZ0Q7QUFFaEQsTUFBTUMsS0FBSyxHQUFHLElBQU07SUFDaEIscUJBQU8sOERBQUNELDZEQUFTOzs7O2lCQUFHLENBQUM7QUFDekIsQ0FBQztBQUNELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxMb2dpbkZvcm0gLz47XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();