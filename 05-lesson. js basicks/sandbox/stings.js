// Strings

// ''
// ""
// `` backticks

// `${}`
// Strings
// ''
// ""
// ``
// =============
// Template string
// // `${}`
// let firstName = 'Vova'
// let lastName = 'Sanders'

// let fullName = `${firstName} ${lastName}`
// console.log(fullName)

// =================
// Append
// let name = 'Vova'
// name += 'Sara'
// console.log(name)

//================
// Lengtn
// let msg = "I can't get no satisfaction"
// // msg = ''
// console.log(msg.length)

// =============================
// let msg = "I can't get no satisfaction"
// // msg[0]
// // msg[1]
// // msg[2]

// // msg = ''
// // console.log(msg[0])
// // console.log(msg[1])
// // console.log(msg[2])
// // console.log(msg[3])
// for (let i = 0; i < msg.length; i++) {
//   console.log(msg[i])
// }

// ====================
// Find last character
// let msg = "I can't get no satisfaction"
// // msg[0]
// // msg[23]
// let last = msg[msg.length - 1]
// console.log(last)

// =============================
// find index
// index
// -1

// grey
// gray

// deer
// dear

// let greet = 'hello'

// let idx = greet.indexOf('h')
// console.log(idx)

// =======================
// Поиск в строке
// includes
// true / false

// let msg = "I can't get no"
// let findWord = msg.includes('get')
// // console.log(findWord)

// if (!msg.includes('spam')) {
//   console.log('Можем выводить')
// }

//====================
// Взятие подстроки
// slice, substring
// let greet = 'hello world'
// let result = greet
// console.log(result === greet)
// let result = greet.slice()
// let result = greet.slice(1)
// let result = greet.slice(2)
// let result = greet.slice(5)
// let result = greet.slice(0, 4) // hell
// let result = greet.slice(1, 3) // el
// console.log(result)

// ===================
// split.reverse.join

// let greet = 'hello world and pease to all'
// let result = greet.split(' ').reverse().join(' ')

// console.log(typeof result)
// console.log(result)

// let uri = 'https://www.youtube.com/watch?v=shoVsQhou-8'

// let parse = uri.split('?')
// // console.log(parse[1])
// // console.log(parse[1].split('='))
// console.log(parse[1].split('=')[1])

// ==========================
// replace
// let msg = "I can't get no satisfaction"
// let findWord = msg.replace('satisfaction', 'pizza')
// console.log(findWord)

// if (!msg.includes('spam')) {
//   console.log('Можем выводить')

// }

// ================================
// ''.toUpperCase()
// ''.toLowerCase()
// let user = 'vova AWffcsdwqcaq23sadRFFRREF'

// console.log(user.toUpperCase())
// console.log(user.toLowerCase())

// Susanna
// let user = 'sUsAnNa'
// let user = prompt('Enrer name')
// let result = user.toLowerCase()
// result = user[0].toUpperCase() + result.slice(1)

// console.log(result)
