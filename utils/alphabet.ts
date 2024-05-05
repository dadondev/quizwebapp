const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function giveLetter(a: number): string {
  return letters[a];
}
function giveLetterIndex(a: string): number {
  return letters.findIndex((e) => e === a);
}

export { giveLetter, giveLetterIndex };
