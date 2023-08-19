// const assertion
{
  let a = { x: 3 }; // {x: number}
  let b: { x: 3 }
  let c = { x: 3 } as const // {readonly x: 3}
}

// このようにconst assertionを使うと、型の拡大を抑えられる
