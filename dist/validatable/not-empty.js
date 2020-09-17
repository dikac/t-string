import NotEmptyBoolean from "./boolean/not-empty";
export default class NotEmpty {
    constructor(value, message) {
        this.value = value;
        this.valid = NotEmptyBoolean(this);
        this.messageFactory = message;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
    get message() {
        return this.messageFactory(this);
    }
}
//# sourceMappingURL=not-empty.js.map