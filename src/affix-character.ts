import Padding from "./padding/padding";
import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";

export default function AffixCharacter(
    string : string,
    character : string,
    padding : Padding
) : string {

    switch (padding) {
        case Padding.PREFIX:
            return PrefixCharacter(string, character);

        case Padding.SUFFIX:
            return SuffixCharacter(string, character);

        case Padding.CIRCUMFIX:
            string = PrefixCharacter(string, character);
            return SuffixCharacter(string, character);
    }
}
