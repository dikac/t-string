import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueMatch from "../value/match";
export default class Match<ValueT extends string, MessageT> extends ValueMatch<ValueT> implements Readonly<Message<MessageT>> {
    readonly value: ValueT;
    readonly pattern: RegExp;
    private messageFactory;
    constructor(value: ValueT, pattern: RegExp, messageFactory: (result: Readonly<Value<ValueT> & Validatable>) => MessageT);
    get message(): MessageT;
}
