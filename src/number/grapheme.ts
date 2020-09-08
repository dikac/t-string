import GraphemeSplitter from "grapheme-splitter";

const grapheme = new GraphemeSplitter();

export default  function Grapheme (string : string) : number {

    return grapheme.countGraphemes(string)
}


