import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueMatch from "../value/match";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";

export default class Match<ValueType extends string, MessageType>
    extends ValueMatch<ValueType>
    implements Readonly<Message<MessageType>>
{
    constructor(
        readonly value : ValueType,
        readonly pattern : RegExp,
        private messageFactory : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {
        super(value, pattern);
    }

    get message () : MessageType {

        return MemoizeGetter(this, 'message', this.messageFactory(this));
    }
}
