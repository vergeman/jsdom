"use strict";

exports.implementation = class StyleSheet {
  constructor() {
    this._parentStyleSheet = null;
  }

  get parentStyleSheet() {
    return this._parentStyleSheet;
  }
};
