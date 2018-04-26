module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'top_wr logo_rpw ' + (this.props.containerStyle !== undefined ? this.props.containerStyle : '') },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'logo ' + (this.props.logoStyle !== undefined ? this.props.logoStyle : '') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '150.39', height: '67.056', viewBox: '0 0 150.39034 67.056482' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M144.808.234a5.5 5.5 0 0 0-5.418 5.579V61.46a5.5 5.5 0 1 0 11 0V5.813a5.5 5.5 0 0 0-5.582-5.579zM85.282.242a5.5 5.5 0 0 0-5.261 7.506l20.908 55.647a5.5 5.5 0 0 0 10.306-.026l20.592-55.648a5.5 5.5 0 1 0-10.316-3.817L106.038 45.72 90.32 3.879A5.5 5.5 0 0 0 85.282.242zM66.714 0a5.5 5.5 0 0 0-5.418 5.579v55.648a5.5 5.5 0 1 0 11 0V5.58A5.5 5.5 0 0 0 66.714 0zM26.978.314a5.5 5.5 0 0 0-5.06 3.516L.407 59.48a5.5 5.5 0 1 0 10.26 3.964l5.567-14.406h22.317l5.842 14.48a5.5 5.5 0 1 0 10.2-4.113L32.149 3.756a5.5 5.5 0 0 0-5.17-3.442zm.177 20.471l6.96 17.252H20.486l6.668-17.252z', overflow: 'visible', color: '#000', fontWeight: '400', fontFamily: 'sans-serif', whiteSpace: 'normal', fill: '#1b1b1c', fillRule: 'evenodd' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'http://aivi.ru/', className: 'logo-link' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'title_wr' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'title ' + (this.props.titleStyle !== undefined ? this.props.titleStyle : '') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'menu-link', href: '/' },
              '\u0411\u043B\u043E\u0433'
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',


    // componentDidMount() {
    //   $(document).ready(function() {
    //
    //     $(document).on("click", ".address", function(){
    //   		$(".map_block").addClass("show");
    //   	});
    //   	$(document).on("click", ".map_block_bg, .close_map", function(){
    //   		$(".map_block").removeClass("show");
    //   	});
    //
    //   	ymaps.ready(init);
    //       var myMap,
    //           myPlacemark;
    //       function init(){
    //
    //
    //           var MyZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
    //               "<div id='zoom-in'></div>" +
    //               "<div id='zoom-out'></div>" +
    //           "</div>", {
    //
    //           // Переопределяем методы макета, чтобы выполнять дополнительные действия
    //           // при построении и очистке макета.
    //           build: function () {
    //               // Вызываем родительский метод build.
    //               MyZoomLayout.superclass.build.call(this);
    //
    //               // Начинаем слушать клики на кнопках макета.
    //               $('#zoom-in').bind('click', ymaps.util.bind(this.zoomIn, this));
    //               $('#zoom-out').bind('click', ymaps.util.bind(this.zoomOut, this));
    //           },
    //
    //           clear: function () {
    //               // Снимаем обработчики кликов.
    //               $('#zoom-in').unbind('click');
    //               $('#zoom-out').unbind('click');
    //
    //               // Вызываем родительский метод clear.
    //               MyZoomLayout.superclass.clear.call(this);
    //           },
    //
    //           zoomIn: function () {
    //               var map = this.getData().control.getMap();
    //               // Генерируем событие, в ответ на которое
    //               // элемент управления изменит коэффициент масштабирования карты.
    //               this.events.fire('zoomchange', {
    //                   oldZoom: map.getZoom(),
    //                   newZoom: map.getZoom() + 1
    //               });
    //           },
    //
    //           zoomOut: function () {
    //               var map = this.getData().control.getMap();
    //               this.events.fire('zoomchange', {
    //                   oldZoom: map.getZoom(),
    //                   newZoom: map.getZoom() - 1
    //               });
    //           }
    //      });
    //
    //           myMap = new ymaps.Map ("YMapsID", {
    //
    //               center: [55.804884, 37.585409],
    //               zoom: 15
    //
    //           });
    //
    //           var customZoom = new ymaps.control.SmallZoomControl({layout: MyZoomLayout, position:{bottom: 60, left: 10}});
    //
    //           myMap.controls.add(customZoom);
    //
    //
    //
    //           /*var myButton = new ymaps.control.Button('<b>Я кнопка</b>');
    //           myButton.style.background = "#000000";
    //           myMap.controls.add(myButton, {
    //             float: "left"
    //           });*/
    //
    //           myPlacemark = new ymaps.Placemark([55.805, 37.585409],
    //               {},
    //               {iconLayout: 'default#image', iconImageHref: "img/ico-map.png", iconImageSize: [35, 56]});
    //           myMap.geoObjects.add(myPlacemark);
    //       }
    //
    //
    //   });
    // }

    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'footer',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'left_block' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'znak_wr' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/img/blog/footer/znak.svg',
                alt: '\u0417\u043D\u0430\u043A AIVI' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'right_block' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'contact_wr' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'b_left' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'title' },
                  '\u041E\u0444\u0438\u0441'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'descr address' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'underline' },
                    '\u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0411\u043E\u043B\u044C\u0448\u0430\u044F'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'underline' },
                    '\u041D\u043E\u0432\u043E\u0434\u043C\u0438\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F, 36'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'b_right' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'title' },
                  '\u0421\u0432\u044F\u0437\u044C'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'descr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'tel:+74951200834',
                      className: 'underline' },
                    '+7 (495) 120-08-34'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'mailto:info@aivi.ru',
                      className: 'underline' },
                    'info@aivi.ru'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'copyright_wr' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '\xA92018 \u041E\u041E\u041E \xAB\u0410\u0419\u0412\u0418\xBB.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'map_block' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'map_block_bg' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'map_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'close_map' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'map', id: 'YMapsID' })
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(8);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Subscribe.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Subscribe_Subscribe = function (_React$Component) {
  _inherits(Subscribe, _React$Component);

  function Subscribe() {
    _classCallCheck(this, Subscribe);

    return _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).apply(this, arguments));
  }

  _createClass(Subscribe, [{
    key: 'onFocus',
    value: function onFocus(e) {
      return e.target.placeholder = '';
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      return e.target.placeholder = "Подпишитесь на нашу Рассылку";
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'form',
        { className: 'form-subscribe' },
        external__react__default.a.createElement('input', { type: 'email',
          name: 'subscribe-email',
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          className: 'subscribe-email',
          placeholder: '\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0430\u0448\u0443 \u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0443' }),
        external__react__default.a.createElement('button', { className: 'subscribe-btn' })
      );
    }
  }]);

  return Subscribe;
}(external__react__default.a.Component);

