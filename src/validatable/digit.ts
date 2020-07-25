import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import DigitFromObject from "../boolean/digit";

export default class Digit<Msg>
    implements
        Readonly<Value<string> & Message<Msg> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : string,
        private _message : Function<[Readonly<Value<string> & Validatable>], Msg>,
    ) {

        this.valid = DigitFromObject(value);

    }

    toString() : string {

        return this.value;
    }

    get message() : Msg {

        return this._message(this);
    }
}
