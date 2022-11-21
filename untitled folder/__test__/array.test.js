const array = require('../javascript/array');

beforeAll(() => {
  console.log("--Before All Testing the Array--");
  startingValues = [10,20,30,40];
  endingValues = [30,60,90,120];
});

afterAll(() => {
  console.log("--After All--");
});

beforeEach(() => console.log("--Before Each"));

afterEach(() => console.log("--After Each"));

test('array of values', () => {
    expect(array(startingValues)).toEqual(expect.arrayContaining(endingValues));
})

test('adds 1 + 2 to equal 3', () => {
    expect(array(startingValues)).not.toEqual(expect.arrayContaining(startingValues));
})