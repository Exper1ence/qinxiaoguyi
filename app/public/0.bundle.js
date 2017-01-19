webpackJsonp([0],{

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(186);
var $Object = __webpack_require__(10).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(15)
  , $getOwnPropertyDescriptor = __webpack_require__(61).f;

__webpack_require__(113)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReturnTop__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Words__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "Page", function() { return __WEBPACK_IMPORTED_MODULE_0__Page__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ReturnTop", function() { return __WEBPACK_IMPORTED_MODULE_1__ReturnTop__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "Words", function() { return __WEBPACK_IMPORTED_MODULE_2__Words__["a"]; });






/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page; });









var Page = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Page, _Component);

    function Page() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Page);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Page.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Page)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Page, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;
            var _document$body = document.body,
                clientHeight = _document$body.clientHeight,
                clientWidth = _document$body.clientWidth;

            var style = {
                width: clientWidth,
                height: clientHeight
            };
            return __WEBPACK_IMPORTED_MODULE_6__components_Component__["a" /* default */].createElement(
                'div',
                { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props.style, style, {
                        overflow: 'hidden'
                    }) },
                __WEBPACK_IMPORTED_MODULE_6__components_Component__["a" /* default */].createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
                            width: clientWidth + 50,
                            overflow: 'scroll',
                            marginRight: -50
                        }) },
                    __WEBPACK_IMPORTED_MODULE_6__components_Component__["a" /* default */].createElement(
                        'div',
                        { style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
                                height: clientHeight * 2
                            }) },
                        children
                    )
                )
            );
        }
    }]);

    return Page;
}(__WEBPACK_IMPORTED_MODULE_6__components_Component__["a" /* default */]);



/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectDestructuringEmpty__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectDestructuringEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectDestructuringEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_scss__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeout__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_react_arguments__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Timer__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReturnTop; });








var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}







var ReturnTop = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_react_arguments__["d" /* args */])(), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_react_arguments__["d" /* args */])(), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_react_arguments__["d" /* args */])(), __WEBPACK_IMPORTED_MODULE_9_react_timeout___default()(_class = (_class2 = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ReturnTop, _Component);

    function ReturnTop() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ReturnTop);

        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReturnTop.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ReturnTop)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ReturnTop, [{
        key: 'awake',
        value: function awake() {
            var body = document.body;
            document.addEventListener('scroll', this.handleScroll);
            return {
                state: {
                    name: 'return-top-hide'
                },
                top: document.body.scrollTop,
                body: body,
                timer: new __WEBPACK_IMPORTED_MODULE_11__Timer__["a" /* default */](300),
                height: document.body.clientHeight / 2
            };
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(_ref) {
            var body = _ref.body,
                top = _ref.top,
                setState = _ref.setState,
                height = _ref.height;

            var newTop = body.scrollTop;
            if (newTop > top || newTop < height) {
                setState({ name: 'return-top-hide' });
            } else if (newTop < top) {
                setState({ name: '' });
            }
            this.top = newTop;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop(_ref2, _ref3, _ref4) {
            var _scrollToTop = _ref2.scrollToTop,
                timer = _ref2.timer,
                scale = _ref2.scale,
                body = _ref2.body;
            var requestAnimationFrame = _ref4.requestAnimationFrame;

            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref3);

            body.scrollTop = timer.left * scale;
            if (body.scrollTop > 0) requestAnimationFrame(_scrollToTop);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(_ref5) {
            var scrollToTop = _ref5.scrollToTop,
                top = _ref5.top,
                timer = _ref5.timer;

            this.scale = top / 300;
            timer.start();
            requestAnimationFrame(scrollToTop);
        }
    }, {
        key: 'render',
        value: function render(_ref6, _ref7) {
            var name = _ref7.name;

            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref6);

            return __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement('div', { className: 'return-top ' + name, key: 0,
                onClick: this.handleClick.bind(this)
            });
        }
    }]);

    return ReturnTop;
}(__WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */]), (_applyDecoratedDescriptor(_class2.prototype, 'handleScroll', [_dec], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'handleScroll'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'scrollToTop', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'scrollToTop'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_dec3], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'handleClick'), _class2.prototype)), _class2)) || _class);


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Timer; });




var Timer = function () {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Timer, [{
        key: "left",
        get: function get() {
            return Math.max(0, this._end - Date.now());
        }
    }, {
        key: "isUp",
        get: function get() {
            return Date.now() - this._start >= this._duration;
        }
    }]);

    function Timer(_duration) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Timer);

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this, {
            _start: 0,
            _duration: _duration,
            _end: _duration
        });
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Timer, [{
        key: "start",
        value: function start() {
            this._start = Date.now();
            this._end = this._duration + this._start;
        }
    }]);

    return Timer;
}();



/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeout__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_react_arguments__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_motion__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_motion__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Word; });









var _dec, _dec2, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}






