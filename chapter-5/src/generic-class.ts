class MyMap<K, V> { // クラスのジェネリック型をバインドする
  constructor(initialKey: K, initialValue: V) { // コンストラクタの中ではジェネリック型を宣言できない
    // do something
  }
  get(key: K): V { // クラススコープのジェネリック型は、クラスの中でならどこでも使える
    // do something
  }
  set(key: K, value: V): void {
    // do something
  }
  // インスタンスメソッドはクラスレベルのジェネリック型にアクセスできる
  // 加えて独自のジェネリック型を使える
  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    // do something
  }
  // 静的メソッドはクラスのインスタンス変数にアクセスできないが、
  // 同様にクラスのジェネリックにはアクセスできない。
  // 独自のジェネリック型K, Vを指定する
  static of<K, V>(k: K, v: V): MyMap<K, V> {
    // do something
  }
}
