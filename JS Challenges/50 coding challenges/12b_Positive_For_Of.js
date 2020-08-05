let array = [-1, 0, 9, 8, -77, 86, -10, -25, 0.111, -0]

function Positive(ar) {
    let ar2 = []
    for (const elem of ar) {
        if (elem >= 0) {  //Even 0 isn't Positive
            ar2.push(elem)
        }
    }
    return ar2
}
console.log(Positive(array));