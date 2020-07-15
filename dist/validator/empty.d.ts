import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
declare type Return<Msg> = Readonly<Validatable<boolean> & Message<Msg> & Value<string> & {
    empty: boolean;
}>;
export default class Empty<Msg> implements Validator<string, Return<Msg>>, Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>> {
    empty: boolean;
    message: Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>;
    constructor(empty: boolean, message: Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>);
    validate(value: string): Return<Msg>;
}
export {};
