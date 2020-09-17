import BlankType from "../string/blank";
export default function Blank(string, subject = 'string') {
    return new Error(BlankType(false, string, subject));
}
//# sourceMappingURL=blank.js.map