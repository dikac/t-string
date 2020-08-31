import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueMatch from "../value/match";
import MemoizeGetter from "@dikac/t-object/value/value/memoize-getter";

export default class Match<ValueT extends string, MessageT>
    extends ValueMatch<ValueT>
    implements Readonly<Message<MessageT>>
{
    constructor(
        readonly value : ValueT,
        readonly pattern : RegExp,
        private messageFactory : (result : Readonly<Value<ValueT> & Validatable>)=>MessageT,
    ) {
        super(value, pattern);
    }

    get message () : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this));
    }
}
