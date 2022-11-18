const sum = require('./sum');

describe('correct output', () => {
  test('when a & b are whole integers', () => {

    // Setup
    const a = 1;
    const b = 2;
    const solution = 3;

    // Act
    const output = sum(a, b);
    
    // Assert
    expect(output).toBe(solution)
  });
  test('when a or b is negative', () => {
    // Setup
    const a = 5;
    const b= -2;
    const solution = 3;

    // Act
    const output = sum(a, b);

    // Assert
    expect(output).toBe(solution);
  });
  test('when a & b are contain decimals', () => {
    // Setup
    const a = 1.2;
    const b= 2.3;
    const solution = 3.5
    
    // Act
    const output = sum(a, b);

    // Assert
    expect(output).toBe(solution);
  });
});


describe('handles improper inputs', () => {
  test('when a or b are undefined they are treated as 0', () => {
    // Setup
    const a = 4;
    const b = undefined;
    const solution = 4;

    // Act
    const output = sum(a,b);

    // Assert
    expect(output).toBe(solution);

  })
  test('when a or b is not a number "NaN" is returned', () => {
    // Setup
    const a = 2;
    const b = "a";
    const solution = NaN;

    // Act
    const output = sum(a,b);

    // Assert
    expect(output).toBe(solution);
  })
})
