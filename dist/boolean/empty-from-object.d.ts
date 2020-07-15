import Value from "@dikac/t-value/value";
export default function EmptyFromObject(object: Value<string> & {
    empty: boolean;
}): boolean;
