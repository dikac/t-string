import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
export default class Maximum<Msg> implements Validator<string, Validatable & Message<Msg> & Value<string>>, Message<Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>>, MaximumNumber, Inclusive {
    maximum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>;
    converter: Function<[string], number>;
    constructor(maximum: number, inclusive: boolean, message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
    validate(value: string): Readonly<Validatable & Message<Msg> & Value<string> & Inclusive & MaximumNumber>;
}
