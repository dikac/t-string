import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumericValidatable from "../validatable/numeric";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Numeric<MessageT>
    implements
        Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageT>>>,
        Message<Function<[Readonly<Value<string> & Validatable>], MessageT>>
{
    constructor(
       public message : Function<[Readonly<Value<string>> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Readonly<Instance<string, MessageT, boolean>> {

        return <Return<string, Argument, string, Readonly<Instance<string, MessageT>>>>
            new NumericValidatable<Argument, MessageT>(value, this.message);
    }
}
