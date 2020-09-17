import MinimumType from "../string/minimum";
export default function Minimum(string, minimum, inclusive, subject = 'string') {
    return new Error(MinimumType(false, string, minimum, inclusive, subject));
}
//# sourceMappingURL=minimum.js.map