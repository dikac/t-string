import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import MessageCallback from "@dikac/t-validatable/message/callback";
import DigitFromObject from "../boolean/digit";

export default class Digit<Msg>
    extends MergeWrapper<Value<string>, Message<Msg>, Validatable>

{
    constructor(
        string : string,
        message : Function<[Readonly<Value<string> & Validatable>], Msg>,
    ) {

        let msg = MessageCallback(string, DigitFromObject, ()=>message(this));

        super({value : string}, msg, msg);
    }

    toString() : string {

        return this.value;
    }
}
