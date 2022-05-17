interface A {
  x: number
  foo(bar: number): number // 5
  foo(bar: 'a'): number //2
}
interface A {
  y: number
  foo(bar: string): string //3
  foo(bar: number): number[] // 4
  foo(bar: 'b'): number[] //1
}
// 函数重载
const aaa: A = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar
  },
}

function Lib() {}
namespace Lib {
  export const version = '1.0'
}

class CC {}

namespace CC {
  export const state = 1
}

console.log(CC.state)

enum Color {
  Red,
  Yellow,
  Blue,
}

namespace Color {
  export function mix() {}
}

console.log(Color.mix())
