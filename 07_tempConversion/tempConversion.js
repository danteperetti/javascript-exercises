const ftoc = function(temp) {
  const conversion = 5 / 9 * (temp - 32);
  return Math.round(conversion * 10) / 10;
};

const ctof = function(temp) {
  const conversion = temp * (9 / 5) + 32;
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
