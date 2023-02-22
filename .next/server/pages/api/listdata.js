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
exports.id = "pages/api/listdata";
exports.ids = ["pages/api/listdata"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./Model/db.js":
/*!*********************!*\
  !*** ./Model/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar con = mysql.createConnection({\n    host: \"192.168.2.8\",\n    user: \"trainee\",\n    password: \"trainee@123\",\n    database: \"trainee\"\n});\ncon.connect(function(err) {\n    if (err) throw err;\n    console.log(\"Database Connected\");\n});\nconst queryRunner = (query)=>{\n    return new Promise((resolve, reject)=>{\n        con.query(query, (err, result)=>{\n            if (err) return reject(err);\n            resolve(result);\n        });\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    queryRunner\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb2RlbC9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBS0MsbUJBQU9BLENBQUMsY0FBSTtBQUN2QixJQUFJQyxRQUFRRCxtQkFBT0EsQ0FBQyxvQkFBTztBQUUzQixJQUFJRSxNQUFNRCxNQUFNRSxnQkFBZ0IsQ0FBQztJQUMvQkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsVUFBVTtBQUNaO0FBRUFMLElBQUlNLE9BQU8sQ0FBQyxTQUFVQyxHQUFHLEVBQUU7SUFDekIsSUFBSUEsS0FBSyxNQUFNQSxJQUFJO0lBQ25CQyxRQUFRQyxHQUFHLENBQUM7QUFDZDtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0MsUUFBVTtJQUM3QixPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUN0Q2QsSUFBSVcsS0FBSyxDQUFDQSxPQUFPLENBQUNKLEtBQUtRLFNBQVc7WUFDaEMsSUFBSVIsS0FBSyxPQUFPTyxPQUFPUDtZQUN2Qk0sUUFBUUU7UUFDVjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZTtJQUFDTDtBQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsdGVzdC8uL01vZGVsL2RiLmpzP2M1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbnZhciBteXNxbCA9IHJlcXVpcmUoXCJteXNxbFwiKTtcclxuXHJcbnZhciBjb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICBob3N0OiBcIjE5Mi4xNjguMi44XCIsXHJcbiAgdXNlcjogXCJ0cmFpbmVlXCIsXHJcbiAgcGFzc3dvcmQ6IFwidHJhaW5lZUAxMjNcIixcclxuICBkYXRhYmFzZTogXCJ0cmFpbmVlXCIsXHJcbn0pO1xyXG5cclxuY29uLmNvbm5lY3QoZnVuY3Rpb24gKGVycikge1xyXG4gIGlmIChlcnIpIHRocm93IGVycjtcclxuICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIENvbm5lY3RlZFwiKTtcclxufSk7XHJcblxyXG5jb25zdCBxdWVyeVJ1bm5lciA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb24ucXVlcnkocXVlcnksIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge3F1ZXJ5UnVubmVyfTtcclxuIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm15c3FsIiwiY29uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicXVlcnlSdW5uZXIiLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./Model/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/listdata.js":
/*!*******************************!*\
  !*** ./pages/api/listdata.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _Model_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/db */ \"(api)/./Model/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            try {\n                let query = `select * from users19 where isactive=1`;\n                const ans1 = await _Model_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].queryRunner(query);\n                res.send(ans1);\n            } catch (err) {\n                console.log(err);\n            }\n            break;\n        case \"POST\":\n            try {\n                const id = req.body.id;\n                console.log(id);\n                const query = `select * from users19 where isactive=1\"`;\n                // console.log(results);      \n                res.send(ans);\n            } catch (err) {\n                console.log(err);\n            }\n            break;\n        default:\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdGRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFFbEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsT0FBUUQsSUFBSUUsTUFBTTtRQUNkLEtBQUs7WUFDSixJQUFHO2dCQUNFLElBQUlDLFFBQU0sQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDN0MsTUFBTUMsT0FBSyxNQUFNTiw2REFBZSxDQUFDSztnQkFDckNGLElBQUlLLElBQUksQ0FBQ0Y7WUFDWixFQUNKLE9BQU1HLEtBQUk7Z0JBQ0NDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZjtZQUNBLEtBQU07UUFDWCxLQUFLO1lBQ0osSUFBRztnQkFDQSxNQUFNRyxLQUFLVixJQUFJVyxJQUFJLENBQUNELEVBQUU7Z0JBQ2xCRixRQUFRQyxHQUFHLENBQUNDO2dCQUNaLE1BQU1QLFFBQU0sQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDNUMsOEJBQThCO2dCQUN2Q0YsSUFBSUssSUFBSSxDQUFDRjtZQUNULEVBQ1IsT0FBTUcsS0FBSTtnQkFDRUMsUUFBUUMsR0FBRyxDQUFDRjtZQUNmO1lBQ0EsS0FBTTtRQUNKO1lBQ0FOLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVYLE9BQU8sWUFBWSxDQUFDO1lBQ2hELEtBQU07SUFDM0I7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWx0ZXN0Ly4vcGFnZXMvYXBpL2xpc3RkYXRhLmpzP2I1NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbiBmcm9tIFwiLi4vLi4vTW9kZWwvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgc3dpdGNoIChyZXEubWV0aG9kKSB7IFxyXG4gICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICB0cnl7ICAgXHJcbiAgICAgICAgICAgICBsZXQgcXVlcnk9YHNlbGVjdCAqIGZyb20gdXNlcnMxOSB3aGVyZSBpc2FjdGl2ZT0xYDtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgYW5zPSBhd2FpdCBjb24ucXVlcnlSdW5uZXIocXVlcnkpOyAgIFxyXG4gICAgICAgICAgICAgIHJlcy5zZW5kKGFucyk7ICBcclxuICAgICAgICAgICB9IFxyXG4gICAgICAgY2F0Y2goZXJyKXsgICAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycikgICAgIFxyXG4gICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgICBjYXNlICdQT1NUJzogICBcclxuICAgICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVxLmJvZHkuaWQ7ICBcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpICAgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeT1gc2VsZWN0ICogZnJvbSB1c2VyczE5IHdoZXJlIGlzYWN0aXZlPTFcImAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICByZXMuc2VuZChhbnMpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgY2F0Y2goZXJyKXsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpICAgXHJcbiAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJjb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJhbnMiLCJxdWVyeVJ1bm5lciIsInNlbmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJib2R5Iiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/listdata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listdata.js"));
module.exports = __webpack_exports__;

})();