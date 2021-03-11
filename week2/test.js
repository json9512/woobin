// // object = Class 심화된
// // class -> 좀 더 심화된 object 다 
// man = { name: "우빈이", insa: console.log}
// man2 = {name: "손", insa: console.log}

// man.insa("Hello I am", man.name) // console.log("asdfasdf")
// man2.insa("Hello I am", man2.name)

// //man.name = "손"
// man["name"] = "손"
// man2.name = "우빈이"

// man.insa("Hello I am", man.name) // console.log("asdfasdf")
// man2.insa("Hello I am", man2.name)

// // 부동산
// house = 10000

// // 5년 언제 파는지 확인하는 프로그램
// price_change = [] // 월별 집값변화

// for (i=0; i<60; i++){
//     factor = Math.random()

//     if (i % 2 == 0) {
//         factor += 1
//     }

//     price_change.push(house*factor)
// }

// // 언제 팔아야 되냐?
// // 반복문 60 번 확인
// max_profit = 0

// for (i=0; i < price_change.length; i++) {
//     changed_house_price = price_change[i]
//     profit = changed_house_price - house

//     if (max_profit < profit) {
//         max_profit = profit
//     }
// }

// console.log(max_profit)










// const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))

// // object, class (너무 어려울듯)?
// let man = {name: "woobin", age: 27, hp: 100, attack: 30}
// let man2 = {name: "monster", age: 13, hp: 100, attack: 20}

// running = true

// const checkDeath = function(man, man2) {
//     if (man.hp <= 0) {
//         console.log(man["name"] + " is dead")
//         running = false
//     }

//     if (man2.hp <= 0) {
//         console.log(man2.name + " is dead")
//         running = false
//     }
// }

// const randomTurn = function() {
//     return Math.random()
// }

// async function main() {
//     while (running) {
//         checkDeath(man, man2)

//         if (!running) {return}

//         turn = randomTurn()
//         if (turn <= 0.5) {
//             man2.hp -= man.attack
//             console.log(man.name + " attacked " + man2.name)
//         } else {
//             man.hp -= man2.attack
//             console.log(man2.name + " attacked " + man.name)
//         }
//         await delay(1000)
//     }
// }

// main()













// class Man{
//     constructor(name){
//         this.name = name
//     }

//     sayHello(){
//         console.log("Hi, I am %s", this.name)
//     } 
// }

// woobin = new Man("woobin")

// console.log(woobin)
// woobin.sayHello()

// 문제
// x = ["a", "b", "c" ,"a"]

// counter = {}

// for (let i=0; i<x.length; i++) {
//     item = x[i]
//     if (counter[item]) {
//         counter[item] += 1
//     } else {
//         counter[item] = 1
//     }
// }
// console.log(counter)


// object

// 은행, 우빈이
// 우빈이가 대출을 받을려고 한다
// 은행에 돈이 있으면 대출을 해준다 --> 자산만 본다, 궁금하지 않음
// 없으면 하지 않는다

// 우빈이는 돈을 벌수 있다
// 우빈이는 자산이 있다

// // 은행에는
// // 자기가 가지고 있는 돈, limit은 대출을 받기 위해 필요한 자산
// bank = {money: 100000, limit: 5000}

// // 우빈이는 
// // 자산 , 돈을 방법 -> function
// function stream() {
//     setTimeout(()=>{}, 1000)
//     return 100
// }

// woobin = {asset: 0, make_money: stream}

// running = true
// while (running) {
//     // woobin이가 은행에가서 돈을 빌린다
//     // 조건문 
//     // console.clear()
//     console.log("우빈이는 은행에 대출을 받으로 갔다")
//     if (woobin.asset < bank.limit){
//         // 돈을 못빌림
//         console.log("우빈이는 대출 조건을 맞추지 못했다")
//         console.log("우빈이는 스트리밍을 통해서 돈을 번다...")
        
//         woobin.asset += woobin.make_money()
//     } else if (bank.money < 10000) {
//         console.log("은행이 돈이 없다")
//         running = false
//     } else {
//         // 돈을 빌릴 수 있다
//         console.log("우빈이는 돈을 대출 받았다")
//         bank.money -= 10000
//         woobin.asset += 10000
//     }
// }


// 너한테 시키기 위해

// 우빈이가 있다, 손이 있다
// 우빈이는 골키퍼다, 막기 능력치는 10이다
// 손은 공격수다, 차기 능력치는 10다

// 페널티킥 5번을 찰거야 
// 확률 -> 공의 바람, 실제 바람, 손의 컨디션, 우빈이의 컨디션 -> 숫자 0 - 1
// 숫자 * 손의 차기 능력치 > 숫자 * 우빈의 막기 능력치 = 골
// < = 우빈이 막은거 
// 손이 골 -> "손이 골을 넣었다"
// 우빈이 막으면 -> "우빈이가 골을 막았다"


// hwakruel * 손의 차기 능력치 ||  hwakruel * 우빈의 막기 능력치


// 객체 몇개 -> 우빈이 손
// 객체가 가지고 있는 특성 뭔가:
// 우빈: 골키퍼, 막기능력치 10
// 손: 공격수, 차기 능력치 10

// 반복문의 조건?? 페널티킥 5번
// 반복문안에 실행:
//    1. 확률 계산
i = 0
while (i < 10){
    hwakruel = Math.random() // CPU tick -> seed 기준 랜덤성 
    // 하나야 0.36
    x = Math.random() * 10
    y = Math.random() * 10

    // 로직에 문제

    console.log(x)
    console.log(y)
    console.log()
    i += 1
}

//    2. 조건문: 조건 -> 막느냐 넣느냐 -> 확률 * 손의 차기 능력치와 확률 * 우빈의 막기능력치를 비교
//    3. 조건에 맞게 출력해주기