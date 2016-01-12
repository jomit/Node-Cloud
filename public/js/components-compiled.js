"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _jquery = require("../lib/jquery/dist/jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _knockout = require("../lib/knockout/dist/knockout");

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexViewModel = (function () {
    function IndexViewModel() {
        _classCallCheck(this, IndexViewModel);

        this.category = _knockout2.default.observable("Health");
        this.ideas = _knockout2.default.observableArray();

        this.getData();
    }

    _createClass(IndexViewModel, [{
        key: "getData",
        value: function getData() {
            var _this = this;

            var currentCategory = this.category();
            var url = "data/" + currentCategory + "-ideas.json";

            fetch(url).then(function (response) {
                return response.json();
            }).then(function (json) {
                _this.ideas(json);
            });
        }
    }]);

    return IndexViewModel;
})();

(0, _jquery2.default)(function () {
    return _knockout2.default.applyBindings(new IndexViewModel());
});

var ideaList = (function (_HTMLElement) {
    _inherits(ideaList, _HTMLElement);

    function ideaList() {
        _classCallCheck(this, ideaList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ideaList).apply(this, arguments));
    }

    _createClass(ideaList, [{
        key: "createdCallback",
        value: function createdCallback() {
            this.innerHTML = "\n        <table cellpadding=\"5\">\n            <thead>\n                <tr style=\"font-weight:bold\">\n                    <td>Title</td>\n                    <td>I like it</td>\n                    <td>It won't work</td>\n                </tr>\n             </thead>\n             <tbody data-bind=\"foreach: ideas\">\n                <tr>\n                    <td><a data-bind=\"attr: { href: url }, text: title\" target=\"_blank\"></a></td>\n                    <td><span data-bind=\"text: upvotes\"></span></td>\n                    <td><span  data-bind=\"text: downvotes\"></span></td>         \n                </tr>\n             </tbody>\n        </table>\n        ";
        }
    }]);

    return ideaList;
})(HTMLElement);

document.registerElement("idea-list", ideaList);