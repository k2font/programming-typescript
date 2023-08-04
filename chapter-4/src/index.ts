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