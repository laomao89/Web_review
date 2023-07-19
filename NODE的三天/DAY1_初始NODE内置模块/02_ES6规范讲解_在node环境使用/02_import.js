//ES6模块化语法导入
import obj from './01_export.js'
console.log(obj);
console.log(obj.getArraySum([2,3,5,6]));

/* 注意: node默认采用CommonjS规范语
法，所以不认识import

解决: 在当前目录下(父级目录下)新建
package.json(固定名字文件-日录配置文件)
设置{"type": "module"}

这个配置意思告诉node执行当前目录下的
js文件使用ES6模块化语法解析
*/