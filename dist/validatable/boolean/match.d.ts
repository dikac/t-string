import Value from "@dikac/t-value/value";
export default function Match(object: Value<string> & {
    pattern: RegExp;
}): boolean;
