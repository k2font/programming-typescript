// 1
let A = 1042
let B = "apples and oranges"
const C = "pineapples"
let D = [true, true, false]
let E = { type: "ficus" }
let F = [1, false]
const G = [3]
let H = null // any!!!!!

// 2
let i: 3 = 3
// i = 4 // TS2322: Type '4' is not assignable to type '3'.
// iは3型であるため、4を代入することはできない

let j = [1, 2, 3]
j.push(4)
// j.push('5') // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// jはnumber[]型なので、string型をpushできない

// let k: never = 4 // never型には値を代入できない
// never型は決して戻ることのない関数の戻り値の型として使われる

let l: unknown = 4
// let m = l * 2 // TS2571: Object is of type 'unknown'.
// 型ガードしないとunknown型を使えない
if (typeof l === 'number') {
  let m = l * 2 // number
}
