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
