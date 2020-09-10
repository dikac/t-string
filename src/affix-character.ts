import Affix from "./affix/affix";
import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";

/**
 * add {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 * @param padding
 */
export default function AffixCharacter(
    string : string,
    character : string,
    padding : Affix
) : string {

    switch (padding) {
        case Affix.PREFIX:
            return PrefixCharacter(string, character);

        case Affix.SUFFIX:
            return SuffixCharacter(string, character);

        case Affix.CIRCUMFIX:
            string = PrefixCharacter(string, character);
            return SuffixCharacter(string, character);
    }
}
