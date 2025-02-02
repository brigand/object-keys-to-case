module.exports = function(obj, caseFn) {
  var keys = Object.keys(obj);
  var n = keys.length;
  while (n--) {
    var key = keys[n];
    if (key === (lowKey = key.toLowerCase())) continue;
    obj[caseFn(key)] = obj[key]
    delete obj[key]
  }
  return obj;
}
