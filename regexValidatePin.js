function validatePIN (pin) {
  // return true or false
  if (typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6)) {
    return true;
  } else {
    return false;
  }
}