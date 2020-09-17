import EmptyType from "../string/empty";
export default function Empty(string, subject = 'string') {
    return new Error(EmptyType(false, string, subject));
}
//# sourceMappingURL=empty.js.map