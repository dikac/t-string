import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Minimum(object: Readonly<Value<string> & Validatable & MinimumNumber & Inclusive>): string;
