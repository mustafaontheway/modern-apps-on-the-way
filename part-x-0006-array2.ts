let ages: number[] = [17, 96, 44, 55, 74, 80, 3]

let agedAges = ages.filter(age => age > 60)

console.log(agedAges) // [ 96, 74, 80 ]

let agesPlusFive = ages.map(age => age + 5)

console.log(agesPlusFive)

// [ 96, 74, 80 ]

// [
//   22, 101, 49, 60,
//   79,  85,  8
// ]
