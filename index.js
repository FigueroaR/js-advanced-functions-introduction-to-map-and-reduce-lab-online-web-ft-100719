// Your code here
let info = [1, 2, 3, -9];
function mapToNegativize(info) {
    let arr = [];
    for (let i = 0; i < info.length; i++){
        arr.push( -1 * info[i])
    }
    return arr
}

function mapToNoChange(info) {
    let arr = [];
    for (let i = 0; i < info.length; i++){
        arr.push(info[i])
    }
    return arr
}
  
function mapToDouble(info) {
    let arr = [];
    for (let i = 0; i < info.length; i++){
        arr.push(2 * info[i])
    }
    return arr
}

function mapToSquare(info) {
    let arr = [];
    for (let i = 0; i < info.length; i++){
        arr.push(info[i] * info[i])
    }
    return arr
}

function reduceToTotal(info, start = 0){
    let total = start;
    for (let i = 0; i < info.length; i++){
        total = total + info[i]
    }
    return total 
}

function reduceToAllTrue(info){
    for (let i = 0; i < info.length; i++){
        if (!info[i])
            return false
    }
    return true
}

function reduceToAnyTrue(info){
    for (let i = 0; i < info.length; i++){
        if (info[i])
            return true
    }
    return false


}