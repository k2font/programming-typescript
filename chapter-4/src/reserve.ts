// オーバーロードされた関数の型を定義

type Reservation = {
  result: string
}
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation // 日帰り旅行もサポート
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  // ...
  return {
    result: "success!"
  }
}