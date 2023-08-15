interface Animal {
  name: string;
  getName(): string;
  getCry(): string;
}

// implements: インターフェースをclassで実装する識別子
// CatクラスはAnimalインターフェースで指定したプロパティとメソッドをすべて実装する必要がある
class Cat implements Animal {
  name = 'Cat';
  getName(): string {
    return 'Cat';
  }
  getCry(): string {
    return 'Meow';
  }
}

type State = {
  [key: string]: string
}

// 簡単なKey-Value Storeを作成する
class StringDatabase {
  state: State = {}
  get(key: string): string | null {
    // keyがstateに存在する場合はkeyを返す
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value;
  }
  static from(state: State) {
    let db = new StringDatabase;
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}

// コンストラクター型 typeof StringDatabase
const db = new StringDatabase;
db.set('a', 'hello');
db.set('b', 'goodbye');
console.log(db.get('a'));