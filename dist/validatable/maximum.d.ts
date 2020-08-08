import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Maximum<ValueT extends string, MessageT> implements Readonly<Inclusive & MaximumNumber & Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly maximum: number;
    readonly inclusive: boolean;
    private _message;
    readonly converter: Function<[ValueT], number>;
    readonly valid: boolean;
    constructor(value: ValueT, maximum: number, inclusive: boolean, _message: Function<[Readonly<Value<ValueT> & Inclusive & MaximumNumber & Validatable>], MessageT>, converter?: Function<[ValueT], number>);
    toString(): string;
    get message(): MessageT;
}
