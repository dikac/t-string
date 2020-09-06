import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default class Digit<MessageType> implements Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>, Message<(result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType> {
    message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType;
    constructor(message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType);
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, Readonly<Instance<string, MessageType>>>;
}
