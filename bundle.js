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

/***/ "./GameLogic/on_ground.js":
/*!********************************!*\
  !*** ./GameLogic/on_ground.js ***!
  \********************************/
/*! exports provided: onGround */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onGround\", function() { return onGround; });\nvar onGround = function onGround(grav) {\n  if (this.x + grav.x >= 480 || this.y + grav.y >= 479) {\n    return true;\n  } else {\n    return false;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HYW1lTG9naWMvb25fZ3JvdW5kLmpzP2Y4NDMiXSwibmFtZXMiOlsib25Hcm91bmQiLCJncmF2IiwieCIsInkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxJQUFULEVBQWM7QUFFbEMsTUFBSSxLQUFLQyxDQUFMLEdBQVNELElBQUksQ0FBQ0MsQ0FBZCxJQUFtQixHQUFuQixJQUEwQixLQUFLQyxDQUFMLEdBQVNGLElBQUksQ0FBQ0UsQ0FBZCxJQUFtQixHQUFqRCxFQUFzRDtBQUNsRCxXQUFPLElBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKLENBUE0iLCJmaWxlIjoiLi9HYW1lTG9naWMvb25fZ3JvdW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9uR3JvdW5kID0gZnVuY3Rpb24oZ3Jhdil7XG5cbiAgICBpZiAodGhpcy54ICsgZ3Jhdi54ID49IDQ4MCB8fCB0aGlzLnkgKyBncmF2LnkgPj0gNDc5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./GameLogic/on_ground.js\n");

/***/ }),

