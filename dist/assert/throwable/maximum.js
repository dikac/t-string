import MaximumType from "../string/maximum";
export default function Maximum(string, maximum, inclusive, subject = 'string') {
    return new Error(MaximumType(false, string, maximum, inclusive, subject));
}
//# sourceMappingURL=maximum.js.map