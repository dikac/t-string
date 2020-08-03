import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Size from "../number/size";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";

export default class Minimum<MessageT>
    implements
        Validator<string, string, MinimumValidatable<MessageT>>,
        Message<Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], MessageT>>,
        MinimumNumber,
        Inclusive
{
    constructor(
        public minimum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], MessageT>,
        public converter : Function<[string], number> = Size,
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, MinimumValidatable<MessageT>> {

        return <Return<string, Argument, string, MinimumValidatable<MessageT>>>
            new MinimumValidatable(value, this.minimum, this.inclusive, this.message, this.converter);
    }
}
