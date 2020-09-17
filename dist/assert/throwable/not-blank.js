import NotBlankType from "../string/not-blank";
export default function NotBlank(string, subject = 'string') {
    return new Error(NotBlankType(false, string, subject));
}
//# sourceMappingURL=not-blank.js.map