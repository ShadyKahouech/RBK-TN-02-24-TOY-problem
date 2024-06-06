/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
/** */

Array.prototype.isSubsetOf = function (arr) {
  var res = arr;
  var a = ["commit", "push"];
  var obj = {};

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var array = arr[j];
      var elem = a[i];

      if (
        !arr.includes(elem) &&
        !a.includes(array) &&
        !obj[elem] &&
        !obj[array]
      ) {
        obj[elem] = true;
        obj[array] = true;
        res.push(elem, array);
      }
    }
    return res.join(" ") || "";
  }
};
