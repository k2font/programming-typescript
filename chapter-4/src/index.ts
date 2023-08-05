// レストパラメータ
// 任意の個数の引数を取る記法
const sumVariadicSafe = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => total + n, 0);
}

sumVariadicSafe(1, 2, 3); // 6を返却する

// レスとパラメータはconsole.logでも使われている
// console.log(sumVariadicSafe(1, 2, 3))
// これは以下のように定義されている
// interface Console {
//   /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log) */
//   log(...data: any[]): void;
// }

// ジェネレータ
// 一連の値を生成する便利な方法
// 無限のリストを生成する等の用途に使える
function* createFibonacciGen() { // *をつけるとジェネレータ関数になる
  let a = 0;
  let b = 1;
  while(true) {
    yield a; // ジェネレータが返す値はyieldを使って生成される。要求されるとyieldが利用者に結果を送り返す
    [a, b] = [b, a + b]
  }
}

let fib = createFibonacciGen();
fib.next(); // { value: 0, done: false }
fib.next(); // { value: 1, done: false }
fib.next(); // { value: 1, done: false }
fib.next();

// イテレーター
// ジェネレータは一連の値を生成する方法であるのに対して、イテレーターはそれらの値を利用するための方法
// イテレーター = nextというプロパティを定義しているオブジェクト

// 反復可能オブジェクトを手動で定義する方法
// 型推論結果は以下
// let numbers: {
//  [Symbol.iterator](): Generator<number, void, unknown>;
// }
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

// 呼び出しシグネチャ
// 関数を表す型
type Func = (a: number, b: number) => number

// 呼び出しシグネチャはコードが簡潔でわかりやすくなる
type Log = (message: string, userId?: string) => void
let log: Log = (
  message,
  userId = "Not signed in"
) => {
  let time = new Date().toISOString()
  console.log(time, message, userId)
}