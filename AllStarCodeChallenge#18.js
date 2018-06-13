function strCount(str, letter){
  var count = 0;
  if(str.length == 0) {
    return 0;
    } else {
    for(var i = 0; i < str.length; i++){
      if(str[i] == letter) {
      count ++;
      console.log(count);
      }
    }
  return count;
  }
}
