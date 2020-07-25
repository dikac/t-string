import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
export default class Numeric<Msg> implements Readonly<Value<string> & Message<Msg> & Validatable> {
    readonly value: string;
    private _message;
    readonly valid: boolean;
    constructor(value: string, _message: Function<[Readonly<Value<string> & Validatable>], Msg>);
    toString(): string;
    get message(): Msg;
}
