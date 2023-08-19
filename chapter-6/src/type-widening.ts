// 型の拡大

// letやvar(もしくはmutableな値)は割り当てた値より拡大された型が推論される
let a = "x" // string
let b = 3 // number
var c = true // boolean
const d = {x: 3} // {x: number}

// constで宣言した場合はその限りではない
const e = "x" // "x"
const f = 3 // 3
const g = true // true

// 明示的なアノテーションは方の拡大をふせぐ
let h: "x" = "x"

// 拡大されない型を、letで宣言した変数に再割当てすると、型を拡大する
const i = "x" // "x"
let j = i // string!!!!
