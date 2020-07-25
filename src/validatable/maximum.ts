import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MaximumObject from "./boolean/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";

export default class Maximum<Msg>
    implements
        Readonly<Inclusive & MaximumNumber & Value<string> & Message<Msg> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : string,
        readonly maximum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>,
        readonly converter : Function<[string], number> = Size,
    ) {

        this.valid = MaximumObject(this);
    }

    toString() : string {

        return this.value;
    }

    get message() : Msg {

        return this._message(this);
    }
}
