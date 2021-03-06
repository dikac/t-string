import RemovePrefixCharacter from "./remove-prefix-character";
import RemoveSuffixCharacter from "./remove-suffix-character";

/**
 * remove {@param prefix} from start and {@param suffix} from end of {@param string}
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export default function Unclose (
    string : string,
    prefix : string,
    suffix : string,
) {

    string = RemovePrefixCharacter(string, prefix);
    string = RemoveSuffixCharacter(string, suffix);

    return string;
}
