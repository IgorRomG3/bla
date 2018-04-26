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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subscribe__ = __webpack_require__("./components/Subscribe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = '/home/igorrom/blog-react-next/components/Content.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).on('scroll', function () {

        var menu = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.top_wr');
        var logo = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.logo');
        var conPos = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.content-fake-bg').position().top;
        var menuPos = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.top_wr').offset().top;
        // var hiddenMenu = $('.nav').position().top+$('.top_wr').height();
        var navPos = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.form-subscribe').offset().top - 80;
        var nav = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.nav');
        var content = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.content-fake-bg');
        var subscribe = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.content .subscribe');
        // var subscribePos = $('.content .subscribe').before().position().top;

        if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).scrollTop() > menu.height()) {
          menu.addClass('scroll');
        } else {
          menu.removeClass('scroll');
        }

        if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).scrollTop() > conPos) {
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
          __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('.nav_wr'), 1, { transform: 'matrix(1, 0, 0, 1, 0, 20)', ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut, delay: 0.1 });
        } else {
          nav.removeClass('big');
          subscribe.removeClass('small');
          content.removeClass('black');
          __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('.nav_wr'), 1, { transform: 'matrix(1, 0, 0, 1, 0, 0)', ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut, delay: 0.1 });
        }

        // Анимация контета секции класса 'content'
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.container').each(function () {
          if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).scrollTop() >= __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).offset().top - 300) {
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('p'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('img'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('ul'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('ol'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('table'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('video'), 1, { css: { transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease' }, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
          }
        });
      });

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.img-wrap').each(function () {
        var self = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this);
        var setScrollWatch = setInterval(function () {
          var scroll = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).scrollTop();
          if (scroll >= self.offset().top - 500) {
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(self.find('.img-fake-bg'), 1, { bottom: '0', ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut });
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(self.find('.img-fake-bg'), 1, { bottom: '100%', ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power4"].easeOut, delay: .5 });
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'content', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'content-fake-bg', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: this.props.templateUrl }, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }),
        '>',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container content-text', __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Subscribe__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'bottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        })
      );
    }
  }]);

  return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Content);

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

/***/ "./components/Next.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/Next.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Next = function (_React$Component) {
  _inherits(Next, _React$Component);

  function Next() {
    _classCallCheck(this, Next);

    return _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).apply(this, arguments));
  }

  _createClass(Next, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { style: this.props.nextTitle === '' ? { display: 'none' } : { display: 'block' },
          className: 'nav', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'nav_wr', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'next', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'next_title', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            this.props.nextTitle
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'next-arrow', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'static/img/blog/header/arrow-right.svg', alt: 'nextArticle', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { as: '/' + this.props.href, href: '/post?route=' + this.props.href, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })
        )
      );
    }
  }]);

  return Next;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Next);

/***/ }),

/***/ "./components/Subscribe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/igorrom/blog-react-next/components/Subscribe.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Subscribe = function (_React$Component) {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: 'form-subscribe', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email',
          name: 'subscribe-email',
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          className: 'subscribe-email',
          placeholder: '\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0430\u0448\u0443 \u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0443', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'subscribe-btn', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      );
    }
  }]);

  return Subscribe;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Subscribe);

/***/ }),

