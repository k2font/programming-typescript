// チェスのゲームを表す
class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      new King("White", "D", 1),
      new King("Black", "D", 8),

      new Queen("White", "E", 1),
      new Queen("Black", "E", 8),

      new Bishop("White", "C", 1),
      new Bishop("White", "F", 1),
      new Bishop("Black", "C", 8),
      new Bishop("Black", "F", 8),

      new Knight("White", "B", 1),
      new Knight("White", "G", 1),
      new Knight("Black", "B", 8),
      new Knight("Black", "G", 8),

      new Rook("White", "A", 1),
      new Rook("White", "H", 1),
      new Rook("Black", "A", 8),
      new Rook("Black", "H", 8),

      new Pawn("White", "A", 2),
      new Pawn("White", "B", 2),
      new Pawn("White", "C", 2),
      new Pawn("White", "D", 2),
      new Pawn("White", "E", 2),
      new Pawn("White", "F", 2),
      new Pawn("White", "G", 2),
      new Pawn("White", "H", 2),
      new Pawn("Black", "A", 7),
      new Pawn("Black", "B", 7),
      new Pawn("Black", "C", 7),
      new Pawn("Black", "D", 7),
      new Pawn("Black", "E", 7),
      new Pawn("Black", "F", 7),
      new Pawn("Black", "G", 7),
      new Pawn("Black", "H", 7),
    ]
  }
}

type Color = 'Black' | 'White';
type PieceFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type PieceRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 駒の位置(座標)
class Position {
  constructor(
    private file: PieceFile,
    private rank: PieceRank
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

// クラスのアクセス修飾子
// public: どこからでもアクセスできる
// protected: クラスとサブクラスのインスタンスからアクセスできる
// private: このクラスのインスタンスからのみアクセスできる

// チェスの駒
// 抽象クラス: このクラスから直接インスタンスを作成できないクラス
// 必ずextendsして新しいクラスを作成して、そのクラスからインスタンスを作成する
abstract class Piece {
  protected position: Position;
  
  constructor(
    private readonly color: Color,
    file: PieceFile,
    rank: PieceRank
  ) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  // 抽象クラスを実装するときは、abstract関数を実装しないとエラーになる
  // Non-abstract class 'King' does not implement all abstract members of 'Piece'ts(18052)
  abstract canMoveTo(position: Position): boolean
}

// チェスの駒の種類
class King extends Piece {
  // canMoveTo関数を実装する
  // 移動できる範囲を計算して、移動先が進める範囲内にあるかどうかをbooleanで返す
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {
  canMoveTo(position: Position): boolean {
    // TODO: 後ほど実装
    return true;
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position): boolean {
    // TODO: 後ほど実装
    return true;
  }
}
class Knight extends Piece {
  canMoveTo(position: Position): boolean {
    // TODO: 後ほど実装
    return true;
  }
}
class Rook extends Piece {
  canMoveTo(position: Position): boolean {
    // TODO: 後ほど実装
    return true;
  }
}
class Pawn extends Piece {
  canMoveTo(position: Position): boolean {
    // TODO: 後ほど実装
    return true;
  }
}
