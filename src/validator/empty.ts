import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";

export type Return<Msg> = Readonly<Validatable<boolean> & Message<Msg> & Value<string>>;

export default class Empty<Msg>
    implements
        Validator<string, Return<Msg>>,
        Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: string): Return<Msg> {

        return new EmptyValidatable(value, this.message);
    }
}
