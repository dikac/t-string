/**
 * match string {@param string} against {@param pattern}
 *
 * @param string
 * @param pattern
 */
export default function Match(string : string, pattern : RegExp) : boolean {

    let match = string.match(pattern);

    if(match !== null) {

        return true;
    }

    return false;
}
