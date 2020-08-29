import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Minimum<ValueT extends string, MessageT> implements Readonly<Inclusive & MinimumNumber & Value<ValueT> & Message<MessageT> & Validatable>, ValueOf<string>, ValueOf<string> {
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    readonly converter: (value: ValueT) => number;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueT, minimum: number, inclusive: boolean, message: (result: Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>) => MessageT, converter?: (value: ValueT) => number);
    valueOf(): string;
    toString(): string;
    get message(): MessageT;
}
