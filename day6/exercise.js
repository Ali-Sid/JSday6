// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// using for loop
for(let i=0; i<11; i++){
    console.log(i)
} // 0 1 2 3 4 5 6 7 8 9 10

// using while loop
let i = 0;
while(i <= 5) {
    console.log(i)
    i++;
} // 0 1 2 3 4 5

// using do while loop
let j = 0;
do{
    console.log(j)
    j++
}
while(j <= 5) // 0 1 2 3 4 5

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// using for loop
for(let i=10; i>=0; i--) {
    console.log(i)
} // 10 9 8 7 6 5 4 3 2 1 0

// using while loop
let k=10;
while(k >= 0){
    console.log(k)
    k--;
} // 10 9 8 7 6 5 4 3 2 1 0

// using do while loop
let l=10;
do{
    console.log(l)
    l--;
}
while(l >= 0) // 10 9 8 7 6 5 4 3 2 1 0

// 3. Iterate 0 to n using for loop
let n = 10;
for(i=0; i<n; i++) {
    console.log(i)
} // 9 8 7 6 5 4 3 2 1 0

// 4. Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for(let i = '#'; i.length <= 7; i+='#'){
    console.log(i)
}
/*
#
##
###
####
#####
######
#######
*/

// 5. Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for(let i=0; i<=10; i++) {
    console.log(`${i} x ${i} =`, i*i)
}
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

