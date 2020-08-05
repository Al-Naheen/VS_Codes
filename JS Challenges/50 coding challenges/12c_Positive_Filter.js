let arr = [1,2,3,-5,-77,90,-97]

function positive(ar) {
    return ar.filter(fil => fil >= 0)
}
console.log(positive(arr));
