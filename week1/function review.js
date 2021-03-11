// 함수를 만들건데
// 함수는 인자를 하나 받아 
// 인자는 -> 리스트
// 리스트 안에 있는 모든 아이템을 출력하고 싶어
// x = [1, 3, 5, 7, 8]

// 원하는 것이 나왔음
// 반복문 -> ?
function coco(x) {
    // coco scope
    for (let i = 0; i < x.length; i = i + 1 * 2) {
        // for loop scope
        // console.log(i)
        console.log(x[i])
    }
}

coco([1, 3, 5, 7, 8])

function cocoWithWhile(x) {
    i = 1
    while (i < x.length) {
        console.log(x[i])
        i *= 2
    }
}

cocoWithWhile([1, 3, 5, 7, 8])