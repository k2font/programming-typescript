// classのsuper

// 子クラスが親クラスのメソッドをオーバーライドするとき、
// 子クラスのインスタンスは `super` で親クラスのメソッド定義を呼び出せる
class School {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

class University extends School {
  getName(): string {
    return 'this is a university: ' + super.getName(); // これで親クラスのgetNameを呼び出せる
  }
}

// superでアクセスできるのは親クラスのメソッドのみ
// プロパティにはアクセスできないことに注意
