const createInput = (row, col) => {
    let array = []
    for(let i = 0; i < row * col; i++){
        let input = Math.round(Math.random() * (9 + 26 * 2))
        if( input > 35 ){
            input = String.fromCharCode(input + 61)
        }

        if(input > 9 && input <=35){
            input = String.fromCharCode(input + 55)
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