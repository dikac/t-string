import NumericType from "../string/numeric";
export default function Numeric(string, subject = 'string') {
    return new Error(NumericType(false, string, subject));
}
//# sourceMappingURL=numeric.js.map