/* harmony default export */ var components_Subscribe = (Subscribe_Subscribe);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(4);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(1);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: external "gsap"
var external__gsap_ = __webpack_require__(2);
var external__gsap__default = /*#__PURE__*/__webpack_require__.n(external__gsap_);

// CONCATENATED MODULE: ./components/Title.js
var Title__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Title__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Title__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Title__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Title_Title = function (_React$Component) {
  Title__inherits(Title, _React$Component);

  function Title(props) {
    Title__classCallCheck(this, Title);

    var _this = Title__possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }

  Title__createClass(Title, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var body = document.body;
      body.classList ? body.classList.add('withJs') : body.className += ' withJs';

      var back = external__jquery__default()('.back_link');
      var logo = external__jquery__default()('header .logo svg path');
      var date_public = external__jquery__default()('.date_public');
      var cont = external__jquery__default()('.right_block h1, .description span');
      var cont = external__jquery__default()('.description span');
      setTimeout(function () {
        back.addClass('block_show');
        date_public.addClass('block_show');
        logo.css('fill', '#fff');
        //   $('.right_block .text_desc').addClass('show');
      }, 300);
      setTimeout(function () {
        splitText(".header_title", animateText);
        external__jquery__default()('.right_block .description').addClass('show');
        external__jquery__default()('body.withJs header .description.show::before').addClass('show');
        splitText(".text_desc", animateText2);
      }, 500);

      function animateText(text) {
        var parent = external__jquery__default()(".header_title");
        var span = parent.find("span");
        var offset;
        var delay = 0;
        external__gsap_["TweenLite"].set(span, { y: "100%", lineHeight: '5' });
        parent.addClass("show");
        span.each(function (index, el) {

          var currentOffset = external__jquery__default()(el).offset().top;
          if (index === 0) {
            offset = currentOffset;
          }

          if (currentOffset > offset + 4) {
            delay += 0.3;
          }
          if (index === span.length - 1) {
            external__gsap_["TweenLite"].to(external__jquery__default()(el), .1, {
              y: "0%",
              lineHeight: '1.23',
              delay: delay,
              ease: external__gsap_["Expo"].easeOut,

              onComplete: function onComplete() {
                parent.html(text);
                parent.removeAttr("style");
              }
            });
          } else {
            external__gsap_["TweenLite"].to(external__jquery__default()(el), .1, { y: "0%", lineHeight: '1.23', delay: delay, ease: external__gsap_["Expo"].easeOut });
          }

          offset = currentOffset;
        });
      }
      function animateText2(text) {
        var parent = external__jquery__default()(".text_desc");
        var span = parent.find("span");
        var offset;
        var delay = 0;
        external__gsap_["TweenLite"].set(span, { y: '100%', lineHeight: '8' });
        parent.addClass("show");

        span.each(function (index, el) {

          var currentOffset = external__jquery__default()(el).offset().top;
          if (index === 0) {
            offset = currentOffset;
          }

          if (currentOffset > offset + 4) {
            delay += 0.2;
          }
          if (index === span.length - 1) {

            external__gsap_["TweenLite"].to(external__jquery__default()(el), .1, { y: '0%', lineHeight: '2.29', delay: delay, ease: external__gsap_["Expo"].easeOut,
              onComplete: function onComplete() {
                parent.html(text);
                parent.removeAttr("style");
              } });
          } else {
            external__gsap_["TweenLite"].to(external__jquery__default()(el), .5, { y: '0%', lineHeight: '2.29', delay: delay, ease: external__gsap_["Expo"].easeOut });
          }

          offset = currentOffset;
        });
      }

      function splitText(id, callback) {
        var el = external__jquery__default()(id);
        var text = el.html().trim();
        //var textArrayWithBR = text.split("<br>");
        var textArrayWithBR = text.split();
        textArrayWithBR.forEach(function (element, index, array) {
          // var textArray = element.trim().split("");
          array[index] = '<div><span>' + element + '</span></div>';
        });
        el.height(el.height());
        if (external__jquery__default()(window).width() >= 1201) {
          el.html(textArrayWithBR.join("<div>&nbsp;</div>"));
        }

        if (callback) {
          callback(text);
        }
      }
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      window.history.back();
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'header',
        null,
        external__react__default.a.createElement(Menu["a" /* default */], null),
        external__react__default.a.createElement(
          'div',
          { className: 'bottom_wr' },
          external__react__default.a.createElement(
            'div',
            { className: 'left_block' },
            external__react__default.a.createElement(
              'a',
              { onClick: this.goBack, className: 'back_link' },
              external__react__default.a.createElement(
                'span',
                { className: 'blank_text' },
                '\u041D\u0430\u0437\u0430\u0434'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'right_block' },
            external__react__default.a.createElement(
              'div',
              { className: 'date_public' },
              external__react__default.a.createElement(
                'span',
                { className: 'category-text' },
                this.props.data.category
              ),
              ' \u2014 ',
              external__react__default.a.createElement(
                'span',
                null,
                this.props.data.date
              )
            ),
            external__react__default.a.createElement(
              'h1',
              { className: 'header_title' },
              this.props.data.title
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'description' },
              external__react__default.a.createElement(
                'div',
                { className: 'text_desc' },
                this.props.data.description
              )
            )
          )
        )
      );
    }
  }]);

  return Title;
}(external__react__default.a.Component);

