"use strict";

exports.__esModule = true;

exports.default = function (keys, props) {
  var newProps = Object.assign({}, props);

  keys.forEach(function (key) {
    return delete newProps[key];
  });

  return newProps;
};