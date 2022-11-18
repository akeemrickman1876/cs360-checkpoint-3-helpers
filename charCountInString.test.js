const charCountInString = require('./charCountInString');
const sum = require('./charCountInString');

describe('correct output', () => {
    test('number of times a character occurs in a string', () => {
  
      // Setup
      const str = "envelope";
      const char = 'e';
      const solution = 3;
  
      // Act
      const output = charCountInString(char, str);
      
      // Assert
      expect(output).toBe(solution)
    });
    
  });
  
  
  describe('handles improper inputs', () => {
    test('when char is undefined', () => {
      // Setup
      const str = "university";
      const char = undefined;
      const solution = undefined;
  
      // Act
      const output = charCountInString(char,str);
  
      // Assert
      expect(output).toBe(solution);
  
    })
    test('when str is undefined and char is defined', () => {
      // Setup
      const str = undefined;
      const char = 'a';
      const solution = 0;
      
      // Act
      const output = charCountInString(char,str);
  
      // Assert
      expect(output).toBe(solution);
    })
    test('when char and str is undefined', () => {
        // Setup
        const str = undefined;
        const char = undefined;
        const solution = undefined;
    
        // Act
        const output = charCountInString(char,str);
    
        // Assert
        expect(output).toBe(solution);
    
      })
      test('when char is a different case', () => {
        // Setup
        const str = "Information";
        const char = 'i';
        const solution = 1;
    
        // Act
        const output = charCountInString(char,str);
    
        // Assert
        expect(output).toBe(solution);
    
      })
  })
  