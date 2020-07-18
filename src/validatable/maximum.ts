import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import GreaterObject from "../boolean/maximum-from-object";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";

export default class Maximum<Msg>
    extends MergeWrapper<Value<string>, Message<Msg>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<MaximumNumber>
{
    readonly maximum : number;
    readonly inclusive : boolean;

    constructor(
        number : string,
        maximum : number,
        inclusive : boolean,
        message : Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>,
        converter : Function<[string], number> = Size,
    ) {

        let container : Inclusive & MaximumNumber & Value<string> & {converter : Function<[string], number>} = {
            maximum : maximum,
            inclusive : inclusive,
            value : number,
            converter : converter
        };

        let msg = MessageCallback(container, GreaterObject, ()=>message(this));

        super(container, msg, msg);

        this.maximum = maximum;
        this.inclusive = inclusive;

    }
}
