import moment from "moment";

const date = new Date() //获取当前系统时间对象
console.log(moment(date));
console.log(moment(date).format('YYYYY-MM-DD HH:mm:ss A l'));