/***/ "./GameLogic/physics_movement.js":
/*!***************************************!*\
  !*** ./GameLogic/physics_movement.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _on_ground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_ground.js */ \"./GameLogic/on_ground.js\");\n//correct for upsidedown\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (grav) {\n  var moveacc = this.move * this.moveSpeed;\n\n  if (grav.direct === 2 || grav.direct === 1) {\n    moveacc = -moveacc;\n  } //implement on ground collision\n\n\n  if (_on_ground_js__WEBPACK_IMPORTED_MODULE_0__[\"onGround\"].bind(this, grav)()) {\n    this.hsp *= 0.865;\n    this.vsp *= 0.865;\n    this.hsp += -this.keyJump * this.jumpSpeed * grav.x;\n    this.vsp += -this.keyJump * this.jumpSpeed * grav.y;\n  } else {\n    this.hsp += grav.x * this.gravityCoef;\n    this.vsp += grav.y * this.gravityCoef;\n    moveacc *= 0.2;\n  }\n\n  this.hsp += moveacc * (1.0 - Math.abs(grav.x));\n  this.vsp += moveacc * (1.0 - Math.abs(grav.y)); //collision detection\n\n  if (this.x + this.hsp <= 0 || this.x + this.hsp >= 479) {\n    while (this.x + Math.sign(this.hsp) <= 0 && this.x + Math.sign(this.hsp) >= 479) {\n      this.x += Math.sign(this.hsp);\n    }\n\n    if (this.x < 0) {\n      this.x = 0;\n    } else if (this.x > 479) {\n      this.x = 479;\n    }\n\n    this.hsp = -this.hsp / 4.0;\n  }\n\n  if (this.y + this.vsp <= 0 || this.y + this.vsp >= 480) {\n    while (this.y + Math.sign(this.vsp) <= 0 && this.y + Math.sign(this.vsp) >= 480) {\n      this.y += Math.sign(this.vsp);\n    }\n\n    if (this.y < 0) {\n      this.y = 0;\n    } else if (this.y > 480) {\n      this.y = 480;\n    }\n\n    this.vsp = -this.vsp / 4.0;\n  } //move\n\n\n  this.x += this.hsp;\n  this.y += this.vsp;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HYW1lTG9naWMvcGh5c2ljc19tb3ZlbWVudC5qcz81N2NkIl0sIm5hbWVzIjpbImdyYXYiLCJtb3ZlYWNjIiwibW92ZSIsIm1vdmVTcGVlZCIsImRpcmVjdCIsIm9uR3JvdW5kIiwiYmluZCIsImhzcCIsInZzcCIsImtleUp1bXAiLCJqdW1wU3BlZWQiLCJ4IiwieSIsImdyYXZpdHlDb2VmIiwiTWF0aCIsImFicyIsInNpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUseUVBQVNBLElBQVQsRUFBYztBQUN6QixNQUFJQyxPQUFPLEdBQUcsS0FBS0MsSUFBTCxHQUFZLEtBQUtDLFNBQS9COztBQUNBLE1BQUlILElBQUksQ0FBQ0ksTUFBTCxLQUFnQixDQUFoQixJQUFxQkosSUFBSSxDQUFDSSxNQUFMLEtBQWdCLENBQXpDLEVBQTJDO0FBQ3ZDSCxXQUFPLEdBQUcsQ0FBQ0EsT0FBWDtBQUNILEdBSndCLENBTXpCOzs7QUFDQSxNQUFHSSxzREFBUSxDQUFDQyxJQUFULENBQWMsSUFBZCxFQUFvQk4sSUFBcEIsR0FBSCxFQUErQjtBQUUzQixTQUFLTyxHQUFMLElBQVksS0FBWjtBQUNBLFNBQUtDLEdBQUwsSUFBWSxLQUFaO0FBQ0EsU0FBS0QsR0FBTCxJQUFZLENBQUMsS0FBS0UsT0FBTixHQUFnQixLQUFLQyxTQUFyQixHQUFpQ1YsSUFBSSxDQUFDVyxDQUFsRDtBQUNBLFNBQUtILEdBQUwsSUFBWSxDQUFDLEtBQUtDLE9BQU4sR0FBZ0IsS0FBS0MsU0FBckIsR0FBaUNWLElBQUksQ0FBQ1ksQ0FBbEQ7QUFDSCxHQU5ELE1BTU87QUFDSCxTQUFLTCxHQUFMLElBQVlQLElBQUksQ0FBQ1csQ0FBTCxHQUFTLEtBQUtFLFdBQTFCO0FBQ0EsU0FBS0wsR0FBTCxJQUFZUixJQUFJLENBQUNZLENBQUwsR0FBUyxLQUFLQyxXQUExQjtBQUNBWixXQUFPLElBQUksR0FBWDtBQUNIOztBQUVELE9BQUtNLEdBQUwsSUFBWU4sT0FBTyxJQUFJLE1BQU1hLElBQUksQ0FBQ0MsR0FBTCxDQUFTZixJQUFJLENBQUNXLENBQWQsQ0FBVixDQUFuQjtBQUNBLE9BQUtILEdBQUwsSUFBWVAsT0FBTyxJQUFJLE1BQU1hLElBQUksQ0FBQ0MsR0FBTCxDQUFTZixJQUFJLENBQUNZLENBQWQsQ0FBVixDQUFuQixDQXBCeUIsQ0FzQnpCOztBQUdBLE1BQUcsS0FBS0QsQ0FBTCxHQUFTLEtBQUtKLEdBQWQsSUFBcUIsQ0FBckIsSUFBMEIsS0FBS0ksQ0FBTCxHQUFTLEtBQUtKLEdBQWQsSUFBcUIsR0FBbEQsRUFBc0Q7QUFDbEQsV0FBTyxLQUFLSSxDQUFMLEdBQVNHLElBQUksQ0FBQ0UsSUFBTCxDQUFVLEtBQUtULEdBQWYsQ0FBVCxJQUFnQyxDQUFoQyxJQUFxQyxLQUFLSSxDQUFMLEdBQVNHLElBQUksQ0FBQ0UsSUFBTCxDQUFVLEtBQUtULEdBQWYsQ0FBVCxJQUFnQyxHQUE1RSxFQUFnRjtBQUM1RSxXQUFLSSxDQUFMLElBQVVHLElBQUksQ0FBQ0UsSUFBTCxDQUFVLEtBQUtULEdBQWYsQ0FBVjtBQUNIOztBQUNELFFBQUksS0FBS0ksQ0FBTCxHQUFTLENBQWIsRUFBZTtBQUNYLFdBQUtBLENBQUwsR0FBUyxDQUFUO0FBQ0gsS0FGRCxNQUVPLElBQUksS0FBS0EsQ0FBTCxHQUFTLEdBQWIsRUFBaUI7QUFDcEIsV0FBS0EsQ0FBTCxHQUFTLEdBQVQ7QUFDSDs7QUFDRCxTQUFLSixHQUFMLEdBQVcsQ0FBQyxLQUFLQSxHQUFOLEdBQVUsR0FBckI7QUFFSDs7QUFFRCxNQUFJLEtBQUtLLENBQUwsR0FBUyxLQUFLSixHQUFkLElBQXFCLENBQXJCLElBQTBCLEtBQUtJLENBQUwsR0FBUyxLQUFLSixHQUFkLElBQXFCLEdBQW5ELEVBQXdEO0FBQ3BELFdBQU8sS0FBS0ksQ0FBTCxHQUFTRSxJQUFJLENBQUNFLElBQUwsQ0FBVSxLQUFLUixHQUFmLENBQVQsSUFBZ0MsQ0FBaEMsSUFBcUMsS0FBS0ksQ0FBTCxHQUFTRSxJQUFJLENBQUNFLElBQUwsQ0FBVSxLQUFLUixHQUFmLENBQVQsSUFBZ0MsR0FBNUUsRUFBaUY7QUFDN0UsV0FBS0ksQ0FBTCxJQUFVRSxJQUFJLENBQUNFLElBQUwsQ0FBVSxLQUFLUixHQUFmLENBQVY7QUFDSDs7QUFDRCxRQUFJLEtBQUtJLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ1osV0FBS0EsQ0FBTCxHQUFTLENBQVQ7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLQSxDQUFMLEdBQVMsR0FBYixFQUFrQjtBQUNyQixXQUFLQSxDQUFMLEdBQVMsR0FBVDtBQUNIOztBQUNELFNBQUtKLEdBQUwsR0FBVyxDQUFDLEtBQUtBLEdBQU4sR0FBWSxHQUF2QjtBQUVILEdBakR3QixDQW1EekI7OztBQUNBLE9BQUtHLENBQUwsSUFBVSxLQUFLSixHQUFmO0FBQ0EsT0FBS0ssQ0FBTCxJQUFVLEtBQUtKLEdBQWY7QUFDSCxDIiwiZmlsZSI6Ii4vR2FtZUxvZ2ljL3BoeXNpY3NfbW92ZW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvcnJlY3QgZm9yIHVwc2lkZWRvd25cbmltcG9ydCB7IG9uR3JvdW5kIH0gZnJvbSAnLi9vbl9ncm91bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncmF2KXtcbiAgICB2YXIgbW92ZWFjYyA9IHRoaXMubW92ZSAqIHRoaXMubW92ZVNwZWVkXG4gICAgaWYgKGdyYXYuZGlyZWN0ID09PSAyIHx8IGdyYXYuZGlyZWN0ID09PSAxKXtcbiAgICAgICAgbW92ZWFjYyA9IC1tb3ZlYWNjO1xuICAgIH1cblxuICAgIC8vaW1wbGVtZW50IG9uIGdyb3VuZCBjb2xsaXNpb25cbiAgICBpZihvbkdyb3VuZC5iaW5kKHRoaXMsIGdyYXYpKCkpe1xuXG4gICAgICAgIHRoaXMuaHNwICo9IDAuODY1O1xuICAgICAgICB0aGlzLnZzcCAqPSAwLjg2NTtcbiAgICAgICAgdGhpcy5oc3AgKz0gLXRoaXMua2V5SnVtcCAqIHRoaXMuanVtcFNwZWVkICogZ3Jhdi54O1xuICAgICAgICB0aGlzLnZzcCArPSAtdGhpcy5rZXlKdW1wICogdGhpcy5qdW1wU3BlZWQgKiBncmF2Lnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oc3AgKz0gZ3Jhdi54ICogdGhpcy5ncmF2aXR5Q29lZjtcbiAgICAgICAgdGhpcy52c3AgKz0gZ3Jhdi55ICogdGhpcy5ncmF2aXR5Q29lZjtcbiAgICAgICAgbW92ZWFjYyAqPSAwLjI7XG4gICAgfVxuXG4gICAgdGhpcy5oc3AgKz0gbW92ZWFjYyAqICgxLjAgLSBNYXRoLmFicyhncmF2LngpKTtcbiAgICB0aGlzLnZzcCArPSBtb3ZlYWNjICogKDEuMCAtIE1hdGguYWJzKGdyYXYueSkpO1xuXG4gICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uXG4gICBcbiAgICBcbiAgICBpZih0aGlzLnggKyB0aGlzLmhzcCA8PSAwIHx8IHRoaXMueCArIHRoaXMuaHNwID49IDQ3OSl7XG4gICAgICAgIHdoaWxlICh0aGlzLnggKyBNYXRoLnNpZ24odGhpcy5oc3ApIDw9IDAgJiYgdGhpcy54ICsgTWF0aC5zaWduKHRoaXMuaHNwKSA+PSA0Nzkpe1xuICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguc2lnbih0aGlzLmhzcClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54IDwgMCl7XG4gICAgICAgICAgICB0aGlzLnggPSAwXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54ID4gNDc5KXtcbiAgICAgICAgICAgIHRoaXMueCA9IDQ3OVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHNwID0gLXRoaXMuaHNwLzQuMDtcbiAgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSArIHRoaXMudnNwIDw9IDAgfHwgdGhpcy55ICsgdGhpcy52c3AgPj0gNDgwKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnkgKyBNYXRoLnNpZ24odGhpcy52c3ApIDw9IDAgJiYgdGhpcy55ICsgTWF0aC5zaWduKHRoaXMudnNwKSA+PSA0ODApIHtcbiAgICAgICAgICAgIHRoaXMueSArPSBNYXRoLnNpZ24odGhpcy52c3ApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA0ODApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDQ4MFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudnNwID0gLXRoaXMudnNwIC8gNC4wO1xuXG4gICAgfVxuXG4gICAgLy9tb3ZlXG4gICAgdGhpcy54ICs9IHRoaXMuaHNwO1xuICAgIHRoaXMueSArPSB0aGlzLnZzcDtcbn0gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./GameLogic/physics_movement.js\n");

