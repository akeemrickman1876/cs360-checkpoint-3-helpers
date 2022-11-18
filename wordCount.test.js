const wordCount = require('./wordCount');

describe('correct output', () => {
    test('returns proper count for a simple sentence input string', () => {
      // Setup
      const str = "education is good";
      const solution = 3;
  
      // Act
      const output = wordCount(str);
  
      // Assert
      expect(output).toBe(solution);
    });

    test('returns proper count when a single word input string', () => {
        // Setup
        const str = "education";
        const solution = 1;
    
        // Act
        const output = wordCount(str);
    
        // Assert
        expect(output).toBe(solution);
      });

      test('returns proper count when double space is included', () => {
        // Setup
        const str = "today  is great";
        const solution = 3;
    
        // Act
        const output = wordCount(str);
    
        // Assert
        expect(output).toBe(solution);
      });
      test('counts hyphenated word as a single word', () => {
        // Setup
        const str = "girl is at play-ground";
        const solution = 4
    
        // Act
        const output = wordCount(str);
    
        // Assert
        expect(output).toBe(solution);
      });
  });
  
  
  describe('handles improper inputs', () => {
    test('when str is undefined', () => {
  
        // Setup
        const str = undefined;
        const solution = 0;
    
        // Act
        const output = wordCount(str);
        
        // Assert
        expect(output).toBe(solution);
      });

      test('when str is empty', () => {
  
        // Setup
        const str = "";
        const solution = 0;
    
        // Act
        const output = wordCount(str);
        
        // Assert
        expect(output).toBe(solution);
      });
    
  })
  