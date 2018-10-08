const { expect } = require('chai');
const scope = require('../scope/index');

describe('SCOPE', () => {
  it.skip('exerciseA', () => {
    const result = scope.exerciseA();
    expect(result).to.deep.equal([
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ]);
  });

  it.skip('exerciseB', () => {
    const result = scope.exerciseB();
    expect(result).to.deep.equal([
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ]);
  });

  it.skip('exerciseC', () => {
    const result = scope.exerciseC();
    expect(result).to.deep.equal([
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ]);
  });

  it.skip('exerciseD', () => {
    const result = scope.exerciseD();
    expect(result).to.deep.equal([
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ]);
  });

  it.skip('exerciseE', () => {
    const result = scope.exerciseE();
    expect(result).to.deep.equal([
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ]);
  });

  it.skip('exerciseF', () => {
    const result = scope.exerciseF();
    expect(result).to.deep.equal([
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ]);
  });

  it.skip('exerciseG', () => {
    const result = scope.exerciseG();
    expect(result).to.deep.equal([
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ]);
  });

  it.skip('exerciseH', () => {
    const result = scope.exerciseH();
    expect(result).to.deep.equal([
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ]);
  });

  it.skip('exerciseI', () => {
    const result = scope.exerciseI();
    expect(result).to.deep.equal([
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 },
      { 'A': 55 },
      { 'B': 0 },
      { 'C': 55 },
      { 'E': 55 }
    ]);
  });

  it.skip('exerciseJ', () => {
    const result = scope.exerciseJ();
    expect(result).to.deep.equal([
      { 'A':  'ketchup sandwich' },
      { 'D':  'gouda' },
      { 'B':  undefined },
      { 'C':  'not a mediocre sandwich' },
      { 'E':  'not a mediocre sandwich' },
      { 'F':  'National Treasure' }
    ]);
  });

  it.skip('exerciseK', () => {
    const result = scope.exerciseK();
    expect(result).to.deep.equal([
      { 'A': 7 },
      { 'B': 7 }
    ]);
  });

  it.skip('exerciseL', () => {
    const result = scope.exerciseL();
    expect(result).to.deep.equal([
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ]);
  });

  it.skip('exerciseM', () => {
    const result = scope.exerciseM();
    expect(result).to.deep.equal([
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ]);
  });

  it.skip('exerciseN', () => {
    const result = scope.exerciseN();
    expect(result).to.deep.equal([
      { 'E':  'Pam' },
      { 'A':  'Pam' },
      { 'B':  'Pam' },
      { 'C':  'Louisa' },
      { 'D':  'Louisa' },
      { 'F':  'Louisa' }
    ]);
  });

  it.skip('exerciseO', () => {
    const result = scope.exerciseO();
    expect(result).to.deep.equal([
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
      { 'C': 'flipflop' }
    ]);
  });
});