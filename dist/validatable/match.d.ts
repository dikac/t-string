import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueMatch from "../value/match";
export default class Match<ValueType extends string, MessageType> extends ValueMatch<ValueType> implements Readonly<Message<MessageType>> {
    readonly value: ValueType;
    readonly pattern: RegExp;
    private messageFactory;
    constructor(value: ValueType, pattern: RegExp, messageFactory: (result: Readonly<Value<ValueType> & Validatable>) => MessageType);
    get message(): MessageType;
}
