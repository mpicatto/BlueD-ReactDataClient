"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setData = setData;
exports.cleanData = cleanData;
exports.CLEAN_DATA = exports.SET_DATA = void 0;
var SET_DATA = 'SET_DATA';
exports.SET_DATA = SET_DATA;
var CLEAN_DATA = 'CLEAN_DATA';
exports.CLEAN_DATA = CLEAN_DATA;

function setData(data) {
  return {
    type: SET_DATA,
    payload: data
  };
}

function cleanData() {
  return {
    type: CLEAN_DATA
  };
}