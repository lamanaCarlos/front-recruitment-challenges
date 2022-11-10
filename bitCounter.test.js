// Complete this function
function countBids(input) {
  if (input >= 0) {
    const bidsResult = [];
    if (input == 0) {
      bidsResult.push(0);
      return bidsResult;
    }
    const number = input.toString(2);
    const numberRev = number.split("").reverse().join("");
    bidsResult.push(numberRev.match(/1/g).length);
    if (bidsResult[0] > 0) {
      for (let i = 0; i < numberRev.length; i++) {
        if (numberRev[i] === "1") {
          bidsResult.push(i);
        }
      }
    }
    return bidsResult;
  } else {
    throw new RangeError();
  }
}

describe("Count positive bits", function () {
  it("Should return a RangeError when a negative value is supplied", function () {
    expect(() => {
      countBids(-2);
    }).toThrow(RangeError);
  });

  it("Should return zero occurrences for input = 0", function () {
    let expected = [0];
    let actual = countBids(0);
    expect(expected).toEqual(actual);
  });

  it("Should return the expected count for input = 1", function () {
    let expected = [1, 0];
    let actual = countBids(1);
    expect(expected).toEqual(actual);
  });

  it("Should return the expected count for input = 137", function () {
    let expected = [3, 0, 3, 7];
    let actual = countBids(137);
    expect(expected).toEqual(actual);
  });
});
