const promise = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
    resolve('success')
  } else {
    reject('failure')
  }
})

promise
  .then((message) => {
    console.log(`This is inside the then block ${message}`)
  })
  .catch((message) => {
    console.log(`This is inside the catch block ${message}`)
  })

const userLeft = false
const userIdle = false

const checkUserStatus = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        title: 'user left',
        imoji: '🙁',
      })
    } else if (userIdle) {
      reject({
        title: 'user idle',
        imoji: '😴',
      })
    } else {
      resolve({
        title: 'user online',
        imoji: '😃',
      })
    }
  })
}

checkUserStatus()
  .then((message) => {
    console.log(`${message.title} ${message.imoji}`)
  })
  .catch((message) => {
    console.log(`${message.title} ${message.imoji}`)
  })

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2')
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3')
  }, 1000)
})

Promise.all([promise1, promise2, promise3]).then((message) => {
  console.log(`promise all: ${message}`)
})
//Output : promise all: promise1,promise2,promise3

Promise.race([promise1, promise2, promise3]).then((message) => {
  console.log(`promise race: ${message}`)
})
//Output : promise race: promise3