// 6. Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log('i   i^2   i^3')
for(let i=0; i<=10; i++) {
    console.log(`${i}   ${i**2}   ${i**3}`)
}
/*
i   i^2   i^3
0   0   0
1   1   1
2   4   8
3   9   27
4   16   64
5   25   125
6   36   216
7   49   343
8   64   512
9   81   729
10   100   1000
*/

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0; i<=100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
/*
0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
100
*/

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers.
for(let i=0; i<=100; i++){
    if(i % 2 !== 0) {
        console.log(i)
    }
}
/*
1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
31
33
35
37
39
41
43
45
47
49
51
53
55
57
59
61
63
65
67
69
71
73
75
77
79
81
83
85
87
89
91
93
95
97
99
*/

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for(let num = 0; num <= 100; num++){
    let isPrime = true

    if(num > 1){
        for(let i=2; i<num; i++){
            if(num % i === 0) {
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log(num);
        }
    }
}
/*
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
*/

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for(let i=0; i<=100; i++) {
    sum += i
}
console.log(sum) // 5050

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0, sumOdd = 0;
for(let i=0; i<=100; i++){
    if(i % 2 === 0){
        sumEven += i
    }
    if(i % 2 !== 0){
        sumOdd += i
    }
}

console.log(`The sum of all evens is: ${sumEven} and the sum of all odds is: ${sumOdd}`)
// The sum of all evens is: 2550 and the sum of all odds is: 2500

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumArr = [sumEven, sumOdd]
console.log(sumArr) //[ 2550, 2500 ]

// 13. Develop a small script which generate array of 5 random numbers
const array = []
for(let i=0; i<5; i++){
    array.push(Math.floor(Math.random() * 100) + 1)
}
console.log(array) // [ 17, 35, 96, 11, 4 ]

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
while(array.length < 5){
    const randNumber = Math.floor(Math.random() * 100) + 1
    if(!array.includes(randNumber)){
        array.push(randNumber)
    }
}
console.log(array) // [ 6, 64, 52, 21, 28 ]

// 15. Develop a small script which generate a six characters random id:
const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let id = ''

for(i=0; i<6; i++){
    id += char.charAt(Math.floor(Math.random() * char.length))
}
console.log(id) // gDJgn3

// Exercise: Level 2
// 1. Develop a small script which generate any number of characters random id:

for(i=0; i<10; i++){
    id += char.charAt(Math.floor(Math.random() * char.length))
}
console.log(id) // 6glhlWOvwU97kuZe

// 2. Write a script which generates a random hexadecimal number.
let hexadecimal = ''
for(i=0; i<6; i++) {
    hexadecimal += Math.floor(Math.random() * 16).toString(16)
}
console.log(hexadecimal) //ef89a3

// 3. Write a script which generates a random rgb color number.
const red = Math.floor(Math.random() * 256)
const blue = Math.floor(Math.random() * 256)
const green = Math.floor(Math.random() * 256)
console.log(`rgb(${red},${green},${blue})`) // rgb(111,7,157)

/* 4. Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const newCountries = []
for(let i=0; i<countries.length; i++){
    newCountries.push(countries[i].toLowerCase())
}
console.log(newCountries)
/*
 [
  'albania',  'bolivia',
  'canada',   'denmark',
  'ethiopia', 'finland',
  'germany',  'hungary',
  'ireland',  'japan',
  'kenya'
 ]
*/
// 5. Using the above countries array, create an array for countries length'.
const country = []
for(const counLen of countries){
    country.push(counLen.length)
}
console.log(country)
/*
 [
  7, 7, 6, 7, 8,
  7, 7, 7, 7, 5,
  5
 ]
*/

/* 6. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
  ]
*/
for(const country of countries) {
    console.log([country, country.substring(0, 3), country.length])
}
/*
[ 'ALBANIA', 'ALB', 7 ]
[ 'BOLIVIA', 'BOL', 7 ]
[ 'CANADA', 'CAN', 6 ]
[ 'DENMARK', 'DEN', 7 ]
[ 'ETHIOPIA', 'ETH', 8 ]
[ 'FINLAND', 'FIN', 7 ]
[ 'GERMANY', 'GER', 7 ]
[ 'HUNGARY', 'HUN', 7 ]
[ 'IRELAND', 'IRE', 7 ]
[ 'JAPAN', 'JAP', 5 ]
[ 'KENYA', 'KEN', 5 ]
*/

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const landCountries = []
for(let i=0; i<countries.length; i++){
    if(countries[i].toLowerCase().includes('land')){
        landCountries.push(countries[i])
    }
}

if(landCountries.length > 0){
    console.log(landCountries)
}
else{
    console.log('All these countries are without land')
} // [ 'FINLAND', 'IRELAND' ]

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const iaCountries = []
for(let i=0; i<countries.length; i++){
    if(countries[i].toLowerCase().includes('ia')){
        iaCountries.push(countries[i])
    }
}

if(iaCountries.length > 0){
    console.log(iaCountries)
}
else{
    console.log('These are countries ends without ia.')
}
// [ 'ALBANIA', 'BOLIVIA', 'ETHIOPIA' ]

// 9. Using the above countries array, find the country containing the biggest number of characters.
let bigCountry = countries[0]
for(let i=0; i<countries.length; i++){
    if(countries[i].length > bigCountry.length){
        bigCountry = countries[i]
    }
}
console.log(bigCountry) // ETHIOPIA

// 10. Using the above countries array, find the country containing only 5 characters.
const fiveChar = []
for(let i=0; i<countries.length; i++){
    if(countries[i].length === 5){
        fiveChar.push(countries[i])
    }
}
console.log(fiveChar) // [ 'JAPAN', 'KENYA' ]

// 11. Find the longest word in the webTechs array

let webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]
let bigWord = webTechs[0]
for(let i=0; i<webTechs.length; i++){
    if(webTechs[i].length > bigWord.length){
        bigWord = webTechs[i]
    }
}
console.log(bigWord) // JavaScript

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const newTech = []
for(i=0; i<webTechs.length; i++) {
    newTech.push([webTechs[i], webTechs[i].length])
}
console.log(newTech)

/*
  [
  [ 'HTML', 4 ],
  [ 'CSS', 3 ],
  [ 'JavaScript', 10 ],
  [ 'React', 5 ],
  [ 'Redux', 5 ],
  [ 'Node', 4 ],
  [ 'MongoDB', 7 ]
  ]
*/

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = ''

