const createInput = (row, col) => {
    let array = []
    for(let i = 0; i < row * col; i++){
        let input = Math.round(Math.random() * (1000 + 26 * 2))
        if( input > 1026 ){
            input = String.fromCharCode(input - 930)
        }

        if(input > 1000 && input <=1026){
            input = String.fromCharCode(input -936)
        }
        array.push(input);
    }

    let inputArr = [];
    for(let i = 0; i < row; i++){
        let rowArr = array.slice(i * col, (i + 1) * col);
        inputArr.push(rowArr)
    }

    return inputArr
}

exports.seedInput = createInput;