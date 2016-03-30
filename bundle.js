webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ReactDOM, React) {'use strict';

	var _app = __webpack_require__(161);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * DESCRIPTION
	 *
	 * @prop {type} PROP - PROP_DESCRIPTION
	 */

	ReactDOM.render(React.createElement(_app2.default, null), document.getElementById('root'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(148)))

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _draftJs = __webpack_require__(162);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * DESCRIPTION
	 *
	 * @prop {type} PROP - PROP_DESCRIPTION
	 */

	var MyEditor = (_temp = _class = function (_React$Component) {
	  _inherits(MyEditor, _React$Component);

	  // React.PropTypes

	  function MyEditor(props) {
	    _classCallCheck(this, MyEditor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyEditor).call(this, props));

	    var styles = {
	      cursor: {
	        borderRight: '1px solid black',
	        borderLeft: '1px solid black'
	      }
	    };

	    var cursorStrategy = function cursorStrategy(contentBlock, cb) {
	      console.log('[app] @cursorStrategy -> contentBlock: ', contentBlock);
	      cb(0, 1);
	    };

	    var HandleCursor = function HandleCursor(props) {
	      console.log('[app] @HandleCursor -> props: ', props);
	      return React.createElement(
	        'span',
	        _extends({}, props, { style: styles.cursor }),
	        props.children
	      );
	    };

	    var compositeDecorator = new _draftJs.CompositeDecorator([{
	      strategy: cursorStrategy,
	      component: HandleCursor
	    }]);

	    _this.state = {
	      editorState: _draftJs.EditorState.createEmpty(compositeDecorator)
	    };

	    _this.onChange = function (editorState) {
	      _this.setState({ editorState: editorState });
	    };

	    return _this;
	  }

	  _createClass(MyEditor, [{
	    key: 'handleKeyCommand',
	    value: function handleKeyCommand(command) {
	      var newState = _draftJs.RichUtils.handleKeyCommand(this.state.editorState, command);
	      if (newState) {
	        this.onChange(newState);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: '_onBoldClick',
	    value: function _onBoldClick() {
	      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var editorState = this.state.editorState;


	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { onClick: this._onBoldClick.bind(this) },
	          'Bold'
	        ),
	        React.createElement(_draftJs.Editor, {
	          editorState: editorState,
	          handleKeyCommand: this.handleKeyCommand.bind(this),
	          onChange: this.onChange
	        })
	      );
	    }
	  }]);

	  return MyEditor;
	}(React.Component), _class.displayName = 'MyEditor', _class.propTypes = {}, _temp);
	exports.default = MyEditor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(148)))

/***/ }

});