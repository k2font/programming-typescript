// マップ型
// オブジェクトの型を別の型に変換する型

// 以下の例では、型推論の結果はこの様になる
// let nextDay2: {
//   Mon: Day;
//   Tue: Day;
//   Wed: Day;
//   Thu: Day;
//   Fri: Day;
// }
let nextDay2: {[K in Weekday]: Day} = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat'
}

// マップ型を用いてRecord型は実装できる
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

// 色々なマップ型の利用例
type Account = {
  id: number;
  isEmployee: boolean;
  notes: string[];
}

// 1. すべてのフィールドを省略可能にする
type OptionalAccount = {
  [K in keyof Account]?: Account[K] // Account型全体のフィールドを省略可能にできる
} // ちなみにPartial型も同じ働きをする

// 2. すべてのフィールドをnull許容にする
type NullableAccount = {
  [K in keyof Account]: Account[K] | null // すべてのフィールドをnull許容にできる
}

// 3. すべてのフィールドを読み取り専用にする
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}

// 4. すべてのフィールドを再び書き込み可能にする
type Account2 = {
  -readonly [K in keyof Account]: Account[K] // -をつけることで直後のreadonlyを打ち消す事ができる
  // これはマップ型でのみ使用可能な記法
  // マップ型以外で使用すると以下のエラーが表示される
  // '[' expected.ts(1005)
  // 'in' expected.ts(1005)
}

type Account3 = {
  [K in keyof Account]-?: Account[K] // nullが取れる
}
