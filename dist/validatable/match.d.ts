import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Match<ValueT extends string, MessageT> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> implements ValueOf<string> {
    readonly pattern: RegExp;
    constructor(number: ValueT, match: RegExp, message: (result: Readonly<Value<ValueT> & Validatable>) => MessageT);
    valueOf(): string;
}
