// keyof: すべてのプロパティ名を取得できる
type ResponseKeys = keyof APIResponse // "users"
type UserKeys = keyof APIResponse["user"] // "userId" | "friendList"
type FriendListKeys = keyof APIResponse["user"]["friendList"] // "count" | "friends"

// ルックアップ型と組み合わせることで、例えば型安全なgetter関数を実装できる
// 例
function get< // オブジェクトとキーを取る関数
  O extends object,
  K extends keyof O // Oのすべてのキーを取得する
>(
  o: O,
  k: K
): O[K] { // そのキーの値の型を返すよう指定する
  return o[k];
}
