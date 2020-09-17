import SafeCast from "./safe-cast";
export default function JoinAffix(strings, option) {
    return SafeCast(option.prefix) + strings.join(option.delimiter) + SafeCast(option.suffix);
}
//# sourceMappingURL=join-affix.js.map