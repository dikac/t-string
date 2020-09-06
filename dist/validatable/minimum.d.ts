import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Minimum<ValueType extends string, MessageType> implements Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>, ValueOf<string> {
    readonly value: ValueType;
    readonly minimum: number;
    readonly inclusive: boolean;
    readonly converter: (value: ValueType) => number;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueType, minimum: number, inclusive: boolean, message: (result: Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>) => MessageType, converter?: (value: ValueType) => number);
    valueOf(): string;
    toString(): string;
    get message(): MessageType;
}
