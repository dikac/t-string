import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Return from "@dikac/t-validator/validatable/simple";
export default class Maximum<MessageT> implements Validator<string, string, MaximumValidatable<string, MessageT>>, Message<Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], MessageT>>, MaximumNumber, Inclusive {
    maximum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], MessageT>;
    converter: Function<[string], number>;
    constructor(maximum: number, inclusive: boolean, message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], MessageT>, converter?: Function<[string], number>);
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, MaximumValidatable<Argument, MessageT>>;
}
