const sortTest = require("../code");
const { seedInput } = require("../createInput");
var expect = require("chai").expect;

const input = seedInput(100, 100);
function check (array) {
    return array.toString().split(',').map((ele) => {
        let value = ele * 1;
        if(!value)  return ele
        
        return value
    }).sort((a, b)=> {
        if( b - a && b - a > 0) return -1;

        if (!(b-a) && b.toString() > a.toString()){
            return -1
        }
    }).toString()
}

let case1 = [[6,5,4], [9,8,7], [3,2,1]];
let case2 = [[6,5,4,'h'], [9,'P',8,7], [3,'bkk',2,1],[100,'bcc', 'A', 4]];
console.log(sortTest(4, 4, case2));
describe("Ket qua", function () {
    it(`case1 input ${JSON.stringify(case1)}`, function () {
        expect(sortTest(3, 3, case1), "wrong").to.deep.equal([[1,2,3],[4,5,6],[7,8,9]]);
    });

    it(`case2 input ${JSON.stringify(case2)}`, function () {
        expect(sortTest(4, 4, case2), "wrong").to.deep.equal([[1,2,3,4],[4,5,6,7],[8,9,100,'A'],['P','bcc','bkk','h']]);
    });

    it("case3 sort 100 * 100", function () {
        expect(sortTest(100, 100, input).toString(), "wrong").to.equal(check(input));
    });
})



