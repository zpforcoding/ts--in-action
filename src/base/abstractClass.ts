// 抽象类 只能被继承不能被实例化的类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
const dog1 = new Dog1('wangwnag')
dog1.eat()

// 多态

class Cat extends Animal {
  sleep(): void {
    console.log('Cat sleep')
  }
  constructor() {
    super()
  }
}

const cat = new Cat()

const animals: Animal[] = [dog1, cat]

animals.forEach(i => {
  i.sleep()
})

// 链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().step2()