/* harmony default export */ var components_Title = (Title_Title);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Content.js
var Content__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Content__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Content__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Content__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Content_Content = function (_React$Component) {
  Content__inherits(Content, _React$Component);

  function Content() {
    Content__classCallCheck(this, Content);

    return Content__possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  Content__createClass(Content, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      external__jquery__default()(window).on('scroll', function () {

        var menu = external__jquery__default()('.top_wr');
        var logo = external__jquery__default()('.logo');
        var conPos = external__jquery__default()('.content-fake-bg').position().top;
        var menuPos = external__jquery__default()('.top_wr').offset().top;
        // var hiddenMenu = $('.nav').position().top+$('.top_wr').height();
        var navPos = external__jquery__default()('.form-subscribe').offset().top - 80;
        var nav = external__jquery__default()('.nav');
        var content = external__jquery__default()('.content-fake-bg');
        var subscribe = external__jquery__default()('.content .subscribe');
        // var subscribePos = $('.content .subscribe').before().position().top;

        if (external__jquery__default()(this).scrollTop() > menu.height()) {
          menu.addClass('scroll');
        } else {
          menu.removeClass('scroll');
        }

        if (external__jquery__default()(this).scrollTop() > conPos) {
          menu.addClass('changeColor');
          logo.addClass('black');
        } else {
          menu.removeClass('changeColor');
          logo.removeClass('black');
        }
        // if($(this).scrollTop()> hiddenMenu){
        // 	menu.addClass('opacity');
        // }else{
        // 	menu.removeClass('opacity');
        // }


        if (menuPos > navPos) {
          nav.addClass('big');
          subscribe.addClass('small');
          content.addClass('black');
          external__gsap_["TweenLite"].to(external__jquery__default()('.nav_wr'), 1, { transform: 'matrix(1, 0, 0, 1, 0, 20)', ease: external__gsap_["Expo"].easeOut, delay: 0.1 });
        } else {
          nav.removeClass('big');
          subscribe.removeClass('small');
          content.removeClass('black');
          external__gsap_["TweenLite"].to(external__jquery__default()('.nav_wr'), 1, { transform: 'matrix(1, 0, 0, 1, 0, 0)', ease: external__gsap_["Expo"].easeOut, delay: 0.1 });
        }

        // Анимация контета секции класса 'content'
        external__jquery__default()('.container').each(function () {
          if (external__jquery__default()(window).scrollTop() >= external__jquery__default()(this).offset().top - 300) {
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('p'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('img'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('ul'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('ol'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('table'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(external__jquery__default()(this).find('video'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: external__gsap_["Power4"].easeOut });
          }
        });
      });

      external__jquery__default()('.img-wrap').each(function () {
        var self = external__jquery__default()(this);
        var setScrollWatch = setInterval(function () {
          var scroll = external__jquery__default()(window).scrollTop();
          if (scroll >= self.offset().top - 500) {
            external__gsap_["TweenLite"].to(self.find('.img-fake-bg'), 1, { bottom: '0', ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(self.find('.img-fake-bg'), 1, { bottom: '100%', ease: external__gsap_["Power4"].easeOut, delay: .5 });
            clearInterval(setScrollWatch);
          }
        }, 100);
      });
    }

    // componentDidUpdate() {
    //   fetch(this.props.templateUrl).then((resp)=>{ return resp.text() }).then((text)=>{
    //     $('#content').html(text);

    //     window.onbeforeunload = function(){ window.scrollTo(0,0); }
    //   });
    // }

  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'section',
        { className: 'content' },
        external__react__default.a.createElement('div', { className: 'content-fake-bg' }),
        external__react__default.a.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: this.props.templateUrl } }),
        '>',
        external__react__default.a.createElement(
          'div',
          { className: 'container content-text' },
          external__react__default.a.createElement(components_Subscribe, null)
        ),
        external__react__default.a.createElement('hr', { className: 'bottom' })
      );
    }
  }]);

  return Content;
}(external__react__default.a.Component);

