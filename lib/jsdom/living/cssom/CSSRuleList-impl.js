"use strict";

const idlUtils = require("../generated/utils.js");

exports.implementation = class CSSRuleList {
  constructor(globalObject, args, privateData) {
    this._list = privateData.cssRules;
  }

  get length() {
    return this._list.length;
  }

  item(index) {
    const result = this._list[index];
    return result !== undefined ? result : null;
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._list.keys();
  }
};
