const sum = require('../javascript/adding');

beforeAll(() => {
  console.log("--Before All Testing the Adding--");
});

afterAll(() => {
  console.log("--After All--");
});

beforeEach(() => console.log("--Before Each"));

afterEach(() => console.log("--After Each"));

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).not.toBe(4);
})