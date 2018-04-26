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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(1);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: external "gsap"
var external__gsap_ = __webpack_require__(2);
var external__gsap__default = /*#__PURE__*/__webpack_require__.n(external__gsap_);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Categories.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Categories_Categories = function (_React$Component) {
  _inherits(Categories, _React$Component);

  function Categories(props) {
    _classCallCheck(this, Categories);

    var _this = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Categories, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      // fetch('../static/data/blog-categories.json').then((resp)=>{ return resp.json() }).then((data)=>{
      //   this.setState({data: data});
      //   const firstCategoryItem = $('.categories .categories-item:first-child > div');
      //   firstCategoryItem.addClass('active-line');
      // });

    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'categories' },
        external__react__default.a.createElement(
          'h2',
          { className: 'name' },
          '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
        ),
        external__react__default.a.createElement(
          'ul',
          { className: 'categories-list' },
          this.props.categories.map(function (_ref) {
            var category = _ref.category,
                id = _ref.id;
            return external__react__default.a.createElement(
              'li',
              { key: id, 'data-category': category, className: 'categories-item' },
              category,
              external__react__default.a.createElement('div', { className: 'category-line' })
            );
          })
        ),
        external__react__default.a.createElement('div', { className: 'clearfix' })
      );
    }
  }]);

  return Categories;
}(external__react__default.a.Component);

