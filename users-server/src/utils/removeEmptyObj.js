const removeEmptyObj = (obj) => {
  Object.keys(obj).forEach((key) => (obj[key].length === 0) && delete obj[key])
  return obj
}

export default removeEmptyObj
