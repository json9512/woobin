// 범위 scope
// 범위 global
if (true) {
    // 범위 scope
    let x = "hello"
    var y = "hello2"
    const z = "const"
    y = "hello222"
}

// global
console.log(y)
console.log(x)

// let, var, const
// let 자기 범위 벗어나지 않음. 선언 될때 아무것도 아니어도 됨 (Null, Nil)
// var global scope를 가지게 됨. 선언 될 때 아무것도 아니어도 됨 
// const 처음 선언될때 무조건 값이 있어야 돼. 자기 범위를 벗어나지 않음. 변경 x