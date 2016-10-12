var moment = require('moment')

//String
// var word = '     Lorem shaslcbhjca dojncbv,jshdbvdc aschnfdksjfbdsj,dsbjhds djsfkdsjfkdsj     '

// console.log(word.length) // <-- property (a variable essentially)
// console.log(word.toUpperCase())  // <-- method (a function essentially)
// console.log(word.toLowerCase())
// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()
// console.log(word)

// word = word.toUpperCase().trim().toLowerCase()
// console.log(word)

var word = 'City of Seattle'

//word = word.repeat(5)
// word = 'Pizza Is Amazing'.substr(9, 7)
// word = 'Pizza Is Amazing'.slice(9,16)
//word = word.split(',')
 var indianaIndexStart = word.indexOf('Indiana')
 var whatIsThisLetterAt = word.charAt(8)
 var isItIndianapolis = word.includes('Seattle')
 word = word.replace('Seattle', 'Indianapolis')
//console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 888-898-4343'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')
// console.log(hasPhoneNumber)

//Number
var number = Number('1')
number = number + (number * 50)
number = number + 1
number++

var counter = 0


//console.log(number)

//Math
var price = 12.51
//var priceRounded = Math.round(price)
//var priceRounded = Math.ceil(price)
var priceRounded = Math.floor(price)
//console.log(priceRounded)

//console.log(Math.PI)

var randomNumber = Math.round(Math.random() *10)
//console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[1].substr(0)
price = dollars + '.' + cents
//console.log(price)

//console.log(Number('12.045') === 12.045)



//Date
var today = new Date()
//console.log(today)

var yesterday = moment().subtract(2400, 'seconds')
console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))


//Object
var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99
    priceRounded: Math.round(14.99),
}
console.log(pie.priceRounded)


//Array
var ingredients = ['meat', 'cheese', 'spices', 'crust', 12, true, moment().format('MM/DD/YYYY') {sausage: 'mystery',}]
console.log(ingredients)


var name = String('Tom')
var name2 = 'Tom'

//console.log(name ===name2)


var number = Number(1) //=== 1
var boolean = Boolean(true) //=== true
