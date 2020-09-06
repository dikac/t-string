import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Count from "../number/count";
import Return from "@dikac/t-validator/validatable/simple";

export default class Maximum<MessageType>
    implements
        Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageType>>,
        Message<(result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType>,
        MaximumNumber,
        Inclusive
{
    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : (result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
        public converter : (value:string)=>number = Count,
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, MaximumValidatable<Argument, MessageType>> {

        return <Return<string, Argument, string, MaximumValidatable<Argument, MessageType>>>
            new MaximumValidatable<Argument, MessageType>(value, this.maximum, this.inclusive, this.message, this.converter);
    }
}
