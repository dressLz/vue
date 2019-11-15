import typeIs from '@tao-zhi-xue-tang/type-is'

class JsonArray {
  // constructor () {
  // }
}

/**
 * 判断给定的值，是否是数组类型
 * @param {Array} target
 * @returns {boolean}
 */
JsonArray.prototype.isArrayType = function (target) {
  if (typeIs.isArray(target)) {
    return true
  }
  throw new Error('不是数组类型')
}

/**
 * 判断传入的参数是什么数据类型
 * @param target
 * @returns {string}
 */
JsonArray.prototype.targetType = function (target) {
  if (typeIs.isNull(target)) {
    return 'null'
  } else if (typeIs.isUndefined(target)) {
    return 'Undefined'
  } else if (typeIs.isBoolean(target)) {
    return 'Boolean'
  } else if (typeIs.isString(target)) {
    return 'String'
  } else if (typeIs.isNumber(target)) {
    return 'Number'
  } else if (typeIs.isObject(target)) {
    return 'Object'
  } else if (typeIs.isSymbol(target)) {
    return 'Symbol'
  } else if (typeIs.isFunction(target)) {
    return 'Function'
  }
}

/**
 * 判断所给的json数组中，每个子对象中某一个属性值是否都是同一数据类型
 * @param {Array} target
 * @param {String} key
 * @returns {boolean}
 */
JsonArray.prototype.detection = function (target, key) {
  this.isArrayType(target)
  const elementType = this.targetType(target[0][key])
  const isTypeSame = target.find(element => {
    return this.targetType(element[key]) !== elementType
  })
  return !isTypeSame
}

/**
 * json数组根据某个属性值排序
 * @param {Array} target
 * @param {String} key
 * @returns {Array}
 */
JsonArray.prototype.sortByKey = function (target, key) {
  this.isArrayType(target)
  if (target.length > 0) {
    return target.sort((a, b) => {
      let x = a[key]
      let y = b[key]
      return x - y
    })
  }
}

/**
 * 数组非空判断
 * @param {Array} target
 */
JsonArray.prototype.nonEmpty = function (target) {
  this.isArrayType(target)
  if (target.length <= 0) {
    throw new Error('lengthEmpty')
  }
}

/**
 * 判断所给的json数组中，每个元素数据类型是否一致
 * @param {Array} target
 * @returns {boolean}
 */
JsonArray.prototype.elementSame = function (target) {
  this.isArrayType(target)
  const elementType = this.targetType(target[0])
  const isTypeSame = target.find(element => {
    return this.targetType(element) !== elementType
  })
  return !isTypeSame
}

// TODO 数组去重参考博客地址 https://www.cnblogs.com/wisewrong/p/9642264.html
JsonArray.prototype.excludeSame = function (target) {
  this.isArrayType(target)
  if (!this.elementSame(target)) {
    throw new Error('数组中子元素数据类型不统一')
  }
  try {
    this.nonEmpty(target)
    // var arr = target,
    //   result = [],
    //   obj = {}
    // if (target.length <= 0) {
    //   return target
    // }
    // if (typeIs.isObject(target[0])) {
    //
    // } else {
    //
    // }
    // for (let i of arr) {
    //   if (!obj[i]) {
    //     result.push(i)
    //     obj[i] = 1
    //   }
    // }
    // return result
  } catch (err) {
    if (err.message === 'lengthEmpty') {
      return target
    }
  }
}

export default new JsonArray()
