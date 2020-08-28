import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default class Digit<MessageT> implements Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageT>>>, Message<(result: Readonly<Value<string>> & Readonly<Validatable>) => MessageT> {
    message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageT;
    constructor(message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageT);
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, Readonly<Instance<string, MessageT>>>;
}
