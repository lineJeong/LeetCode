/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var truncateSentence = function(s, k) {
//     return s.split(" ").slice(0, k).join(" ");
// };

// var truncateSentence = function(s, k) {
//     return s.split(" ", k).join(" ");
// };

// var truncateSentence = (s, k) => {
//   let spaceCount = 0;
//   for (let i=0; i<s.length; ++i) {
//     if (s[i]===' ' && ++spaceCount === k) return s.slice(0, i);
//   }
//   return s;
// };

var truncateSentence = (s, k) => {
  let spaceCount = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i]===' ') spaceCount++;
    if (spaceCount === k) return s.slice(0, i);
  }
  return s;
};