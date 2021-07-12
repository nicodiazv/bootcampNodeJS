const add = (a,b) => a + b 
const subtract = (a,b) => a - b 
const multiply = (a,b) => a * b 
const divide = (a,b) => {
  if(b === 0) throw new Error('Cannot be divided by 0')
  return a / b
} 

console.log(add(1,2))
console.log(subtract(1,2))
console.log(multiply(1,2))
console.log(divide(1,2))
console.log(divide(1,0))
