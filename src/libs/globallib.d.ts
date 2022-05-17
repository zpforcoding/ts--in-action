declare function globalLib(options: globalLib.Options) {}

declare namespace globalLib {
  const version: string
  function doSomething(): void
  interface Options {
    [key: string]: any
  }
}
