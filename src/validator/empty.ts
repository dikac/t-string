import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default class Empty<MessageT>
    implements
        Validator<string, '', Readonly<Instance<'', MessageT>>>,
        Message<Function<[Readonly<Value<string> & Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value<string> & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends ''>(value: Argument) :
        Readonly<Instance<'', MessageT, true>>

    validate<Argument extends string>(value: Argument) :
        Return<string, Argument, string, Readonly<Instance<string, MessageT>>>

    validate<Argument extends string>(value: Argument) {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageT>>>>
            new EmptyValidatable<Argument, MessageT>(value, this.message);
    }
}
