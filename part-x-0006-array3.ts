let names: string[] = ["Mustafa", "ayhan", "Bengü", "KAĞAN"]

let reversedArr = names.reverse()

console.log(reversedArr) // [ 'KAĞAN', 'Bengü', 'ayhan', 'Mustafa' ]

names.push("Aygün")
names.push("Lorem")
names.pop()

names = names.map(n => n.toLowerCase())

console.log(names) // [ 'kağan', 'bengü', 'ayhan', 'mustafa', 'aygün' ]

names.splice(2, 1)

console.log(names) // [ 'kağan', 'bengü', 'mustafa', 'aygün' ]
