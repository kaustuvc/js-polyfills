Array.prototype.myMap = function (callbackFn) {
  if (!Array.isArray(this))
    throw new Error("This function can only be implemented upon arrays. Please provide a valid array")
  if (typeof callbackFn !== "function")
    throw new Error("Please provide a callback function")
  const arr = [];
  for (let i = 0; i < this.length; i++){
    arr[i] = callbackFn(this[i], i, this);
  }
  return arr;
}
