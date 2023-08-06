// ポリモーフィズムをTypeScriptで表現する

type Filter = {
  (array: number[], f: (item: number) => boolean): number[]
  (array: string[], f: (item: string) => boolean): string[] // オーバーロード
  (array: object[], f: (item: object) => boolean): object[] // これは例外を投げる
}

const filter: Filter2 = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if(f(item)) { // 指定した条件に合致しているかどうかをチェック
      result.push(item)
    }
  }
  return result
}

filter([1, 2, 3, 4], (i: number) => i < 3)
filter([{firstName: "beth"}, {firstName: "beth"}, {firstName: "beth"}], _ => _.firstName.startsWith("J"))
// Property 'firstName' does not exist on type 'object'.ts(2339)
// 上記がエラーになる理由は、object型はfirstNameプロパティを持っていないため

// これを解決するためには、ジェネリック型パラメータを使う
type Filter2 = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

// 例外は返却されない上に、型安全性も保証される
filter([1, 2, 3], _ => _ > 2)
filter(["a", "b"], _ => _ !== "b")
// これはエラーになる
// filter([1, 2, 3], _ => _ !== "b")
// This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.ts(2367)


let names = [
  {firstName: "beth"},
  {firstName: "caitlyn"},
  {firstName: "xin"}
]
filter(names, _ => _.firstName.startsWith("b"))

// 型Tをどこで宣言するかにより、挙動は異なる
type Filter3<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}
// この場合、型TのバインドはFilter3を使用するときに要求するので、以下のコードはエラーが出る
// Generic type 'Filter3' requires 1 type argument(s).ts(2314)

// const filte3: Filter3 = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i]
//     if(f(item)) { // 指定した条件に合致しているかどうかをチェック
//       result.push(item)
//     }
//   }
//   return result
// }

// 以下のように型Tを事前に指定すればエラーは解消する
const filter3: Filter3<number> = (array, T) => {
  return [1, 2, 3]
}

// もう一つの例
// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// }

// これをジェネリック型で書き直すと以下の通り
type MapType = {
  <T, U>(array: T[], f: (item: T) => U): U[] // 変換後の型はTとは異なる可能性があるため、Uとしている
}
const map: MapType= (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

map<number, boolean>([1, 2, 3], _ => _ === _ % 2);

// ジェネリック型エイリアス
// 型エイリアスでジェネリック型を指定するためには、型名の右にのみ指定できる
// 呼び出しシグネチャとの違い
type MyEvent<T> = {
  target: T
  type: string
}
// ジェネリック型エイリアスを利用するときは、型パラメータを明示的に指定する
// 型推論されないため
type ButtonEvent = MyEvent<HTMLButtonElement>
