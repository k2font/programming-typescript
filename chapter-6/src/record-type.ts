// Record型: TypeScriptの組み込み型であり、あるものからあるものへのマップをする方法

type StringNumber = Record<string, number>
// type StringNumber = {
//   [x: string]: number;
// }

// 上記の型は、string型のキーとnumber型の値を持つオブジェクトを作成できる型
const stringNumber: StringNumber = {
  a: 1,
  b: 2,
  c: 3,
}

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: Record<Weekday, Day> = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat'
}
