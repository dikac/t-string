import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Minimum<ValueT extends string, MessageT> implements Readonly<Inclusive & MinimumNumber & Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    readonly converter: (value: ValueT) => number;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueT, minimum: number, inclusive: boolean, message: (result: Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>) => MessageT, converter?: (value: ValueT) => number);
    toString(): string;
    get message(): MessageT;
}
