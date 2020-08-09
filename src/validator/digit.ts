import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import DigitValidatable from "../validatable/digit";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default class Digit<MessageT>
    implements
        Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageT>>>,
        Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value<string>> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<
        Argument extends string
    >(
        value: Argument
    ) : Return<string, Argument, string, Readonly<Instance<string, MessageT>>> {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageT>>>>
            new DigitValidatable<Argument, MessageT>(value, this.message);
    }
}
