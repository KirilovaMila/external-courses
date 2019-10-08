function shapeDeepClone(obj) {
  let cloneObj = {};
  for (let key in obj) {
    if (Array.isArray(obj)) {
      cloneObj = [];
      for (let i = 0; i < obj.length; i++) {
        cloneObj[i] = shapeDeepClone(obj[i]);
      }
    }
    else if (typeof obj[key] === "object") {
      cloneObj[key] = shapeDeepClone(obj[key]);
    }
    else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

module.exports = shapeDeepClone;
