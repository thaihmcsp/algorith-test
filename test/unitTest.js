const sortTest = require("../code");
const { seedInput } = require("../createInput");
var expect = require("chai").expect;

const input = seedInput(100, 100);
const result = sortTest(100, 100, input)

describe("Ket qua", function () {
    it("sort 100 * 100", function () {
        expect(result.toString(), "Số lượng phần tử phải lớn hơn 3").to.equal(input.toString().split(',').sort().toString());
    });
})



