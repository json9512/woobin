// 함수를 쓰는 이유
// 1. 코드 재사용
// 2. 유지 보수 + 가독성
// 3. 기능 구현
function name() {
    // 함수를 호출 했을 때 실행 되는 코드
    console.log("woobin")
    console.log(x)
}

//name() // 호출 시에는 () 가 필수

// 인자 parameter
function yourname(x, y, z) {
    console.log(x, y, z)
}

x = "hello"
y = "woobin"
z = "bye"

yourname(x, y, z) // 선언 x 호출
yourname("hello", "son") // 언어 error JS 에러

// return 반환 값
function returnFunc() {
    let k = "im in name function"
    return k
    console.log("kkkkkk")
}

// something == k
console.log(returnFunc())

// return 응용한 함수 종료
function exitEarly() {
    console.log("hello")
    console.log("hello")
    return
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
}

console.log(exitEarly())