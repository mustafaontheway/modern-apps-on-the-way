function sum_or_diff(x: number = 0, y: number = 0) : [number, number] {

    return [x + y, x - y]
}

const [s, d] = sum_or_diff(500, -5000)

console.log(s)
console.log(d)

// -4500
// 5500
