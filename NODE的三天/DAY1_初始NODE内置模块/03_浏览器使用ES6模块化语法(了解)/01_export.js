const baseURL = 'http://geek.itheima.net'
const getSum = (numA,numB) => numA + numB
const getArraySum = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}

//目标:想要被外部使用的话需要‘导出’
//语法:module.exports = {}
//作用:把要导出的装入此对象内(key是外部要使用的，value是内部导出的值)
//注意:外部无法使用未导出的变量
export default {
  url:baseURL,
  getSum,
  getArraySum
}