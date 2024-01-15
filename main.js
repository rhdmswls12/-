import { cloneDeep } from "lodash"

const a = [[1, 2] , [3]]
const b = cloneDeep(a) // 깊은 복사

b[0][0] = 4

console.log(b) // [[4, 2], [3]]
console.log(a) // [[1, 2], [3]]