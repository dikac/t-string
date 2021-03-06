/**
 * remove {@param character} at the start of {@param string}
 */
export default function RemovePrefixCharacter(string, character) {
    if (string.length !== 0) {
        character = character[0];
        if (string[0] === character) {
            return string.slice(1);
        }
    }
    return string;
}
//# sourceMappingURL=remove-prefix-character.js.map