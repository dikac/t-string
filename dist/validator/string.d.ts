import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
export default class String<MessageType> implements Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>, Message<(result: Readonly<Value & Validatable>) => MessageType> {
    message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType;
    constructor(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType);
    validate<Argument extends string>(value: Argument): Readonly<Instance<Argument, MessageType, true>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
}
