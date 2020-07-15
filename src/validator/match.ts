import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MatchValidatable from "../validatable/match";
import Function from "@dikac/t-function/function";

type Return<Msg> = Readonly<Validatable<boolean> & Message<Msg> & Value<string> & {pattern : RegExp}>;

export default class Match<Msg>
    implements
        Validator<string, Return<Msg>>,
        Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>>
{

    constructor(
       public pattern : RegExp,
       public message : Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: string): Return<Msg> {

        return new MatchValidatable(value, this.pattern, this.message);
    }
}
