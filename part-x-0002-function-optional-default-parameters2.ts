function sum(x: number, y: number, z: number = 0) : number {

    return x + y + z
}

let result1 = sum(-500, 2147.12)

console.log(result1) // 1647.12

let result2 = sum(-500, 2147.12, 9999)

console.log(result2) // 11646.119999999999