/***/ }),

/***/ "./GameObjects/game.js":
/*!*****************************!*\
  !*** ./GameObjects/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./GameObjects/player.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.gravx = 0.0;\n    this.gravy = 1.0;\n    this.gravDirection = 0;\n    this.keyDownHandler = this.keyDownHandler.bind(this);\n    this.keyUpHandler = this.keyUpHandler.bind(this);\n    this.addListeners();\n  }\n\n  _createClass(Game, [{\n    key: \"keyDownHandler\",\n    value: function keyDownHandler(e) {\n      if (e.key == \"Right\" || e.key == \"ArrowRight\" || e.key == \"d\" || e.key == \"D\") {\n        this.player.keyRight = 1;\n      } else if (e.key == \"Left\" || e.key == \"ArrowLeft\" || e.key == \"a\" || e.key == \"A\") {\n        this.player.keyLeft = 1;\n      } else if (e.key == \"Spacebar\" || e.key == \" \") {\n        this.player.keyJump = 1;\n      }\n    }\n  }, {\n    key: \"keyUpHandler\",\n    value: function keyUpHandler(e) {\n      if (e.key == \"Right\" || e.key == \"ArrowRight\" || e.key == \"d\" || e.key == \"D\") {\n        this.player.keyRight = 0;\n      } else if (e.key == \"Left\" || e.key == \"ArrowLeft\" || e.key == \"a\" || e.key == \"A\") {\n        this.player.keyLeft = 0;\n      } else if (e.key == \"Spacebar\" || e.key == \" \") {\n        this.player.keyJump = 0;\n      }\n    }\n  }, {\n    key: \"addListeners\",\n    value: function addListeners() {\n      document.addEventListener(\"keydown\", this.keyDownHandler);\n      document.addEventListener(\"keyup\", this.keyUpHandler);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var grav = {\n        x: this.gravx,\n        y: this.gravy,\n        direct: this.gravDirection\n      };\n      this.player.draw(grav);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HYW1lT2JqZWN0cy9nYW1lLmpzPzg2MzQiXSwibmFtZXMiOlsiR2FtZSIsImN0eCIsInBsYXllciIsIlBsYXllciIsImdyYXZ4IiwiZ3JhdnkiLCJncmF2RGlyZWN0aW9uIiwia2V5RG93bkhhbmRsZXIiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwiYWRkTGlzdGVuZXJzIiwiZSIsImtleSIsImtleVJpZ2h0Iiwia2V5TGVmdCIsImtleUp1bXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmF2IiwieCIsInkiLCJkaXJlY3QiLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEk7OztBQUNqQixnQkFBWUMsR0FBWixFQUFnQjtBQUFBOztBQUNaLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQywrQ0FBSixDQUFXRixHQUFYLENBQWQ7QUFDQSxTQUFLRyxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0UsWUFBTDtBQUVIOzs7O21DQUNjQyxDLEVBQUU7QUFDYixVQUFHQSxDQUFDLENBQUNDLEdBQUYsSUFBUyxPQUFULElBQW9CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxZQUE3QixJQUE2Q0QsQ0FBQyxDQUFDQyxHQUFGLElBQVMsR0FBdEQsSUFBNkRELENBQUMsQ0FBQ0MsR0FBRixJQUFTLEdBQXpFLEVBQTZFO0FBQ3pFLGFBQUtWLE1BQUwsQ0FBWVcsUUFBWixHQUF1QixDQUF2QjtBQUNILE9BRkQsTUFFTyxJQUFJRixDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUE1QixJQUEyQ0QsQ0FBQyxDQUFDQyxHQUFGLElBQVMsR0FBcEQsSUFBMkRELENBQUMsQ0FBQ0MsR0FBRixJQUFTLEdBQXhFLEVBQTRFO0FBQy9FLGFBQUtWLE1BQUwsQ0FBWVksT0FBWixHQUFzQixDQUF0QjtBQUNILE9BRk0sTUFFQSxJQUFJSCxDQUFDLENBQUNDLEdBQUYsSUFBUyxVQUFULElBQXVCRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxHQUFwQyxFQUF3QztBQUUzQyxhQUFLVixNQUFMLENBQVlhLE9BQVosR0FBc0IsQ0FBdEI7QUFDSDtBQUVKOzs7aUNBQ1lKLEMsRUFBRTtBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQTdCLElBQTZDRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxHQUF0RCxJQUE2REQsQ0FBQyxDQUFDQyxHQUFGLElBQVMsR0FBMUUsRUFBK0U7QUFDM0UsYUFBS1YsTUFBTCxDQUFZVyxRQUFaLEdBQXVCLENBQXZCO0FBQ0gsT0FGRCxNQUVPLElBQUlGLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE1BQVQsSUFBbUJELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFdBQTVCLElBQTJDRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxHQUFwRCxJQUEyREQsQ0FBQyxDQUFDQyxHQUFGLElBQVMsR0FBeEUsRUFBNkU7QUFDaEYsYUFBS1YsTUFBTCxDQUFZWSxPQUFaLEdBQXNCLENBQXRCO0FBQ0gsT0FGTSxNQUVBLElBQUlILENBQUMsQ0FBQ0MsR0FBRixJQUFTLFVBQVQsSUFBdUJELENBQUMsQ0FBQ0MsR0FBRixJQUFTLEdBQXBDLEVBQXdDO0FBRTNDLGFBQUtWLE1BQUwsQ0FBWWEsT0FBWixHQUFzQixDQUF0QjtBQUNIO0FBRUo7OzttQ0FFYztBQUNYQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtWLGNBQTFDO0FBQ0FTLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS1IsWUFBeEM7QUFDSDs7OzJCQUNLO0FBQ0YsVUFBTVMsSUFBSSxHQUFHO0FBQUNDLFNBQUMsRUFBRSxLQUFLZixLQUFUO0FBQWdCZ0IsU0FBQyxFQUFFLEtBQUtmLEtBQXhCO0FBQStCZ0IsY0FBTSxFQUFFLEtBQUtmO0FBQTVDLE9BQWI7QUFDQSxXQUFLSixNQUFMLENBQVlvQixJQUFaLENBQWlCSixJQUFqQjtBQUVIIiwiZmlsZSI6Ii4vR2FtZU9iamVjdHMvZ2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCk7XG4gICAgICAgIHRoaXMuZ3JhdnggPSAwLjA7XG4gICAgICAgIHRoaXMuZ3JhdnkgPSAxLjA7XG4gICAgICAgIHRoaXMuZ3JhdkRpcmVjdGlvbiA9IDBcbiAgICAgICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgfVxuICAgIGtleURvd25IYW5kbGVyKGUpe1xuICAgICAgICBpZihlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgZS5rZXkgPT0gXCJkXCIgfHwgZS5rZXkgPT0gXCJEXCIpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2V5UmlnaHQgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5rZXkgPT0gXCJhXCIgfHwgZS5rZXkgPT0gXCJBXCIpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2V5TGVmdCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKXtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2V5SnVtcCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGtleVVwSGFuZGxlcihlKXtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIiB8fCBlLmtleSA9PSBcImRcIiB8fCBlLmtleSA9PSBcIkRcIikge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2V5UmlnaHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5rZXkgPT0gXCJhXCIgfHwgZS5rZXkgPT0gXCJBXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtleUxlZnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiU3BhY2ViYXJcIiB8fCBlLmtleSA9PSBcIiBcIil7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtleUp1bXAgPSAwO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIpXG4gICAgfVxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgZ3JhdiA9IHt4OiB0aGlzLmdyYXZ4LCB5OiB0aGlzLmdyYXZ5LCBkaXJlY3Q6IHRoaXMuZ3JhdkRpcmVjdGlvbn1cbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyhncmF2KVxuXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./GameObjects/game.js\n");

/***/ }),

