const Utils = {
  calculateNumber: function(type, a, b) {
    if (type == 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type == 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type == 'DIVIDE') {
    const r_a = Math.round(a);
    const r_b = Math.round(b);
    if (r_b === 0) {
      return 'Error';
    }
    return r_a / r_b;
   }
  }
};

module.exports = Utils;
