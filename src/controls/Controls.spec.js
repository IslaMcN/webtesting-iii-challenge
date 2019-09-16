// Test away!
describe('makeUser function', () => {
    it('generates a user with an id and a full name', () => {
      const expected = { id: 'abcde', fullName: 'Peter Parker' }; // fishy...
      const actual = help.makeUser('Peter', 'Parker');
 
      expect(actual).toEqual(expected);
    });
  }); 