/***/ "./GameObjects/player.js":
/*!*******************************!*\
  !*** ./GameObjects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _GameLogic_physics_movement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameLogic/physics_movement */ \"./GameLogic/physics_movement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(ctx) {\n    _classCallCheck(this, Player);\n\n    //\n    //visual context\n    this.ctx = ctx; //\n    //constants\n\n    this.gravityCoef = 0.3;\n    this.moveSpeed = 2;\n    this.jumpSpeed = 8;\n    this.hp = 1; //\n    //variables\n\n    this.keyRight = 0;\n    this.keyLeft = 0;\n    this.hsp = 0;\n    this.vsp = 0;\n    this.x = 30;\n    this.y = 30;\n    this.keyJump = 0; //\n    //abilities\n\n    this.canQ = true;\n    this.canE = true;\n    this.canS = true;\n    this.canJump = true; //\n    //\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(grav) {\n      //calculate movement\n      this.move = this.keyRight - this.keyLeft;\n      _GameLogic_physics_movement__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this, grav)();\n      this.ctx.beginPath();\n      this.ctx.rect(this.x, this.y, 20, 20);\n      this.ctx.fillStyle = \"white\";\n      this.ctx.fill();\n      this.ctx.closePath();\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9HYW1lT2JqZWN0cy9wbGF5ZXIuanM/YzAxNSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjdHgiLCJncmF2aXR5Q29lZiIsIm1vdmVTcGVlZCIsImp1bXBTcGVlZCIsImhwIiwia2V5UmlnaHQiLCJrZXlMZWZ0IiwiaHNwIiwidnNwIiwieCIsInkiLCJrZXlKdW1wIiwiY2FuUSIsImNhbkUiLCJjYW5TIiwiY2FuSnVtcCIsImdyYXYiLCJtb3ZlIiwibW92ZW1lbnRQaHlzaWNzIiwiYmluZCIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7SUFHcUJBLE07OztBQUNqQixrQkFBWUMsR0FBWixFQUFnQjtBQUFBOztBQUNaO0FBQ0E7QUFDQSxTQUFLQSxHQUFMLEdBQVdBLEdBQVgsQ0FIWSxDQUlaO0FBQ0E7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixHQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQVYsQ0FUWSxDQVVaO0FBQ0E7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtDLENBQUwsR0FBUyxFQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEVBQVQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZixDQWxCWSxDQW1CWjtBQUNBOztBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmLENBeEJZLENBeUJaO0FBQ0E7QUFDSDs7Ozt5QkFFSUMsSSxFQUFLO0FBQ047QUFFQSxXQUFLQyxJQUFMLEdBQWEsS0FBS1osUUFBTCxHQUFnQixLQUFLQyxPQUFsQztBQUNBWSx5RUFBZSxDQUFDQyxJQUFoQixDQUFxQixJQUFyQixFQUEwQkgsSUFBMUI7QUFFQSxXQUFLaEIsR0FBTCxDQUFTb0IsU0FBVDtBQUNBLFdBQUtwQixHQUFMLENBQVNxQixJQUFULENBQWMsS0FBS1osQ0FBbkIsRUFBc0IsS0FBS0MsQ0FBM0IsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEM7QUFDQSxXQUFLVixHQUFMLENBQVNzQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsV0FBS3RCLEdBQUwsQ0FBU3VCLElBQVQ7QUFDQSxXQUFLdkIsR0FBTCxDQUFTd0IsU0FBVDtBQUdIIiwiZmlsZSI6Ii4vR2FtZU9iamVjdHMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vdmVtZW50UGh5c2ljcyBmcm9tICcuLi9HYW1lTG9naWMvcGh5c2ljc19tb3ZlbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICAvL1xuICAgICAgICAvL3Zpc3VhbCBjb250ZXh0XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIC8vXG4gICAgICAgIC8vY29uc3RhbnRzXG4gICAgICAgIHRoaXMuZ3Jhdml0eUNvZWYgPSAwLjM7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gMjtcbiAgICAgICAgdGhpcy5qdW1wU3BlZWQgPSA4O1xuICAgICAgICB0aGlzLmhwID0gMTtcbiAgICAgICAgLy9cbiAgICAgICAgLy92YXJpYWJsZXNcbiAgICAgICAgdGhpcy5rZXlSaWdodCA9IDA7XG4gICAgICAgIHRoaXMua2V5TGVmdCA9IDA7XG4gICAgICAgIHRoaXMuaHNwID0gMDtcbiAgICAgICAgdGhpcy52c3AgPSAwO1xuICAgICAgICB0aGlzLnggPSAzMDtcbiAgICAgICAgdGhpcy55ID0gMzA7XG4gICAgICAgIHRoaXMua2V5SnVtcCA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIC8vYWJpbGl0aWVzXG4gICAgICAgIHRoaXMuY2FuUSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FuRSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FuUyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZHJhdyhncmF2KXtcbiAgICAgICAgLy9jYWxjdWxhdGUgbW92ZW1lbnRcblxuICAgICAgICB0aGlzLm1vdmUgPSAodGhpcy5rZXlSaWdodCAtIHRoaXMua2V5TGVmdCk7XG4gICAgICAgIG1vdmVtZW50UGh5c2ljcy5iaW5kKHRoaXMsZ3JhdikoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCAyMCwgMjApXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./GameObjects/player.js\n");

