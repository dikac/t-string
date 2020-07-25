import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Minimum<Msg> implements Readonly<Inclusive & MinimumNumber & Value<string> & Message<Msg> & Validatable> {
    readonly value: string;
    readonly minimum: number;
    readonly inclusive: boolean;
    private _message;
    readonly converter: Function<[string], number>;
    readonly valid: boolean;
    constructor(value: string, minimum: number, inclusive: boolean, _message: Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
    toString(): string;
    get message(): Msg;
}
