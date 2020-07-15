import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Maximum(object: Readonly<Value<string> & Validatable & MaximumNumber & Inclusive>): string;
