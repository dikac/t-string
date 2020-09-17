/**
 * remove {@param character} at the end of {@param string}
 */
export default function RemoveSuffixCharacter(string, character) {
    if (string.length !== 0) {
        character = character[0];
        if (string[string.length - 1] === character) {
            return string.slice(0, string.length - 1);
        }
    }
    return string;
}
//# sourceMappingURL=remove-suffix-character.js.map