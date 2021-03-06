import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default class Empty<MessageType>
    implements
        Validator<string, '', Readonly<Instance<'', MessageType>>>,
        Message<(result:Readonly<Value<string> & Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value<string> & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends ''>(value: Argument) :
        Readonly<Instance<'', MessageType, true>>

    validate<Argument extends string>(value: Argument) :
        Return<string, Argument, string, Readonly<Instance<string, MessageType>>>

    validate<Argument extends string>(value: Argument) {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageType>>>>
            new EmptyValidatable<Argument, MessageType>(value, this.message);
    }
}
