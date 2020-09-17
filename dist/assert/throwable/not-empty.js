import NotEmptyType from "../string/not-empty";
export default function NotEmpty(string, subject = 'string') {
    return new Error(NotEmptyType(false, string, subject));
}
//# sourceMappingURL=not-empty.js.map