import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Return from "@dikac/t-validator/validatable/simple";
export default class Minimum<MessageT> implements Validator<string, string, boolean, boolean, MinimumValidatable<string, MessageT>>, Message<(result: Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>) => MessageT>, MinimumNumber, Inclusive {
    minimum: number;
    inclusive: boolean;
    message: (result: Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>) => MessageT;
    converter: (value: string) => number;
    constructor(minimum: number, inclusive: boolean, message: (result: Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>) => MessageT, converter?: (value: string) => number);
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, MinimumValidatable<Argument, MessageT>>;
}
