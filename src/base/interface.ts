interface List {
  id: number
  name: string
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
  })
}

const result = {
  data: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ],
}

render(result)

let add: (x: number, y: number) => number

// interface Add {
//   (x: number, y: number) : number
// }

type Add = (x: number, y: number) => number

const addFn: Add = (a, b) => a + b

interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  const lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}

const lib1 = getLib()
lib1()
lib1.doSomething()
const lib2 = getLib()
lib2.doSomething()
