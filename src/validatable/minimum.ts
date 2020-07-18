import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import GreaterObject from "../boolean/minimum-from-object";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";

export default class Minimum<Msg>
    extends MergeWrapper<Value<string>, Message<Msg>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<MinimumNumber>
{
    readonly minimum : number;
    readonly inclusive : boolean;

    constructor(
        number : string,
        minimum : number,
        inclusive : boolean,
        message : Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>,
        converter : Function<[string], number> = Size,
    ) {

        let container : Inclusive & MinimumNumber & Value<string> & {converter : Function<[string], number>} = {
            minimum : minimum,
            inclusive : inclusive,
            value : number,
            converter : converter
        };

        let msg = MessageCallback(container, GreaterObject, ()=>message(this));

        super(container, msg, msg);

        this.minimum = minimum;
        this.inclusive = inclusive;

    }
}
