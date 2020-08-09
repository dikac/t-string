import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
export default class String<MessageT> implements Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>, Message<Function<[Readonly<Value & Validatable>], MessageT>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], MessageT>);
    validate<Argument extends string>(value: Argument): Readonly<Instance<Argument, MessageT, true>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>;
}
