// Example -----------------------------

import a from 'b'

const myGreeter = new Greeter('hello, world')
myGreeter.greeting = 'howdy'
myGreeter.showGreeting()
a.foo()

export class SpecialGreeter extends Greeter {
  constructor() {
    super('Very special\n greetings')
  }

  /**
   * A very special greeting
   * @public
   * @remarks
   * This method is special
   * @example
   * ```ts
   * const greeter = new SpecialGreeter()
   * greeter.greet()
   * ```
   * @beta
   * @returns void
   * @deprecated
   */
  greet() {
    console.log('Very special greetings')
  }
}

const regex = /^hell\/o/

delete sdsds

// Tests -----------------------------

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean
  }
  interface AlertOptions {
    modal: boolean
    title?: string
    color?: string
  }
}

const enum EnumFoo {
  A = 1,
  B,
  C,
}

export const obj = {
  a: 1,
  b: 'hello',
  c: true,
}

function foo(a: string) {
  return 'foo ' + a
}

export type MyType = string | null
