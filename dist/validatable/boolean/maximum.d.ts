import Value from "@dikac/t-value/value";
import Maximum from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Maximum(object: Value<string> & Maximum & Inclusive & {
    converter: (value: string) => number;
}): boolean;