/* harmony default export */ var components_Categories = (Categories_Categories);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/BlogList.js
var BlogList__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BlogList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlogList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BlogList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlogList_BlogList = function (_React$Component) {
    BlogList__inherits(BlogList, _React$Component);

    function BlogList() {
        BlogList__classCallCheck(this, BlogList);

        return BlogList__possibleConstructorReturn(this, (BlogList.__proto__ || Object.getPrototypeOf(BlogList)).apply(this, arguments));
    }

    BlogList__createClass(BlogList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Анимация меню, категорий и лого в меню

            var back = external__jquery__default()('.back_link'),
                logo = external__jquery__default()('header .logo svg path'),
                date_public = external__jquery__default()('.date_public'),
                preheader = external__jquery__default()('.preheader'),
                h1 = external__jquery__default()('.h1'),
                categories = external__jquery__default()('.categories');
            setTimeout(function () {
                back.addClass('block_show');
                date_public.addClass('block_show');
                logo.css('fill', '#fff');
                external__jquery__default()('.right_block .description').addClass('show');
            }, 300);

            external__gsap_["TweenLite"].from(preheader, .5, { css: { top: '100px' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].to(preheader, .2, { css: { opacity: '1' }, ease: external__gsap_["Power4"].easeOut });
            external__gsap_["TweenLite"].from(h1, .5, { css: { top: '100px' }, ease: external__gsap_["Power4"].easeOut, delay: 0.2 });
            external__gsap_["TweenLite"].to(h1, .2, { css: { opacity: '1' }, ease: external__gsap_["Power4"].easeOut, delay: 0.2 });
            external__gsap_["TweenLite"].from(categories, .5, { css: { top: '100px' }, ease: external__gsap_["Power4"].easeOut, delay: 0.4 });
            external__gsap_["TweenLite"].to(categories, .2, { css: { opacity: '1' }, ease: external__gsap_["Power4"].easeOut, delay: 0.4 });

            //Меню
            external__jquery__default()(document).ready(function () {

                external__jquery__default()(window).on('scroll', function () {

                    var menu = external__jquery__default()('.top_wr');
                    var logo = external__jquery__default()('.logo');
                    var menuPos = external__jquery__default()('.top_wr').offset().top;
                    var nav = external__jquery__default()('.nav');
                    var content = external__jquery__default()('.content-fake-bg');
                    var subscribe = external__jquery__default()('.content .subscribe');
                    if (external__jquery__default()(this).scrollTop() > menu.height()) {
                        menu.addClass('scroll');
                    } else {
                        menu.removeClass('scroll');
                    }
                });
            });

            // const newsItemLink = $('.news-item-link');

            // newsItemLink.click(function(e) {
            //   e.preventDefault();
            //   const linkUrl = $(this).attr('href');
            //   $('#root').fadeOut(800);
            //   TweenLite.to($('.h1'), 0.8, {y: -30});
            //   TweenLite.to($('.h1'), 0.1, {opacity: 0});
            //   //Прячем футер при переходе на отдельный пост
            //   // $('#footer').css('visibility', 'hidden');
            //   setTimeout(function(url) { window.location = url; }, 800, linkUrl);
            // });

            //Анимация появления постов    
            external__jquery__default()(document).ready(function () {
                external__jquery__default()('.news-item').each(function (i) {
                    if (i < 3) {
                        external__gsap_["TweenLite"].to(external__jquery__default()(this), .5, { opacity: '1', ease: external__gsap_["Power4"].easeOut, delay: 0.6 + i / 5 });
                        external__gsap_["TweenLite"].from(external__jquery__default()(this), .5, { bottom: '-60px', ease: external__gsap_["Power4"].easeOut, delay: 0.6 + i / 5 });
                        external__gsap_["TweenLite"].to(external__jquery__default()(this).find('.news-fake-bg'), .5, { bottom: '100%', ease: external__gsap_["Power4"].easeOut, delay: 0.8 + i / 5 });
                    }
                });
            });

            external__jquery__default()(window).scroll(function () {

                external__jquery__default()('.news-item').each(function (i) {
                    if (external__jquery__default()(window).scrollTop() >= external__jquery__default()(this).offset().top - 600 && i > 2) {
                        external__gsap_["TweenLite"].to(external__jquery__default()(this), .5, { opacity: '1', ease: external__gsap_["Power4"].easeOut, delay: 0.6 + i / 5 });
                        external__gsap_["TweenLite"].to(external__jquery__default()(this).find('.news-fake-bg'), .5, { bottom: '100%', ease: external__gsap_["Power4"].easeOut, delay: 0.8 + i / 5 });
                    }
                });

                external__jquery__default()('.news-header-wrap').each(function (i) {
                    var _this2 = this;

                    if (external__jquery__default()(window).scrollTop() >= external__jquery__default()(this).parent().offset().top - 350) {
                        setTimeout(function () {
                            external__jquery__default()(_this2).css('opacity', '1');
                            external__gsap_["TweenLite"].to(external__jquery__default()(_this2).find('.news-list-bradcrumbs'), 1, { opacity: '1', ease: external__gsap_["Power4"].easeOut });
                            external__gsap_["TweenLite"].to(external__jquery__default()(_this2).find('.news-item-line'), 1, { opacity: '1', ease: external__gsap_["Power4"].easeOut, delay: 0.3 });
                            external__gsap_["TweenLite"].to(external__jquery__default()(_this2).find('.news-h3'), 1, { opacity: '1', ease: external__gsap_["Power4"].easeOut, delay: 0.6 });
                            external__gsap_["TweenLite"].to(external__jquery__default()(_this2).find('.news-h3'), .5, { bottom: '0', ease: external__gsap_["Power4"].easeOut, delay: 0.6 });
                        }, 1000);
                    }
                });
            });

            //Логика работы категорий
            external__jquery__default()(document).ready(function () {
                var categoriesItem = external__jquery__default()('.categories .categories-item'),
                    firstCategoryItem = external__jquery__default()('.categories .categories-item:first-child > div'),
                    newsItem = external__jquery__default()('.news-item');

                firstCategoryItem.addClass('active-line');

                categoriesItem.click(function () {
                    var self = external__jquery__default()(this);

                    categoriesItem.each(function () {
                        external__jquery__default()(this).find('div').removeClass('active-line ');
                    });

                    external__jquery__default()(this).find('div').addClass('active-line ');

                    newsItem.each(function () {
                        if (external__jquery__default()(this).attr('data-category') === self.attr('data-category')) {
                            external__jquery__default()(this).css('display', 'block');
                        } else if (self.attr('data-category') === "Все") {
                            external__jquery__default()(this).css('display', 'block');
                        } else {
                            external__jquery__default()(this).css('display', 'none');
                        }
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return external__react__default.a.createElement(
                'ul',
                { className: 'news-list' },
                this.props.data.map(function (_ref) {
                    var id = _ref.id,
                        category = _ref.category,
                        srcImg = _ref.srcImg,
                        date = _ref.date,
                        route = _ref.route,
                        title = _ref.title,
                        description = _ref.description;
                    return external__react__default.a.createElement(
                        'li',
                        { key: id, 'data-category': category, className: 'news-item' },
                        external__react__default.a.createElement(
                            'div',
                            { className: 'news-img-wrap' },
                            external__react__default.a.createElement('img', { className: 'news-img', src: srcImg, alt: '' }),
                            external__react__default.a.createElement('div', { className: 'news-fake-bg' })
                        ),
                        external__react__default.a.createElement(
                            'div',
                            { className: 'news-header-wrap' },
                            external__react__default.a.createElement('div', { className: 'news-item-line' }),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'news-item-header' },
                                external__react__default.a.createElement(
                                    'div',
                                    { className: 'news-list-bradcrumbs' },
                                    external__react__default.a.createElement(
                                        'span',
                                        { className: 'bradcrumbs-category' },
                                        category
                                    ),
                                    ' | ',
                                    external__react__default.a.createElement(
                                        'span',
                                        { className: 'bradcrumbs-date' },
                                        date
                                    )
                                ),
                                external__react__default.a.createElement(
                                    'h3',
                                    { className: 'news-h3' },
                                    title
                                )
                            )
                        ),
                        external__react__default.a.createElement(
                            link__default.a,
                            { as: '/' + route, href: '/post?route=' + route },
                            external__react__default.a.createElement('a', { className: 'news-item-link' })
                        )
                    );
                })
            );
        }
    }]);

    return BlogList;
}(external__react__default.a.Component);

/* harmony default export */ var components_BlogList = (BlogList_BlogList);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(4);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(8);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var pages_Blog = function (_React$Component) {
  pages__inherits(Blog, _React$Component);

  function Blog() {
    pages__classCallCheck(this, Blog);

    return pages__possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  pages__createClass(Blog, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, {
    key: 'render',
    value: function render() {
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
          ),
          external__react__default.a.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' })
        ),
        external__react__default.a.createElement(
          'noscript',
          null,
          'You need to enable JavaScript to run this app.'
        ),
        external__react__default.a.createElement(
          'header',
          { className: 'empty' },
          external__react__default.a.createElement(Menu["a" /* default */], { containerStyle: 'changeColor white-bg',
            logoStyle: 'black',
            titleStyle: 'title-black' })
        ),
        external__react__default.a.createElement(
          'main',
          null,
          external__react__default.a.createElement(
            'div',
            { className: 'container' },
            external__react__default.a.createElement(
              'div',
              { className: 'section-header' },
              external__react__default.a.createElement(
                'div',
                { className: 'preheader' },
                this.props.title.preheader
              ),
              external__react__default.a.createElement(
                'h1',
                { className: 'h1' },
                this.props.title.h1
              ),
              external__react__default.a.createElement(components_Categories, { categories: this.props.c })
            ),
            external__react__default.a.createElement(
              'ul',
              { className: 'news-list' },
              external__react__default.a.createElement(components_BlogList, { data: this.props.data })
            )
          )
        ),
        external__react__default.a.createElement(Footer["a" /* default */], null),
        external__react__default.a.createElement('script', { src: 'https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU', type: 'text/javascript' }),
        external__react__default.a.createElement('script', { src: '../static/js/yandeks_map.js', charset: 'utf-8' })
      );
    }
  }]);

  return Blog;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Blog);


pages_Blog.getInitialProps = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
  var PORT, res, h1, res2, posts, res3, cat;
  return regenerator__default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          PORT = process.env.PORT || 3000;

          console.log(PORT, 'from fetch index');
          _context.next = 4;
          return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/data/h1.json');

        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();

        case 7:
          h1 = _context.sent;
          _context.next = 10;
          return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/data/blog-single.json');

        case 10:
          res2 = _context.sent;
          _context.next = 13;
          return res2.json();

        case 13:
          posts = _context.sent;
          _context.next = 16;
          return external__isomorphic_unfetch__default()('http://localhost:' + PORT + '/static/data/blog-categories.json');

        case 16:
          res3 = _context.sent;
          _context.next = 19;
          return res3.json();

        case 19:
          cat = _context.sent;
          return _context.abrupt('return', {
            title: h1,
            data: posts,
            c: cat
          });

        case 21:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/***/ })
/******/ ]);