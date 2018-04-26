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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlogList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/BlogList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlogList = function (_React$Component) {
    _inherits(BlogList, _React$Component);

    function BlogList() {
        _classCallCheck(this, BlogList);

        return _possibleConstructorReturn(this, (BlogList.__proto__ || Object.getPrototypeOf(BlogList)).apply(this, arguments));
    }

    _createClass(BlogList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Анимация меню, категорий и лого в меню

            var back = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.back_link'),
                logo = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('header .logo svg path'),
                date_public = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.date_public'),
                preheader = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.preheader'),
                h1 = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.h1'),
                categories = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.categories');
            setTimeout(function () {
                back.addClass('block_show');
                date_public.addClass('block_show');
                logo.css('fill', '#fff');
                __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.right_block .description').addClass('show');
            }, 300);

            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].from(preheader, .5, { css: { top: '100px' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(preheader, .2, { css: { opacity: '1' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].from(h1, .5, { css: { top: '100px' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.2 });
            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(h1, .2, { css: { opacity: '1' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.2 });
            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].from(categories, .5, { css: { top: '100px' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.4 });
            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(categories, .2, { css: { opacity: '1' }, ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.4 });

            //Меню
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(document).ready(function () {

                __WEBPACK_IMPORTED_MODULE_2_jquery___default()(window).on('scroll', function () {

                    var menu = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.top_wr');
                    var logo = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.logo');
                    var menuPos = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.top_wr').offset().top;
                    var nav = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.nav');
                    var content = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.content-fake-bg');
                    var subscribe = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.content .subscribe');
                    if (__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).scrollTop() > menu.height()) {
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
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(document).ready(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.news-item').each(function (i) {
                    if (i < 3) {
                        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this), .5, { opacity: '1', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.6 + i / 5 });
                        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].from(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this), .5, { bottom: '-60px', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.6 + i / 5 });
                        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).find('.news-fake-bg'), .5, { bottom: '100%', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.8 + i / 5 });
                    }
                });
            });

            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(window).scroll(function () {

                __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.news-item').each(function (i) {
                    if (__WEBPACK_IMPORTED_MODULE_2_jquery___default()(window).scrollTop() >= __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).offset().top - 600 && i > 2) {
                        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this), .5, { opacity: '1', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.6 + i / 5 });
                        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).find('.news-fake-bg'), .5, { bottom: '100%', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.8 + i / 5 });
                    }
                });

                __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.news-header-wrap').each(function (i) {
                    var _this2 = this;

                    if (__WEBPACK_IMPORTED_MODULE_2_jquery___default()(window).scrollTop() >= __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).parent().offset().top - 350) {
                        setTimeout(function () {
                            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(_this2).css('opacity', '1');
                            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(_this2).find('.news-list-bradcrumbs'), 1, { opacity: '1', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut });
                            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(_this2).find('.news-item-line'), 1, { opacity: '1', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.3 });
                            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(_this2).find('.news-h3'), 1, { opacity: '1', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.6 });
                            __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(_this2).find('.news-h3'), .5, { bottom: '0', ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut, delay: 0.6 });
                        }, 1000);
                    }
                });
            });

            //Логика работы категорий
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(document).ready(function () {
                var categoriesItem = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.categories .categories-item'),
                    firstCategoryItem = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.categories .categories-item:first-child > div'),
                    newsItem = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.news-item');

                firstCategoryItem.addClass('active-line');

                categoriesItem.click(function () {
                    var self = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this);

                    categoriesItem.each(function () {
                        __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).find('div').removeClass('active-line ');
                    });

                    __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).find('div').addClass('active-line ');

                    newsItem.each(function () {
                        if (__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).attr('data-category') === self.attr('data-category')) {
                            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).css('display', 'block');
                        } else if (self.attr('data-category') === "Все") {
                            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).css('display', 'block');
                        } else {
                            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).css('display', 'none');
                        }
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'news-list', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                    }
                },
                this.props.data.map(function (_ref) {
                    var id = _ref.id,
                        category = _ref.category,
                        srcImg = _ref.srcImg,
                        date = _ref.date,
                        route = _ref.route,
                        title = _ref.title,
                        description = _ref.description;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: id, 'data-category': category, className: 'news-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 132
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'news-img-wrap', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 133
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'news-img', src: srcImg, alt: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 134
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'news-fake-bg', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 135
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'news-header-wrap', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 137
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'news-item-line', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 138
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'news-item-header', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 139
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'news-list-bradcrumbs', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 140
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'span',
                                        { className: 'bradcrumbs-category', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 141
                                            }
                                        },
                                        category
                                    ),
                                    ' | ',
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'span',
                                        { className: 'bradcrumbs-date', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 141
                                            }
                                        },
                                        date
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h3',
                                    { className: 'news-h3', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 143
                                        }
                                    },
                                    title
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { as: '/' + route, href: '/post?route=' + route, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 146
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { className: 'news-item-link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 147
                                }
                            })
                        )
                    );
                })
            );
        }
    }]);

    return BlogList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (BlogList);

