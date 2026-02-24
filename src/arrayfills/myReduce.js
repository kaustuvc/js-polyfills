Array.prototype.myReduce = function (callbackFn, initialValue = this[0]) {
  if (!Array.isArray(this))
    throw new Error("This function can only be implemented upon arrays. Please provide a valid array")
  if (typeof callbackFn !== "function")
    throw new Error("Please provide a callback function")
  let acc = initialValue
  for (let i = 0; i < this.length; i++){
    acc = callbackFn(acc, this[i], i, this);
  }
  return acc;
}