/* harmony default export */ var components_Content = (Content_Content);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Next.js
var Next__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Next__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Next__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Next__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Next_Next = function (_React$Component) {
  Next__inherits(Next, _React$Component);

  function Next() {
    Next__classCallCheck(this, Next);

    return Next__possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).apply(this, arguments));
  }

  Next__createClass(Next, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'section',
        { style: this.props.nextTitle === '' ? { display: 'none' } : { display: 'block' },
          className: 'nav' },
        external__react__default.a.createElement(
          'div',
          { className: 'nav_wr' },
          external__react__default.a.createElement(
            'div',
            { className: 'next' },
            '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F'
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'next_title' },
            this.props.nextTitle
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'next-arrow' },
            external__react__default.a.createElement('img', { src: 'static/img/blog/header/arrow-right.svg', alt: 'nextArticle' })
          )
        ),
        external__react__default.a.createElement(
          link__default.a,
          { as: '/' + this.props.href, href: '/post?route=' + this.props.href },
          external__react__default.a.createElement('a', { className: 'nav-link' })
        )
      );
    }
  }]);

  return Next;
}(external__react__default.a.Component);

/* harmony default export */ var components_Next = (Next_Next);
// CONCATENATED MODULE: ./pages/post.js



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










var post_Post = function Post(props) {
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement('meta', { charset: 'utf-8' }),
      external__react__default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
      external__react__default.a.createElement('meta', { name: 'theme-color', content: '#000000' }),
      external__react__default.a.createElement('link', { rel: 'shortcut icon', href: 'data:image/x-icon;,', type: 'image/x-icon' }),
      external__react__default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/fontsblog.css' }),
      external__react__default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/bootstrap-reboot.min.css' }),
      external__react__default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/main.css' }),
      external__react__default.a.createElement(
        'title',
        null,
        '\u0411\u043B\u043E\u0433'
      )
    ),
    external__react__default.a.createElement(components_Title, { data: props.data }),
    external__react__default.a.createElement(components_Content, { templateUrl: props.template }),
    external__react__default.a.createElement(components_Next, { href: props.data.id < props.array.length - 1 ? props.array[props.data.id + 1].route : "#", nextTitle: props.data.id >= props.array.length - 1 ? '' : props.array[props.data.id + 1].title }),
    external__react__default.a.createElement(Footer["a" /* default */], null),
    external__react__default.a.createElement('script', { src: 'https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU', type: 'text/javascript' }),
    external__react__default.a.createElement('script', { src: '../static/js/yandeks_map.js', charset: 'utf-8' })
  );
};

post_Post.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(context) {
    var route, PORT, res2, posts, data, res3, template, res4, array;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            route = context.query.route;

            console.log(context.query);
            PORT = process.env.PORT;
            _context.next = 5;
            return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/data/test-data.json');

          case 5:
            res2 = _context.sent;
            _context.next = 8;
            return res2.json();

          case 8:
            posts = _context.sent;

            console.log(posts);

            data = posts[route];

            console.log(data.id);

            _context.next = 14;
            return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/templates/' + data.templateUrl);

          case 14:
            res3 = _context.sent;
            _context.next = 17;
            return res3.text();

          case 17:
            template = _context.sent;
            _context.next = 20;
            return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/data/blog-single.json');

          case 20:
            res4 = _context.sent;
            _context.next = 23;
            return res4.json();

          case 23:
            array = _context.sent;
            return _context.abrupt('return', { data: data, template: template, array: array });

          case 25:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var post = __webpack_exports__["default"] = (post_Post);

/***/ })
/******/ ]);