/***/ }),

/***/ "./sHFt.js":
/*!*****************!*\
  !*** ./sHFt.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObjects_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObjects/game */ \"./GameObjects/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  console.log('yo');\n  var canvas = document.getElementById(\"Canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var game = new _GameObjects_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  window.gravityDirect = 0;\n  setInterval(function () {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    game.draw();\n  }, 15);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zSEZ0LmpzP2I3ZTIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiR2FtZSIsIndpbmRvdyIsImdyYXZpdHlEaXJlY3QiLCJzZXRJbnRlcnZhbCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBR0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNDLENBQUQsRUFBTztBQUNqREMsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBLE1BQUlDLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlDLHlEQUFKLENBQVNILEdBQVQsQ0FBWDtBQUNBSSxRQUFNLENBQUNDLGFBQVAsR0FBdUIsQ0FBdkI7QUFFQUMsYUFBVyxDQUFFLFlBQU07QUFDZk4sT0FBRyxDQUFDTyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlQsTUFBTSxDQUFDVSxLQUEzQixFQUFrQ1YsTUFBTSxDQUFDVyxNQUF6QztBQUNBUCxRQUFJLENBQUNRLElBQUw7QUFFSCxHQUpVLEVBSVQsRUFKUyxDQUFYO0FBTUgsQ0FiRCIsImZpbGUiOiIuL3NIRnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWVPYmplY3RzL2dhbWUnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd5bycpXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2FudmFzXCIpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICB3aW5kb3cuZ3Jhdml0eURpcmVjdCA9IDBcblxuICAgIHNldEludGVydmFsKCAoKSA9PiB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgZ2FtZS5kcmF3KClcblxuICAgIH0sMTUpXG5cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sHFt.js\n");

/***/ })

/******/ });