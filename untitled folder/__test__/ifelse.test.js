const ifelse = require('../javascript/ifelse');

beforeAll(() => {
  console.log("--Before All Testing If/Else--");
});

afterAll(() => {
  console.log("--After All--");
});

beforeEach(() => console.log("--Before Each"));

afterEach(() => console.log("--After Each"));

test('What sentence wil be returned', () => {
  expect(ifelse(5)).toContain("Not a even number.");
});