var Word = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_react_arguments__["d" /* args */])(), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__components_react_arguments__["d" /* args */])(), __WEBPACK_IMPORTED_MODULE_9_react_timeout___default()(_class = (_class2 = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Word, _Component);

    function Word() {
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Word);

        return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Word.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Word)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Word, [{
        key: 'awake',
        value: function awake(_ref) {
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref);

            return {};
        }
    }, {
        key: 'hide',
        value: function hide(_ref2) {
            var setState = _ref2.setState;

            setState({ name: 'word-hide' });
        }
    }, {
        key: 'show',
        value: function show(_ref3) {
            var setState = _ref3.setState;

            setState({ name: 'word-show' });
        }
    }, {
        key: 'render',
        value: function render(_ref4, _ref5, _ref6) {
            var className = _ref6.className,
                text = _ref6.text,
                bgVisible = _ref6.bgVisible,
                textVisible = _ref6.textVisible;

            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref5);

            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref4);

            return __WEBPACK_IMPORTED_MODULE_8__components_Component__["a" /* default */].createElement(
                __WEBPACK_IMPORTED_MODULE_11_react_motion__["Motion"],
                {
                    defaultStyle: { opacity: 0 }, style: { opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_react_motion__["spring"])(bgVisible ? 1 : 0) }
                },
                function (style) {
                    return __WEBPACK_IMPORTED_MODULE_8__components_Component__["a" /* default */].createElement(
                        'div',
                        { className: 'jcct aict', style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
                                width: 58,
                                height: 58,
                                fontSize: 36,
                                fontWeight: 'bold',
                                backgroundImage: 'url(' + __webpack_require__(314) + ')',
                                backgroundSize: 'cover'
                            }, style) },
                        __WEBPACK_IMPORTED_MODULE_8__components_Component__["a" /* default */].createElement(
                            __WEBPACK_IMPORTED_MODULE_11_react_motion__["Motion"],
                            {
                                defaultStyle: { opacity: 0 }, style: { opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_react_motion__["spring"])(textVisible ? 1 : 0) }
                            },
                            function (style) {
                                return __WEBPACK_IMPORTED_MODULE_8__components_Component__["a" /* default */].createElement(
                                    'div',
                                    { style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, style) },
                                    text
                                );
                            }
                        )
                    );
                }
            );
        }
    }]);

    return Word;
}(__WEBPACK_IMPORTED_MODULE_8__components_Component__["a" /* default */]), (_applyDecoratedDescriptor(_class2.prototype, 'hide', [_dec], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'hide'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'show', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'show'), _class2.prototype)), _class2)) || _class);


Word.defaultProps = {
    text: ''
};

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_timeout__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_react_arguments__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollSensitive__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Word__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_motion__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_motion__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Words; });








var _dec, _dec2, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}







// noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
// gentle: { stiffness: 120, damping: 14 },
// wobbly: { stiffness: 180, damping: 12 },
// stiff: { stiffness: 210, damping: 20 }
var Words = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__components_react_arguments__["b" /* bind */])(), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__components_react_arguments__["b" /* bind */])(), __WEBPACK_IMPORTED_MODULE_8_react_timeout___default()(_class = (_class2 = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Words, _Component);

    function Words() {
        var _ref;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Words);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Words.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Words)).call.apply(_ref, [this].concat(args))), _this), _this.height = __WEBPACK_IMPORTED_MODULE_9__components_react_arguments__["c" /* height */] / 2 + 100, _this.width = __WEBPACK_IMPORTED_MODULE_9__components_react_arguments__["a" /* width */] + 200, _this.timer = 0, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Words, [{
        key: 'awake',
        value: function awake() {
            this.state = {
                isVisible: false,
                textCount: 0
            };
        }
    }, {
        key: 'start',
        value: function start() {
            this.handleIn();
        }
    }, {
        key: 'handleIn',
        value: function handleIn() {
            var _this2 = this;

            this.setState({ textCount: 0 });
            var timer = this.timer = setTimeout(function () {
                if (_this2.timer === timer) {
                    _this2.setState({ isVisible: true });
                    _this2.startCount();
                }
            }, 500);
        }
    }, {
        key: 'handleOut',
        value: function handleOut() {
            this.setState({ isVisible: false, textCount: 0 });
        }
    }, {
        key: 'startCount',
        value: function startCount() {
            var _this3 = this;

            this.setState({ textCount: this.state.textCount + 1 });
            if (this.state.textCount < 4) {
                (function () {
                    var timer = _this3.timer = setTimeout(function () {
                        if (_this3.timer === timer) {
                            _this3.startCount();
                        }
                    }, 500);
                })();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var height = this.height,
                width = this.width;
            var _state = this.state,
                isVisible = _state.isVisible,
                textCount = _state.textCount;

            var words = ['琴', '箫', '古', '艺'].map(function (w, i) {
                return __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_11__Word__["a" /* default */], { key: i, text: w, bgVisible: isVisible, textVisible: i < textCount });
            });
            return __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(
                'div',
                { className: 'w100p h100p jcfe aict fdcl ofhi', style: {
                        height: height
                    } },
                [__WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_10__ScrollSensitive__["a" /* default */], {
                    isIn: !0,
                    min: 0,
                    max: height / 2,
                    onIn: this.handleIn,
                    onOut: this.handleOut,
                    key: 0
                }), __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(
                    'div',
                    { key: 1, className: 'words between between-center' },
                    words
                ), __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(
                    __WEBPACK_IMPORTED_MODULE_12_react_motion__["Motion"],
                    { key: 2,
                        defaultStyle: {
                            marginRight: -width
                        },
                        style: {
                            marginRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_motion__["spring"])(isVisible ? 0 : -width, {
                                stiffness: 400, damping: 12
                            })
                        } },
                    function (style) {
                        return __WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */].createElement(
                            'div',
                            { className: 'words-synopsis center-center',
                                style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, style, {
                                    height: 100,
                                    width: 100,
                                    fontSize: 20
                                })
                            },
                            '\u62DB\u751F\u7B80\u7AE0'
                        );
                    }
                )]
            );
        }
    }]);

    return Words;
}(__WEBPACK_IMPORTED_MODULE_7__components_Component__["a" /* default */]), (_applyDecoratedDescriptor(_class2.prototype, 'handleIn', [_dec], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'handleIn'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleOut', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'handleOut'), _class2.prototype)), _class2)) || _class);


Words.defaultProps = {};

/***/ },

/***/ 312:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 313:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3974c4a68deb8f77eaeb0b833368d731.png";

/***/ }

});