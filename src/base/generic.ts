function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['a', 'b'])
log(['a', 'b'])

type Log = <T>(value: T) => T
const myLog: Log = log

// 泛型接口
interface Log1<T> {
  (value: T): T
}

const myLog1: Log1<number> = log

myLog(1)