/***/ "./components/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu__ = __webpack_require__("./components/Menu.js");
var _jsxFileName = '/home/igorrom/blog-react-next/components/Title.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title(props) {
    _classCallCheck(this, Title);

    var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }

  _createClass(Title, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var body = document.body;
      body.classList ? body.classList.add('withJs') : body.className += ' withJs';

      var back = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.back_link');
      var logo = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('header .logo svg path');
      var date_public = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.date_public');
      var cont = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.right_block h1, .description span');
      var cont = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.description span');
      setTimeout(function () {
        back.addClass('block_show');
        date_public.addClass('block_show');
        logo.css('fill', '#fff');
        //   $('.right_block .text_desc').addClass('show');
      }, 300);
      setTimeout(function () {
        splitText(".header_title", animateText);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.right_block .description').addClass('show');
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('body.withJs header .description.show::before').addClass('show');
        splitText(".text_desc", animateText2);
      }, 500);

      function animateText(text) {
        var parent = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".header_title");
        var span = parent.find("span");
        var offset;
        var delay = 0;
        __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].set(span, { y: "100%", lineHeight: '5' });
        parent.addClass("show");
        span.each(function (index, el) {

          var currentOffset = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(el).offset().top;
          if (index === 0) {
            offset = currentOffset;
          }

          if (currentOffset > offset + 4) {
            delay += 0.3;
          }
          if (index === span.length - 1) {
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(el), .1, {
              y: "0%",
              lineHeight: '1.23',
              delay: delay,
              ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut,

              onComplete: function onComplete() {
                parent.html(text);
                parent.removeAttr("style");
              }
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(el), .1, { y: "0%", lineHeight: '1.23', delay: delay, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut });
          }

          offset = currentOffset;
        });
      }
      function animateText2(text) {
        var parent = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".text_desc");
        var span = parent.find("span");
        var offset;
        var delay = 0;
        __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].set(span, { y: '100%', lineHeight: '8' });
        parent.addClass("show");

        span.each(function (index, el) {

          var currentOffset = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(el).offset().top;
          if (index === 0) {
            offset = currentOffset;
          }

          if (currentOffset > offset + 4) {
            delay += 0.2;
          }
          if (index === span.length - 1) {

            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(el), .1, { y: '0%', lineHeight: '2.29', delay: delay, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut,
              onComplete: function onComplete() {
                parent.html(text);
                parent.removeAttr("style");
              } });
          } else {
            __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenLite"].to(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(el), .5, { y: '0%', lineHeight: '2.29', delay: delay, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Expo"].easeOut });
          }

          offset = currentOffset;
        });
      }

      function splitText(id, callback) {
        var el = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(id);
        var text = el.html().trim();
        //var textArrayWithBR = text.split("<br>");
        var textArrayWithBR = text.split();
        textArrayWithBR.forEach(function (element, index, array) {
          // var textArray = element.trim().split("");
          array[index] = '<div><span>' + element + '</span></div>';
        });
        el.height(el.height());
        if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).width() >= 1201) {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Menu__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bottom_wr', __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'left_block', __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { onClick: this.goBack, className: 'back_link', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'blank_text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                '\u041D\u0430\u0437\u0430\u0434'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'right_block', __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'date_public', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'category-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                this.props.data.category
              ),
              ' \u2014 ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                this.props.data.date
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'header_title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
                }
              },
              this.props.data.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'description', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text_desc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                },
                this.props.data.description
              )
            )
          )
        )
      );
    }
  }]);

  return Title;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Subscribe__ = __webpack_require__("./components/Subscribe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Title__ = __webpack_require__("./components/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Content__ = __webpack_require__("./components/Content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Next__ = __webpack_require__("./components/Next.js");

var _jsxFileName = '/home/igorrom/blog-react-next/pages/post.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










var Post = function Post(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charset: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: 'data:image/x-icon;,', type: 'image/x-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/fontsblog.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/bootstrap-reboot.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '../static/css/blog/main.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        '\u0411\u043B\u043E\u0433'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Title__["a" /* default */], { data: props.data, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Content__["a" /* default */], { templateUrl: props.template, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Next__["a" /* default */], { href: props.data.id < props.array.length - 1 ? props.array[props.data.id + 1].route : "#", nextTitle: props.data.id >= props.array.length - 1 ? '' : props.array[props.data.id + 1].title, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    })
  );
};

Post.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var route, res2, posts, data, res3, template, res4, array;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            route = context.query.route;

            console.log(context.query);

            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('http://localhost:3000/static/data/test-data.json');

          case 4:
            res2 = _context.sent;
            _context.next = 7;
            return res2.json();

          case 7:
            posts = _context.sent;

            console.log(posts);

            data = posts[route];

            console.log(data.id);

            _context.next = 13;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('http://localhost:3000/static/templates/' + data.templateUrl);

          case 13:
            res3 = _context.sent;
            _context.next = 16;
            return res3.text();

          case 16:
            template = _context.sent;
            _context.next = 19;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('http://localhost:3000/static/data/blog-single.json');

          case 19:
            res4 = _context.sent;
            _context.next = 22;
            return res4.json();

          case 22:
            array = _context.sent;
            return _context.abrupt('return', { data: data, template: template, array: array });

          case 24:
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

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/post.js");


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
//# sourceMappingURL=post.js.map