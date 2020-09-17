import ValueMatch from "../value/match";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
export default class Match extends ValueMatch {
    constructor(value, pattern, messageFactory) {
        super(value, pattern);
        this.value = value;
        this.pattern = pattern;
        this.messageFactory = messageFactory;
    }
    get message() {
        return MemoizeGetter(this, 'message', this.messageFactory(this));
    }
}
//# sourceMappingURL=match.js.map