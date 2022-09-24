//@example Object.assign(target, source)
const person = {
  name: 'rahul',
}
const newPerson = Object.assign({}, person, {
  name: 'jeff',
  age: 12,
})

//Modern way of doing this by spread operator
const newPerson1 = {
  ...person,
  ...{
    name: 'jeff',
    age: 12,
  },
}

//@example Object.entries
const phone = {
  name: 'samsung',
  model: 'A 71',
}
const entries = Object.entries(phone)
//Output : [ [ 'name', 'samsung' ], [ 'model', 'A 71' ] ]

// @example Object.fromEntries
const arrayPhone = [
  ['name', 'samsung'],
  ['model', 'A 71'],
]
const fromEntries = Object.fromEntries(arrayPhone)
// Output : { name: 'samsung', model: 'A 71' }
