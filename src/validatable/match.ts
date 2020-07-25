import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import MatchBoolean from "./boolean/match";

export default class Match<Msg>
    extends MergeWrapper<Value<string>, Message<Msg>, Validatable>

{
    readonly pattern : RegExp;

    constructor(
        number : string,
        match : RegExp,
        message : Function<[Readonly<Value<string> & Validatable>], Msg>,
    ) {

        let container : Value<string> & {pattern : RegExp} = {
            pattern : match,
            value : number,
        };

        let msg = MessageCallback(container, MatchBoolean, ()=>message(this));

        super(container, msg, msg);

        this.pattern = match;
    }
}
