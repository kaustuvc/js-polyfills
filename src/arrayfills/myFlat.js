Array.prototype.myFlat = function (depth = 1) {
  if (!Array.isArray(this))
    throw new Error("This function can only be implemented upon arrays. Please provide a valid array")
  const arr = []
  for (let i = 0; i < this.length; i++){
    if (depth === 0) {
      arr.push(this[i])
    } else {
      if (Array.isArray(this[i]))
        arr.push(...this[i].myFlat(depth - 1))
      else
        arr.push(this[i])
    }
  }
  return arr;
}
