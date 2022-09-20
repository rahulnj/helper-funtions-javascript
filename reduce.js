//Javascript array method `reduce` usecases.

const array = [
  { item: 'item1', price: 10 },
  { item: 'item1', price: 20 },
  { item: 'item1', price: 30 },
]

const reduce1Value = array.reduce((total, item) => {
  return total + item.price
}, 0)

console.log({ reduce1Value })
