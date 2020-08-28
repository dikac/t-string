import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Size from "../number/size";
import Return from "@dikac/t-validator/validatable/simple";

export default class Maximum<MessageT>
    implements
        Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageT>>,
        Message<(result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageT>,
        MaximumNumber,
        Inclusive
{
    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : (result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageT,
        public converter : (value:string)=>number = Size,
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, MaximumValidatable<Argument, MessageT>> {

        return <Return<string, Argument, string, MaximumValidatable<Argument, MessageT>>>
            new MaximumValidatable<Argument, MessageT>(value, this.maximum, this.inclusive, this.message, this.converter);
    }
}
