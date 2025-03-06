"use client";

import * as Y from "yjs";

type Language =
  | "english"
  | "spanish"
  | "portuguese"
  | "french"
  | "german"
  | "italian"
  | "chinese"
  | "arabic"
  | "hindi"
  | "russian"
  | "japanese";

const language: Language[] = [
  "english",
  "spanish",
  "portuguese",
  "french",
  "german",
  "italian",
  "chinese",
  "arabic",
  "hindi",
  "russian",
  "japanese",
];

function TranslateDocument({ doc }: { doc: Y.Doc }) {
  return <div>TranslateDocument</div>;
}
export default TranslateDocument;
