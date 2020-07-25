import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Maximum<Msg> implements Readonly<Inclusive & MaximumNumber & Value<string> & Message<Msg> & Validatable> {
    readonly value: string;
    readonly maximum: number;
    readonly inclusive: boolean;
    private _message;
    readonly converter: Function<[string], number>;
    readonly valid: boolean;
    constructor(value: string, maximum: number, inclusive: boolean, _message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
    toString(): string;
    get message(): Msg;
}
