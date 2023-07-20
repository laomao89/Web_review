import fs from 'fs'
const filePath = './data/student.txt'
// fs.access('./data/student.txt',(err) => {
//   if(err){
//     console.log('此路径文件不存在');
//   }else{
//     //文件存在
//     //写入一些内容
//     fs.writeFile(filePath,'你好杨幂姐姐',(err) => {
//       if (err){
//         console.log(err);
//         log('文件写入失败')
//       }else{
//         console.log('写入成功');
//       }
//     })
//   }
// })

//读取内容
fs.readFile(filePath,(err,data) => {
  if(err){
    console.log(err);
    console.log('读取失败');
  }else{
    console.log(data);
    console.log(data.toString());
  }
})
