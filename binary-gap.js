/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let max = 0;
  let binary = n.toString(2);
  //   console.log(binary);
  let start = 0;
  let end = 0;
  while (end != -1) {
    end = binary.indexOf("1", start + 1);
    if (end > -1) {
      let part = binary.substring(start, end);
      if (max < part.length) {
        max = part.length;
      }
      start = end;
    }
  }
  return max;
};
