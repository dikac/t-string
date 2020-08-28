import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Maximum<ValueT extends string, MessageT> implements Readonly<Inclusive & MaximumNumber & Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly maximum: number;
    readonly inclusive: boolean;
    readonly converter: (string: ValueT) => number;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueT, maximum: number, inclusive: boolean, message: (result: Readonly<Value<ValueT> & Inclusive & MaximumNumber & Validatable>) => MessageT, converter?: (string: ValueT) => number);
    toString(): string;
    get message(): MessageT;
}
