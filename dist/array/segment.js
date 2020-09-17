/**
 * split {@param string} to its each segment marked by {@param delimiter}
 *
 * @param string
 * @param delimiter
 */
export default function Segment(string, delimiter) {
    let list = string.split(delimiter);
    let length = list.length;
    let adds = [];
    for (let i = 1; i <= length; i++) {
        adds.push(list.slice(0, i).join(delimiter));
    }
    return adds;
}
//# sourceMappingURL=segment.js.map