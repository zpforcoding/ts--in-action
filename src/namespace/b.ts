/// <reference path="a.ts"/>
namespace Shape {
  export function square(x: number) {
    return x * x
  }
}

Shape.circle(1)
Shape.square(2)

import circle = Shape.circle

console.log(circle(2))
