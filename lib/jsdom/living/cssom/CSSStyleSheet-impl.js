"use strict";
// https://drafts.csswg.org/cssom/#css-style-sheets
const cssom = require("cssom");
const StyleSheet = require("./StyleSheet-impl.js").implementation;

exports.implementation = class CSSStyleSheet extends StyleSheet {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    const { sheetText } = privateData;
    this._sheet = cssom.parse(sheetText);
    this._cssRules = this._sheet.cssRules;
    this._parentStyleSheet = this._sheet._parentStyleSheet;
  }

  get cssRules() {
    return this._cssRules;
  }

  insertRule(rule, index = 0) {
    return this._sheet.insertRule(rule, index);
  }

  deleteRule(index) {
    this._sheet.deleteRule(index);
  }
};
