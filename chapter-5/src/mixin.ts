// 任意のコンストラクターを表す型
type ClassConstructor<T> = new(...args: any[]) => {} // に似のクラスを受け取るのではなく、.getDebugValueを実装することを強制する

// ミックスインを実装する
// 戻り値はTypeScriptに推論させる
// 実際には以下のように推論される
// function withEZDebug<C extends ClassConstructor>(Class: C): {
//   new (...args: any[]): (Anonymous class);
//   prototype: withEZDebug<any>.(Anonymous class);
// } & C
function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class { // 無名クラスのコンストラクターを返す
    constructor(...args: any[]) {
      super(...args)
    }
    debug() {
      let Name = super.constructor.name;
      let value = super.getDebugValue();
      return Name + "(" + JSON.stringify(value) + ")";
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + " " + this.lastName
    }
  }
}

let User = withEZDebug(HardToDebugUser); // ミックスインを実装する
let user = new User(3, "Emma", "Gluzman");
console.log(user.debug());
