class Log2<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

const log2 = new Log2<number>()

log2.run(1)

const log3 = new Log2()
log3.run({ a: 2 })

interface Length {
  length: number
}

function log4<T extends Length>(value: T) {
  console.log(value, value.length)
  return value
}
