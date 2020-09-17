import StringType from "../string/string";
export default function String(string, subject = 'type', conversion = value => typeof value) {
    return new TypeError(StringType(false, string, subject, conversion));
}
//# sourceMappingURL=string.js.map