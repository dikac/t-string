import GraphemeSplitter from "grapheme-splitter";
const grapheme = new GraphemeSplitter();
/** @see GraphemeSplitter.countGraphemes */
export default function Grapheme(string) {
    return grapheme.countGraphemes(string);
}
//# sourceMappingURL=grapheme.js.map