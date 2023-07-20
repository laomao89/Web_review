//目标:使用内置path模块处理路径字符串本身
//注意:只处理字符串(路径有无都可以
import path from 'path'
// (1):提取路径里扩展名
// 语法: path.extname('路径字符串')
// 返回值:扩展名字符串
console.log(path.extname('./data/student.json')); // .json
console.log(path.extname('./data/student.js.json')); // .json
console.log(path.extname('a.txt')); // .txt

// (2):拼接路径(相对路径)
// 语法: path.join('路径1'，"路径2'，'路径3')
// 返回值:用本系统路径拼接符，拼接起来的一个相对路径开头的字符串
console.log(path.join('杨幂','杨紫','杨五六'));
console.log(path.join('杨幂','杨紫',"../小孩",'杨五六'));
console.log(path.join('杨幂','杨紫',"..",'杨五六'));

// (3): 拼接路径(绝对路径)
  // 语法: path.resolve('路径1','路径2','路径3')
  // 返回值:用本系统路径拼接符。拼接起来的一个绝对路径开头的字符串
  console.log(path.resolve('a','b','c'))
  console.log(path.resolve('a','b',"../d",'e'))
  console.log(path.resolve('a','b',"..",'c'))