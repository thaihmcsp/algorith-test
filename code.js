function sortTest (row, col, array){
    let newArr = [];
    for(let i = 0; i < row; i++){
        newArr.push(...array[i]);
    }
    newArr.sort((a, b)=> {
        if( b - a && b - a > 0) return -1;

        if (!(b-a) && b.toString() > a.toString()){
            return -1
        }
    })

    let result = [];
    for(let i = 0; i < row; i++){
        let rowArr = newArr.slice(i * col, (i + 1) * col);
        result.push(rowArr)
    }
    return result;
}

// complexity: O(n2)    do slice method lồng trong for

module.exports = sortTest;