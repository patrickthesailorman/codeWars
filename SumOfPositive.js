function positiveSum(arr) {
  var newArr = [];
  var sum = 0;
  for (var i =0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
//       console.log(typeof(newArr));
      sum += parseInt(arr[i]);
//       console.log(typeof(newArr));
    }
  }
  return sum;
}