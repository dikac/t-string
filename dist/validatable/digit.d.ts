import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default class Digit<ValueT extends string, MessageT> implements Readonly<Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueT, message: (result: Readonly<Value<ValueT> & Validatable>) => MessageT);
    toString(): string;
    get message(): MessageT;
}
