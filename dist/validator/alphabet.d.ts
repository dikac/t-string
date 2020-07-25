import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export declare type Return<Msg> = Readonly<Validatable<boolean> & Message<Msg> & Value<string>>;
export default class Alphabet<Msg> implements Validator<string, Return<Msg>>, Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>);
    validate(value: string): Return<Msg>;
}
