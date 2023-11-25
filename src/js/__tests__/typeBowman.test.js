import Bowman from '../typeBowman';

test('создание класса наследника Bowman', () => {
  const bowman = new Bowman('Jho');
  const expected = {
    name: 'Jho',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

