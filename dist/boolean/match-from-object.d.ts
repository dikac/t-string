import Value from "@dikac/t-value/value";
export default function MatchFromObject(object: Value<string> & {
    pattern: RegExp;
}): boolean;
