import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default class Empty<MessageT> implements Validator<string, '', Readonly<Instance<'', MessageT>>>, Message<Function<[Readonly<Value<string> & Validatable>], MessageT>> {
    message: Function<[Readonly<Value<string> & Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value<string> & Validatable>], MessageT>);
    validate<Argument extends ''>(value: Argument): Readonly<Instance<'', MessageT, true>>;
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, Readonly<Instance<string, MessageT>>>;
}
