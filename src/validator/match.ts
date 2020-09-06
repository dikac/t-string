import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MatchValidatable from "../validatable/match";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Match<MessageType>
    implements
        Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>,
        Message<(result:Readonly<Value<string> & Validatable>)=>MessageType>
{

    constructor(
       public pattern : RegExp,
       public message : (result:Readonly<Value<string> & Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, Readonly<Instance<string, MessageType>>> {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageType>>>>
            new MatchValidatable<Argument, MessageType>(value, this.pattern, this.message);
    }
}
