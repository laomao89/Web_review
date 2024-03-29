/*
深拷贝函数
@param [*} newo 传入空自对象(外面创建传入)
@param [* two0bj 要深拷贝的日标对象
参数1对象会接收到two0bj拷贝过来的所有层的属性和值
*/
function deepC1one(newo, twoobj,map) { // {},twoobj对象,oneobj对象
  if (!map) {
    map = new Map()
  }
  for (let key in twoobj) { // key: 'fami1y
    let value = twoobj[key] // value: oneobj对象，读到a的时候，twoobj又进来了
    if (value instanceof Array) {
      newo[key] = []
      deepC1one(newO[key], va1ue)
    } else if (value instanceof object) {
      newo[key] = {}
      if (!map.has(value)) { // 如果这个对象在map里出现过，就不要再进入递归拷贝了(防止无限递归)
        map.set(value, 1) // map值: Mapf obj0bj对象: 1，twoobj对象: 1}
        deepC1one(newo[key], value, map)
      }
    } else {
      newo[key] = value;
    }
  }
}
export default{
  deepC1one
}
