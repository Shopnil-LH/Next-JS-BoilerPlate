/**
 * @method isObjectEmpty
 * @param {object} obj
 * @returns {boolean}
 * @description this method will check an object empty or not. If empty it will return true else false
 */
export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};
