import EmptyBoolean from "./boolean/empty";
export default class Empty {
    constructor(value, message) {
        this.value = value;
        this.messageFactory = message;
        this.valid = EmptyBoolean(this);
    }
    toString() {
        return this.value;
    }
    valueOf() {
        return this.value;
    }
    get message() {
        return this.messageFactory(this);
    }
}
//# sourceMappingURL=empty.js.map