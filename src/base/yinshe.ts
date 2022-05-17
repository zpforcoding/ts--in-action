// 映射类型
interface Obj {
  a: string
  b: string
  c: string
}
// 将接口的所有属性变成只读
type ReadonlyObj = Readonly<Obj>

// 将接口的所有属性变成可选
type PartialObj = Partial<Obj>

// 获取接口某些属性
type PickObj = Pick<Obj, 'a' | 'b'>

// 非同态类型
type RecordObj = Record<'x' | 'y', Obj>

// 高级类型: 条件类型

type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : T extends boolean ? 'boolean' : T extends undefined ? 'undefined' : T extends Function ? 'function' : 'object'
type T1 = TypeName<string>
type T2 = TypeName<string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T7 = ReturnType<() => string>