for(let i=0; i<mernStack.length; i++){
    acronym += mernStack[i][0]
}

console.log(acronym) // MERN

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let fullStackArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for(let fStack of fullStackArray){
    console.log(fStack)
}
/* 
HTML
CSS
JS
React
Redux
Node
Express
MongoDB
*/

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruit = ['banana', 'orange', 'mango', 'lemon']
let revFruit = []

for(let i=fruit.length - 1; i>=0; i--){
    revFruit.push(fruit[i])
}

console.log(revFruit) // [ 'lemon', 'mango', 'orange', 'banana' ]

// 16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let unStack = ''

for(let i=0; i<fullStack.length; i++){
    unStack += fullStack[i].join(', ')
}

console.log(unStack) // HTML, CSS, JS, ReactNode, Express, MongoDB

// Exercise: Level 3
// 1. Copy countries array(Avoid mutation)
const countriesCopy = []
for(let i=0; i<countries.length; i++) {
    countriesCopy.push(countries[i])
}

const countriesCopy2 = []
let copy = 0;
while(copy < countries.length){
    countriesCopy2.push(countries[copy])
    copy++
}

console.log(countriesCopy)
console.log(countriesCopy2)
/*
[
  'ALBANIA',  'BOLIVIA',
  'CANADA',   'DENMARK',
  'ETHIOPIA', 'FINLAND',
  'GERMANY',  'HUNGARY',
  'IRELAND',  'JAPAN',
  'KENYA'
]
[
  'ALBANIA',  'BOLIVIA',
  'CANADA',   'DENMARK',
  'ETHIOPIA', 'FINLAND',
  'GERMANY',  'HUNGARY',
  'IRELAND',  'JAPAN',
  'KENYA'
]
*/

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let copyOfOriginal = []
for(let i=0; i<countries.length; i++){
    copyOfOriginal.push(countries[i])
}
const sortedCountries = copyOfOriginal.sort()

console.log(sortedCountries)
/*
[
  'ALBANIA',  'BOLIVIA',
  'CANADA',   'DENMARK',
  'ETHIOPIA', 'FINLAND',
  'GERMANY',  'HUNGARY',
  'IRELAND',  'JAPAN',
  'KENYA'
]
*/

// 3. Sort the webTechs array and mernStack array
webTechs.sort()
mernStack.sort()
console.log(webTechs)
console.log(mernStack)

// [ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]
// [ 'Express', 'MongoDB', 'Node', 'React' ]

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
import {countriesList} from './countries.js'
const landArr = []

for(let i=0; i<countriesList.length; i++){
    if(countriesList[i].toLowerCase().includes('land')){
        landArr.push(countriesList[i])
    }
}
console.log(landArr)
/*
 [
  'Finland',
  'Iceland',
  'Ireland',
  'Marshall Islands',
  'Netherlands',
  'New Zealand',
  'Poland',
  'Solomon Islands',
  'Swaziland',
  'Switzerland',
  'Thailand'
 ]
*/

// 5. Find the country containing the hightest number of characters in the countries array
let highLength = ''

for(let i=0; i<countriesList.length; i++){
    if(highLength.length < countriesList[i].length){
        highLength = countriesList[i]
    }
}
console.log(highLength) // Central African Republic

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
// refer Q4.

// 7. Extract all the countries containing only four characters from the countries array and print it as array
const fourChar = []

for(let i=0; i<countriesList.length; i++){
    if(countriesList[i].length === 4){
        fourChar.push(countriesList[i])
    }
}
console.log(fourChar)
/*
 [
  'Chad', 'Cuba',
  'Fiji', 'Iran',
  'Iraq', 'Laos',
  'Mali', 'Oman',
  'Peru', 'Togo'
 ]
*/

// 8. Extract all the countries containing two or more words from the countries array and print it as array
const twoOrMoreWords = []

