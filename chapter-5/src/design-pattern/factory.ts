// ファクトリーパターン: 何らかの型のオブジェクトを作成するための方法

// たとえば以下のようなクラス群があるとする
type Shoe = {
  purpose: string
}

class BattleFlat implements Shoe {
  purpose = "dancing"
}

class Boot implements Shoe {
  purpose = "woodcutting"
}

class Sneaker implements Shoe {
  purpose: string = "walking"
}

// ファクトリーパターンでShoeオブジェクトを記述すると以下のようになる
let Shoe = {
  create(type: "battleFlat" | "boot" | "sneaker"): Shoe {
    switch(type) {
      case "battleFlat": return new BattleFlat;
      case "boot": return new Boot;
      case "sneaker": return new Sneaker;
    }
  }
}

Shoe.create("boot"); // Boot { purpose: 'woodcutting' }
