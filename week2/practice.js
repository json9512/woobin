// 복습 + object {}

// 조건문,     반복문,     변수
// if,    while for,     let, const, var
// 조건문 
// if (컨디션) {
//     // 아래 코드 실행
// } else {
//     // 아래 코드 실행
// }

// if (컨디션) {

// } else if (컨디션2) {

// } else if (컨디션2) {
    
// } else if (컨디션2) {
    
// } else if (컨디션2) {
    
// } else {

// }



// 위에서 아래로


// 범위


// 함수, 코드를 나눈 것? 파라미터 
// function func(x) {
//     return x * 2
// }

// x_multiplied_by_2 = func(3)

// if (x_multiplied_by_2 == 4) {
//     console.log(x_multiplied_by_2)
// } else {
//     console.log("Wrong number")
// }

// while for 
// while (컨디션) {
//     // 실행된다
// }

// for (let i = 0; 컨디션; i++) {
//     // 실행된다
// }

// i = 0
// while (i < 5) {

// }

// for (let i = 0; i < 5; i++) {
//     console.log("hello")
// }


// 데이터 타입: 변수가 가질 수 있는 형태? 
// string, char, integer, boolean, float, double, list/array, hash, set, tuple
// string = "asdfasdf"
// char = "a"
// integer = 1
// float/double = 1.0
// list/array = [1, 2, 3, 4, 5, 6]
// hash = {"key" : "값"}
// set = {} 중복이 없는 리스트 생각하면 돼
// tuple = 리스트덴 안에 있는 값이 바뀔 수가 없어

// list [ㅇ, ㅇ, ㅇ, ㅇ, ㅇ, ㅇ, ㅇ]

// 위치 값 -> index
//   0  1  2  3  4
// x = [1, 2, 3, 4, 5]
// x[1] = "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ"

// console.log(x[1])

x = [1, 2, 3, 4, 5]

// 반복문 
// 하나씩 출력해보기
// 1
// 2
// 3
// 4
// 5


// object {} -> hash {}
// hash {key 값 : value 값, key 값 : value 값, key 값 : value 값, key 값 : value 값}
// 객체 object
man = {name: "Woobin", age: 27, hp: 100, attack_point: 30}
monster = {name: "Son", age: 27, hp: 100, attack_point: 30}

// 턴제 프로그램
// 반복문 running: 
//    1. 0 - 1 아무 소숫자 구하는 코드를 짤거야
//    2. 0.5 <= 너가 monster를 공격함, >= monster가 너를 공격함
//    3. 출력
//    4. 데스체크 : 출력 -> running - false
function attack(attacker, target) {
    target.hp = target.hp - attacker.attack_point
    console.log(attacker.name + " attacked " + target.name)
}

function is_dead(someone) {
    if (someone.hp <= 0){
        console.log(someone.name + " is dead")
        return true
    }
    return false
}

//                                  1     0
// object: man, monster, boolean (true, false): running, float: turn
running = true
while (running) { // 반복문
    turn = Math.random()

    if (turn >= 0.5) { // 조건문
        // monster attack man
        // 출력
        attack(monster, man)
    } else {
        // man attack monster
        // 출력
        attack(man, monster)
    }

    // 데스체크 후에 종료
    //   컨디션
    // or and not
    if (is_dead(man) || is_dead(monster)) {
        // 실행
        running = false
    }
}

// 프로젝트 -> 다음주 
// 일단 막 짬 -> 되게끔
// 정리 -> 나중에 문제 -> 리팩토링 refactoring (factory?) -> 없지 않음 factor -> 라틴어 -> factoasdf -> 어원

// 문제 1


// 각 아이템이 몇번씩 나오지는 확인하는 프로그램
// 1: 2, 2: 1, 3: 1, 4: 2, 5: 3


// 데이터 타입: object/hash
// 반목문
// x 에 있는 아이템을 하나 씩 꺼내보는데
// 조건문
// object에 x의 아이템이 있으면: object가 가지고 있는 x의 아이템의 개수를 1 더하기
object_name["키값"] += 1
// object에 x의 아이텀이 없어: object x의 아이템을 1 이라고 선언해주면 돼
object_name["키값"] = value 값


x = [1, 1, 2, 3, 4, 4, 5, 5, 5] // 탐색 해야 되는 배열
y = {} // key: value 값을 가지는 object -> {x의 item: 출현 횟수}

for (i = 0; i < x.length; i++) { // 2
    item = x[i] // i = 0, item = x[0] -> 1 -> 1

    if (item in y) { // item in y? item 이 y에 있나요? 
        // y에 item이 있으면

        // y["key 값"], y.key 값
        // y[1] y에 1이 있습니까?
        y[item] += 1 // index 쓰는 게 아님. object index 없었음
    } else {
        // y에 item이 없으면
        // y[1] = 1
        y[item] = 1
    }
}

// y = {1: 2, 2: 1, 3: 1, 4: 2, 5: 3}
console.log(y)
