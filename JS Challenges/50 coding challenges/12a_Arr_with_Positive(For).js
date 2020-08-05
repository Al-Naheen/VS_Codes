let arr = [1, 2, -5, -9, 10, -50]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        console.log(arr[i]);
    }
}



// Book Wise
function get_Positives(ar) {
    let ar2 = []

    for (let i = 0; i < ar.length; i++) {
        let el = ar[i]
        if (el >= 0) {
            ar2.push(el)
        }
    }
    console.log(ar2);
}
let array = [-1, 0, 66, -90, 100 ,-33, 66]
get_Positives(array)