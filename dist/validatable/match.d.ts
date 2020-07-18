import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
export default class Match<Msg> extends MergeWrapper<Value<string>, Message<Msg>, Validatable> {
    readonly pattern: RegExp;
    constructor(number: string, match: RegExp, message: Function<[Readonly<Value<string> & Validatable>], Msg>);
}
