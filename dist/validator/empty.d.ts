import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default class Empty<MessageT> implements Validator<string, '', Readonly<Instance<'', MessageT>>>, Message<(result: Readonly<Value<string> & Validatable>) => MessageT> {
    message: (result: Readonly<Value<string> & Validatable>) => MessageT;
    constructor(message: (result: Readonly<Value<string> & Validatable>) => MessageT);
    validate<Argument extends ''>(value: Argument): Readonly<Instance<'', MessageT, true>>;
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, Readonly<Instance<string, MessageT>>>;
}
