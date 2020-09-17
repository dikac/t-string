import AlphanumericType from "../string/alphanumeric";
export default function Alphanumeric(string, subject = 'string') {
    return new Error(AlphanumericType(false, string, subject));
}
//# sourceMappingURL=alphanumeric.js.map