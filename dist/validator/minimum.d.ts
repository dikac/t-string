import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
export default class Minimum<Msg> implements Validator<string, Validatable & Message<Msg> & Value<string>>, Message<Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>>, MinimumNumber, Inclusive {
    minimum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>;
    converter: Function<[string], number>;
    constructor(minimum: number, inclusive: boolean, message: Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
    validate(value: string): Readonly<Validatable & Message<Msg> & Value<string> & Inclusive & MinimumNumber>;
}
