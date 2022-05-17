class Dog {
  name: string
  // private constructor(name: string) {
  //   this.name = name
  // }
  constructor(name: string) {
    this.name = name
  }
  run() {}
  getName() {
    this.pri()
    this.pro()
    return this.name
  }
  // 只能在当前类中被调用
  private pri() {}
  // 只能在当前类和子类中调用
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
}

console.log(Dog.prototype)

const dog = new Dog('wangwang')
console.log(dog)

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    this.pro()
  }
}

const husky = new Husky('小白', 'white')
console.log(Dog.food)
console.log(Husky.food)
console.log(husky.getName())
