const str = '((()))'
const strArr = str.slice('')
console.log(strArr)
const stack = [];
  // Проходим по каждому символу в строке
  const config1 = [['(', ')']];
  
console.log(config1[0][0])
  console.log(strArr[0] === config1[0][0])

  for (let i = 0; i < str.length; i++){
    if (strArr[i] === config1[0][0]) {
      stack.push(strArr[i]);
      console.log(stack)
      for (let j = 0; (i + j) < str.length; i++){ // длинна прохода j?
        if (strArr[i + j] === config1[0][1]) {
          stack.push(strArr[i+j]);
          
        }
      }
    }
    console.log(stack)
  }
  