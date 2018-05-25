function reverseLetter(str) {
  //coding and coding..
  var str = str.split('').reverse().join('').replace(/[^A-Za-z]/g, '');

 return str;
}