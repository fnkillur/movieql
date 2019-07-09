export const people = [
  {
    id: 1,
    name: "teo.dor",
    age: 31,
    gender: "male"
  },
  {
    id: 2,
    name: "louis",
    age: 26,
    gender: "male"
  },
  {
    id: 3,
    name: "chan",
    age: 32,
    gender: "male"
  },
];

export const getById = id => (people.filter(person => person.id === id)[0]);
