// 정규표현식(RegExp, Regular Expression)

const str = `
010-1234-5678
thesecond@gmail.com
hello world!
https://www.omdbapi.com
The quick brown fox jumps over the lazy dog.
hello@naver.com
안녕하세요
abbcccddddeeeee
`

// const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi

// console.log(regexp.test(str))
// console.log(str.match(regexp))
// console.log(str.replace(regexp, 'cat'))

console.log(str.match(/the/))
console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gi))
console.log(str.match(/\.$/gim))