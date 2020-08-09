import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MatchValidatable from "../validatable/match";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Match<MessageT>
    implements
        Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageT>>>,
        Message<Function<[Readonly<Value<string> & Validatable>], MessageT>>
{

    constructor(
       public pattern : RegExp,
       public message : Function<[Readonly<Value<string> & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, Readonly<Instance<string, MessageT>>> {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageT>>>>
            new MatchValidatable<Argument, MessageT>(value, this.pattern, this.message);
    }
}
