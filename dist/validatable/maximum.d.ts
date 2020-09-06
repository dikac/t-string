import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Maximum<ValueType extends string, MessageType> implements Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string> {
    readonly value: ValueType;
    readonly maximum: number;
    readonly inclusive: boolean;
    readonly converter: (string: ValueType) => number;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueType, maximum: number, inclusive: boolean, message: (result: Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>) => MessageType, converter?: (string: ValueType) => number);
    valueOf(): string;
    toString(): string;
    get message(): MessageType;
}
