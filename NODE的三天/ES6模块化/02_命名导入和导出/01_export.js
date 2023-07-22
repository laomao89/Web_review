//目标:命名(按需)导出
//语法:export 声明语句和初始值
//注意:export 可以"多次"使用，只有被导出的外面才能导入得到

export const a = 10
const b = 20

export const fn = () => {
  console.log('这是一个数字函数');
}

function myFn(){
  console.log('这是一个function函数');
}