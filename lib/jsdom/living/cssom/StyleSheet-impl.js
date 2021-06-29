"use strict";
// https://drafts.csswg.org/cssom/#stylesheet
const idlUtils = require("../generated/utils.js");
const whatwgURL = require("whatwg-url");

exports.implementation = class StyleSheet {
  constructor(globalObject, args, privateData) {
    const { baseURL, disabled } = privateData.options;

    // ok this is kind of serious: set in CSSOM parse
    // I don't think there's a way to mod this referenfce
    // without looping through elements
    this._parentStyleSheet = null;

    this.href = baseURL;

    this.ownerNode = idlUtils.wrapperForImpl(privateData.elementImpl);

    // probably triggers something
    this.disabled = disabled;
  }

  get type() {
    return "text/css";
  }

  get href() {
    return this._href;
  }

  set href(baseURL) {
    // about:blank
    this._href = (baseURL && baseURL.cannotBeABaseURL) === false ?
      whatwgURL.serializeURL(baseURL) :
      null;
  }

  get ownerNode() {
    return this._ownerNode || null;
  }

  set ownerNode(element) {
    this._ownerNode = element ? element : null;
  }

  get parentStyleSheet() {
    return this._parentStyleSheet;
  }

  set parentStyleSheet(sheet) {
    this._parentStyleSheet = sheet;
  }

  get title() {
    if (this.ownerNode) {
      return this.ownerNode.getAttributeNS(null, "title") || null;
    }

    return null;
  }
};
