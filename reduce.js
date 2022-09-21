//Javascript array method `reduce` usecases.

const array1 = [
  { item: 'item1', price: 10 },
  { item: 'item1', price: 20 },
  { item: 'item1', price: 30 },
]

const reduce1Value = array1.reduce((total, item) => {
  return total + item.price
}, 0)

console.log({ reduce1Value })

const array2 = [
  { name: 'Rahul', age: 21 },
  { name: 'Sooraj', age: 18 },
  { name: 'Ram', age: 21 },
  { name: 'kyle', age: 13 },
]

const reduce2Value = array2.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log({ reduce2Value })
