import cloneDeep from 'lodash/cloneDeep'


const a = {x: {y: 1}}
const b = cloneDeep(a) // 깊은 복사

b.x.y = 2

console.log(b) // 2 
console.log(a) // 1

const arr1 = [1, 2, 3]
const arr2 = arr1.concat([]) // 얕은 복사
const arr3 = [...arr1] // 얕은 복사

arr2[0] = 4
arr3[0] = 5

console.log(arr3) // [5, 2, 3]
console.log(arr2) // [4, 2, 3]
console.log(arr1) // [1, 2, 3]