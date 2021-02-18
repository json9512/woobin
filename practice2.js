// 함수 하나의 일
function multiplyAndMinus(x, y){
    return [x*y, x-y]
}

z = multiplyAndMinus(3, 2) // [x*y, x-y]

// z가 리스트
// index     0  1  2  3
// z =      [4, 3, 2, 1]
// k = z[2]
// k = z[0]
k = z[0]
j = z[1]

console.log(z)
console.log(k)
console.log(j)