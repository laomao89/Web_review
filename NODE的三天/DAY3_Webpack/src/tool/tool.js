export const getArraySum = arr => arr.reduce((sum,val) => {
  return sum += val;
},0)