import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Minimum<ValueT extends string, MessageT> implements Readonly<Inclusive & MinimumNumber & Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    private _message;
    readonly converter: Function<[ValueT], number>;
    readonly valid: boolean;
    constructor(value: ValueT, minimum: number, inclusive: boolean, _message: Function<[Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>], MessageT>, converter?: Function<[ValueT], number>);
    toString(): string;
    get message(): MessageT;
}