/***/ }),

/***/ "./components/Categories.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/Categories.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Categories = function (_React$Component) {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'categories', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'name', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'categories-list', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          this.props.categories.map(function (_ref) {
            var category = _ref.category,
                id = _ref.id;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: id, 'data-category': category, className: 'categories-item', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              category,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'category-line', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              })
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })
      );
    }
  }]);

  return Categories;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Categories);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/Footer.js';

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
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'footer',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'left_block', __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'znak_wr', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/img/blog/footer/znak.svg',
                alt: '\u0417\u043D\u0430\u043A AIVI', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'right_block', __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'contact_wr', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'b_left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'title', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  },
                  '\u041E\u0444\u0438\u0441'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'descr address', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'underline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      }
                    },
                    '\u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0411\u043E\u043B\u044C\u0448\u0430\u044F'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    }
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'underline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      }
                    },
                    '\u041D\u043E\u0432\u043E\u0434\u043C\u0438\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F, 36'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'b_right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'title', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    }
                  },
                  '\u0421\u0432\u044F\u0437\u044C'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'descr', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 120
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'tel:+74951200834',
                      className: 'underline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      }
                    },
                    '+7 (495) 120-08-34'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'mailto:info@aivi.ru',
                      className: 'underline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      }
                    },
                    'info@aivi.ru'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'copyright_wr', __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                }
              },
              '\xA92018 \u041E\u041E\u041E \xAB\u0410\u0419\u0412\u0418\xBB.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              '\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'map_block', __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'map_block_bg', __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'map_container', __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'close_map', __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'map', id: 'YMapsID', __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            })
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Footer);

/***/ }),

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/Menu.js';

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
        { className: 'top_wr logo_rpw ' + (this.props.containerStyle !== undefined ? this.props.containerStyle : ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'logo ' + (this.props.logoStyle !== undefined ? this.props.logoStyle : ''), __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '150.39', height: '67.056', viewBox: '0 0 150.39034 67.056482', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M144.808.234a5.5 5.5 0 0 0-5.418 5.579V61.46a5.5 5.5 0 1 0 11 0V5.813a5.5 5.5 0 0 0-5.582-5.579zM85.282.242a5.5 5.5 0 0 0-5.261 7.506l20.908 55.647a5.5 5.5 0 0 0 10.306-.026l20.592-55.648a5.5 5.5 0 1 0-10.316-3.817L106.038 45.72 90.32 3.879A5.5 5.5 0 0 0 85.282.242zM66.714 0a5.5 5.5 0 0 0-5.418 5.579v55.648a5.5 5.5 0 1 0 11 0V5.58A5.5 5.5 0 0 0 66.714 0zM26.978.314a5.5 5.5 0 0 0-5.06 3.516L.407 59.48a5.5 5.5 0 1 0 10.26 3.964l5.567-14.406h22.317l5.842 14.48a5.5 5.5 0 1 0 10.2-4.113L32.149 3.756a5.5 5.5 0 0 0-5.17-3.442zm.177 20.471l6.96 17.252H20.486l6.668-17.252z', overflow: 'visible', color: '#000', fontWeight: '400', fontFamily: 'sans-serif', whiteSpace: 'normal', fill: '#1b1b1c', fillRule: 'evenodd', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'http://aivi.ru/', className: 'logo-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'title_wr', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'title ' + (this.props.titleStyle !== undefined ? this.props.titleStyle : ''), __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'menu-link', href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Categories__ = __webpack_require__("./components/Categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_BlogList__ = __webpack_require__("./components/BlogList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);

var _jsxFileName = '/home/igorrom/blog-react-next/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Blog = function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charset: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: 'data:image/x-icon;,', type: 'image/x-icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/fontsblog.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/bootstrap-reboot.min.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/main.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            '\u0411\u043B\u043E\u0433'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'noscript',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          'You need to enable JavaScript to run this app.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'header',
          { className: 'empty', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* default */], { containerStyle: 'changeColor white-bg',
            logoStyle: 'black',
            titleStyle: 'title-black', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'main',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'section-header', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'preheader', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                this.props.title.preheader
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                { className: 'h1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                this.props.title.h1
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Categories__["a" /* default */], { categories: this.props.c, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'ul',
              { className: 'news-list', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_BlogList__["a" /* default */], { data: this.props.data, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);


Blog.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, h1, res2, posts, res3, cat;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()('http://localhost:3000/static/data/h1.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          h1 = _context.sent;
          _context.next = 8;
          return __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()('http://localhost:3000/static/data/blog-single.json');

        case 8:
          res2 = _context.sent;
          _context.next = 11;
          return res2.json();

        case 11:
          posts = _context.sent;
          _context.next = 14;
          return __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()('http://localhost:3000/static/data/blog-categories.json');

        case 14:
          res3 = _context.sent;
          _context.next = 17;
          return res3.json();

        case 17:
          cat = _context.sent;
          return _context.abrupt('return', {
            title: h1,
            data: posts,
            c: cat
          });

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "gsap":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map