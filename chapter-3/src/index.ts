// unknown型の使い方を理解したい
let a: unknown = 5
let b = a === 5 // boolean
// let c = a + 10 // TS2571: Object is of type 'unknown'.

if (typeof a === 'number') { // aを型ガードすることでエラーの出力を回避できる
  let d = a + 10 // number
}

// インデックスシグネチャ
// [key: T]: U と書く
// オブジェクトがより多くのキーを含む可能性があることをTSCに伝える方法
// 型Tのすべてのキーは、型Uを持たないといけない、という意味になる
// なお、Tはnumberかstringのどっちかでないといけない
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  "34D": "Boris Cherny",
  "34E": "Bill Gates",
  "2B": "Sheryl Sandberg",
  "2C": "Larry Page",
  "33D": "Sergey Brin",
  "33E": "Sundar Pichai",
  "1D": "Tim Cook",
  "1E": "Craig Federighi"
}

// 型エイリアス
type Age = number
type Person = {
  name: string,
  age: Age // number型に名前をつけることができる
}

// union型とintersection型
type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type catOrDogorBoth = Cat | Dog // これがunion型
type CatAndDog = Cat & Dog // これがintersection型

let animal: catOrDogorBoth = {
  name: 'Tama',
  purrs: true,
  wags: true // Dog型のプロパティも持つことができる
}

let animal2: CatAndDog = {
  name: 'Tama',
  purrs: true,
  barks: true, // Dog型のプロパティを持たなければいけない
  wags: true // Dog型のプロパティを持たなければいけない
}

// union型の使いどころ
type Return = string | null
const trueOrNull = (isTrue: boolean): Return => {
  if (isTrue) {
    return 'true'
  }
  return null
}

