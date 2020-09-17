import UpperFirst from './upper-first';
export default function UpperWords(string, split) {
    for (let separator of string.match(split) || []) {
        string = string.split(separator).map(UpperFirst).join(separator);
    }
    return UpperFirst(string);
}
//# sourceMappingURL=upper-words.js.map