/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extend-native */
interface String {
  /** 주어진  */
  toHex(): number;
}

String.prototype.toHex = function () {
  return Number('0x' + this);
};
