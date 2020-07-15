import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Size from "../number/size";

export default class Minimum<Msg>
    implements
        Validator<string, Validatable & Message<Msg> & Value<string>>,
        Message<Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>>,
        MinimumNumber,
        Inclusive
{
    constructor(
        public minimum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>,
        public converter : Function<[string], number> = Size,
    ) {
    }

    validate(value: string): Readonly<Validatable & Message<Msg> & Value<string> & Inclusive & MinimumNumber> {

        return new MinimumValidatable(value, this.minimum, this.inclusive, this.message, this.converter);
    }
}
