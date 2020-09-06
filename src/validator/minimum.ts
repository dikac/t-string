import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Count from "../number/count";
import Return from "@dikac/t-validator/validatable/simple";

export default class Minimum<MessageType>
    implements
        Validator<string, string, boolean, boolean, MinimumValidatable<string, MessageType>>,
        Message<(result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType>,
        MinimumNumber,
        Inclusive
{
    constructor(
        public minimum : number,
        public inclusive : boolean,
        public message : (result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
        public converter : (value:string)=>number = Count,
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, MinimumValidatable<Argument, MessageType>> {

        return <Return<string, Argument, string, MinimumValidatable<Argument, MessageType>>>
            new MinimumValidatable<Argument, MessageType>(value, this.minimum, this.inclusive, this.message, this.converter);
    }
}
