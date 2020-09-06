import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class NotEmpty<MessageType>
    implements
        Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>,
        Message<(result:Readonly<Value<string> & Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value<string> & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends ''>(
        value: Argument
    ) : Readonly<Instance<string, MessageType, false>>

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, Readonly<Instance<string, MessageType>>>

    validate<Argument extends string>(
        value: Argument
    ) {
        return <Return<string, Argument, string, Readonly<Instance<string, MessageType>>>>
            new NotEmptyValidatable<Argument, MessageType>(value, this.message);
    }
}