for(let i=0; i<countriesList.length; i++) {
    if(countriesList[i].includes(' ')){
    twoOrMoreWords.push(countriesList[i])
    }
}
console.log(twoOrMoreWords)
/*
 [
  'Antigua and Barbuda',
  'Bosnia and Herzegovina',
  'Burkina Faso',
  'Cape Verde',
  'Central African Republic',
  'Congo (Brazzaville)',
  'Costa Rica',
  "Cote d'Ivoire",
  'Czech Republic',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'El Salvador',
  'Equatorial Guinea',
  'Gambia, The',
  'Korea, North',
  'Korea, South',
  'Marshall Islands',
  'New Zealand',
  'Papua New Guinea',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Serbia and Montenegro',
  'Sierra Leone',
  'Solomon Islands',
  'South Africa',
  'Sri Lanka',
  'Trinidad and Tobago',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Vatican City'
 ]
*/

// 9. Reverse the countries array and capitalize each country and stored it as an array
const revCountry = countriesList.reverse()
const capCountry = []

for(let i=0; i<revCountry.length; i++){
    let currentCountry = revCountry[i].toUpperCase()
    capCountry.push(currentCountry)
}

console.log(capCountry)

/*
 [
  'ZIMBABWE',            'ZAMBIA',                'YEMEN',
  'VIETNAM',             'VENEZUELA',             'VATICAN CITY',
  'VANUATU',             'UZBEKISTAN',            'URUGUAY',
  'UNITED STATES',       'UNITED KINGDOM',        'UNITED ARAB EMIRATES',
  'UKRAINE',             'UGANDA',                'TUVALU',
  'TURKMENISTAN',        'TURKEY',                'TUNISIA',
  'TRINIDAD AND TOBAGO', 'TONGA',                 'TOGO',
  'THAILAND',            'TANZANIA',              'TAJIKISTAN',
  'TAIWAN',              'SYRIA',                 'SWITZERLAND',
  'SWEDEN',              'SWAZILAND',             'SURINAME',
  'SUDAN',               'SRI LANKA',             'SPAIN',
  'SOUTH AFRICA',        'SOMALIA',               'SOLOMON ISLANDS',
  'SLOVENIA',            'SLOVAKIA',              'SINGAPORE',
  'SIERRA LEONE',        'SEYCHELLES',            'SERBIA AND MONTENEGRO',
  'SENEGAL',             'SAUDI ARABIA',          'SAO TOME AND PRINCIPE',
  'SAN MARINO',          'SAMOA',                 'SAINT VINCENT',
  'SAINT LUCIA',         'SAINT KITTS AND NEVIS', 'RWANDA',
  'RUSSIA',              'ROMANIA',               'QATAR',
  'PORTUGAL',            'POLAND',                'PHILIPPINES',
  'PERU',                'PARAGUAY',              'PAPUA NEW GUINEA',
  'PANAMA',              'PALAU',                 'PAKISTAN',
  'OMAN',                'NORWAY',                'NIGERIA',
  'NIGER',               'NICARAGUA',             'NEW ZEALAND',
  'NETHERLANDS',         'NEPAL',                 'NAURU',
  'NAMIBIA',             'MYANMAR',               'MOZAMBIQUE',
  'MOROCCO',             'MONGOLIA',              'MONACO',
  'MOLDOVA',             'MICRONESIA',            'MEXICO',
  'MAURITIUS',           'MAURITANIA',            'MARSHALL ISLANDS',
  'MALTA',               'MALI',                  'MALDIVES',
  'MALAYSIA',            'MALAWI',                'MADAGASCAR',
  'MACEDONIA',           'LUXEMBOURG',            'LITHUANIA',
  'LIECHTENSTEIN',       'LIBYA',                 'LIBERIA',
  'LESOTHO',             'LEBANON',               'LATVIA',
  'LAOS',
  ... 93 more items
 ]
*/