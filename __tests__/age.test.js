import Age from '../src/js/age.js';

describe('Age', () => {

  test('should correctly create an instance of the Age object', () => {
    const newAge = new Age(); 
    expect(typeof(newAge)).toEqual("object");
  });
});