/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sHFt.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GameObjects/player.js":
/*!*******************************!*\
  !*** ./GameObjects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//initial variables\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(ctx) {\n    _classCallCheck(this, Player);\n\n    //\n    //visual context\n    this.ctx = ctx; //\n    //constants\n\n    this.gravityCoef = 0.3;\n    this.moveSpeed = 2;\n    this.jumpSpeed = 8;\n    this.hp = 1;\n    this.acceleration = 1; //\n    //variables\n\n    this.keyRight = 0;\n    this.keyLeft = 0;\n    this.hsp = 0;\n    this.vsp = 0;\n    this.x = 30;\n    this.y = 30; //\n    //abilities\n\n    this.canQ = true;\n    this.canE = true;\n    this.canS = true;\n    this.canJump = true; //\n    //\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.beginPath();\n      this.ctx.rect(30, 30, 20, 20);\n      this.ctx.fillStyle = \"white\";\n      this.ctx.fill();\n      this.ctx.closePath();\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HYW1lT2JqZWN0cy9wbGF5ZXIuanM/YzAxNSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjdHgiLCJncmF2aXR5Q29lZiIsIm1vdmVTcGVlZCIsImp1bXBTcGVlZCIsImhwIiwiYWNjZWxlcmF0aW9uIiwia2V5UmlnaHQiLCJrZXlMZWZ0IiwiaHNwIiwidnNwIiwieCIsInkiLCJjYW5RIiwiY2FuRSIsImNhblMiLCJjYW5KdW1wIiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFFcUJBLE07OztBQUNqQixrQkFBWUMsR0FBWixFQUFnQjtBQUFBOztBQUNaO0FBQ0E7QUFDQSxTQUFLQSxHQUFMLEdBQVdBLEdBQVgsQ0FIWSxDQUlaO0FBQ0E7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixHQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCLENBVlksQ0FXWjtBQUNBOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVMsRUFBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxFQUFULENBbEJZLENBbUJaO0FBQ0E7O0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWYsQ0F4QlksQ0F5Qlo7QUFDQTtBQUNIOzs7OzJCQUVLO0FBQ0YsV0FBS2YsR0FBTCxDQUFTZ0IsU0FBVDtBQUNBLFdBQUtoQixHQUFMLENBQVNpQixJQUFULENBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQjtBQUNBLFdBQUtqQixHQUFMLENBQVNrQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsV0FBS2xCLEdBQUwsQ0FBU21CLElBQVQ7QUFDQSxXQUFLbkIsR0FBTCxDQUFTb0IsU0FBVDtBQUdIIiwiZmlsZSI6Ii4vR2FtZU9iamVjdHMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbml0aWFsIHZhcmlhYmxlc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIC8vXG4gICAgICAgIC8vdmlzdWFsIGNvbnRleHRcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgLy9cbiAgICAgICAgLy9jb25zdGFudHNcbiAgICAgICAgdGhpcy5ncmF2aXR5Q29lZiA9IDAuMztcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAyO1xuICAgICAgICB0aGlzLmp1bXBTcGVlZCA9IDg7XG4gICAgICAgIHRoaXMuaHAgPSAxO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDE7XG4gICAgICAgIC8vXG4gICAgICAgIC8vdmFyaWFibGVzXG4gICAgICAgIHRoaXMua2V5UmlnaHQgPSAwO1xuICAgICAgICB0aGlzLmtleUxlZnQgPSAwO1xuICAgICAgICB0aGlzLmhzcCA9IDA7XG4gICAgICAgIHRoaXMudnNwID0gMDtcbiAgICAgICAgdGhpcy54ID0gMzA7XG4gICAgICAgIHRoaXMueSA9IDMwO1xuICAgICAgICAvL1xuICAgICAgICAvL2FiaWxpdGllc1xuICAgICAgICB0aGlzLmNhblEgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbkUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhblMgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlO1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoMzAsIDMwLCAyMCwgMjApXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./GameObjects/player.js\n");

/***/ }),

/***/ "./sHFt.js":
/*!*****************!*\
  !*** ./sHFt.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObjects_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObjects/player */ \"./GameObjects/player.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  console.log('yo');\n  var canvas = document.getElementById(\"Canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var player = new _GameObjects_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  console.log('working');\n  player.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zSEZ0LmpzP2I3ZTIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJkcmF3Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2pEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBV0gsR0FBWCxDQUFiO0FBQ0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUssUUFBTSxDQUFDRSxJQUFQO0FBQ0gsQ0FQRCIsImZpbGUiOiIuL3NIRnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vR2FtZU9iamVjdHMvcGxheWVyJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd5bycpXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCk7XG4gICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKVxuICAgIHBsYXllci5kcmF3KCk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sHFt.js\n");

/***/ })

/******/ });