"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var JsSearch = _interopRequireWildcard(require("js-search"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSearch(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      futsals = _useState2[0],
      setFutsals = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      futsalContainer = _useState4[0],
      setContainer = _useState4[1];

  (0, _react.useEffect)(function () {
    // getFutsals();
    _axios["default"].get(process.env.REACT_APP_URL + "futsal/showall").then(function (response) {
      setFutsals(futsals = response.data.data);
    })["catch"](function (err) {
      console.log(err.response);
    });
  }, []); // const getFutsals = async ()=>{
  //     try
  //     {
  //         let response =  await axios.get(process.env.REACT_APP_URL+"futsal/showall");
  //         console.log(response.data.message)
  //         let data = response.data.data;
  //         setFutsals(
  //             data
  //         )
  //     }
  //     catch(ex)
  //     {
  //         console.log(ex);
  //     }
  // }

  var getCheckedId = function getCheckedId() {
    var idContainer = futsals.map(function (val) {
      return val._id;
    });
    setContainer(futsalContainer = idContainer);
    return futsalContainer;
  };

  var searchData = function searchData(e) {
    var search = new JsSearch.Search('futsalName'); // search.indexStrategy = new JsSearch.PrefixIndexStrategy();

    search.addIndex('futsalName');
    search.addIndex('location');
    search.addIndex('contact');
    search.addDocuments(futsals); // search.searchIndex = new JsSearch.TfIdfSearchIndex();

    var searchItems = search.search(e.target.value.trim());
    console.log(searchItems); // setFutsals(
    //     futsals = searchItems
    // )
    //console.log(futsals);
    // console.log(searchItems)
    // console.log(e.target.value.trim())
  };

  return {
    searchData: searchData,
    futsals: futsals,
    getCheckedId: getCheckedId
  };
}

var _default = useSearch;
exports["default"] = _default;