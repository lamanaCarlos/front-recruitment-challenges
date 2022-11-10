const mapFn = (person) => ({ ...person, age: person.age * 2 });

const conditionFn = (person) => person.age > 7;

// Complete this function
const customMap = (arr, fn) => {
  const mapResult = [];
  for (let i = 0; i < arr.length; i++) {
    const element = fn(arr[i]);
    mapResult.push(element);
  }
  return mapResult;
};

// Complete this function
const customFilter = (arr, fn) => {
  const filterResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) filterResult.push(arr[i]);
  }
  return filterResult;
};

describe("Array map test", function () {
  it("Should return the expected array for the people list given", function () {
    const people = [
      { name: "Alex", age: 2 },
      { name: "Luis", age: 12 },
      { name: "Marco", age: 4 },
    ];

    const expected = people
      .map((item) => mapFn(item))
      .filter((item) => conditionFn(item));

    const actual = customFilter(customMap(people, mapFn), conditionFn);

    expect(expected.toString() == actual.toString());
  });
});
