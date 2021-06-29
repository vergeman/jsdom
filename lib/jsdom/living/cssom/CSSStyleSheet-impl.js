"use strict";
// https://drafts.csswg.org/cssom/#cssstylesheet
const cssom = require("cssom");
const StyleSheet = require("./StyleSheet-impl.js").implementation;
const CSSRuleList = require("../generated/CSSRuleList.js");

exports.implementation = class CSSStyleSheet extends StyleSheet {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, {
      options: args[0],
      ...privateData
    });

    const { sheetText } = privateData;

    this._sheet = cssom.parse(sheetText);
    const { cssRules } = this._sheet;

    this._cssRuleList = CSSRuleList.create(
      globalObject,
      args,
      { cssRules, ...privateData }
    );
  }

  get cssRules() {
    return this._cssRuleList;
  }

  insertRule(rule, index = 0) {
    return this._sheet.insertRule(rule, index);
  }

  deleteRule(index) {
    this._sheet.deleteRule(index);
  }

  // deprecated

  get rules() {
    return this.cssRules;
  }

  addRule(selector, styleBlock, index) {
    this.insertRule(`${selector} {${styleBlock}}`, index);
  }

  removeRule(index) {
    this.deleteRule(index);
  }
};
