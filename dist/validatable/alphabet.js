import AlphabetFromObject from "../boolean/alphabet";
export default class Alphabet {
    constructor(value, message) {
        this.value = value;
        this.messageFactory = message;
        this.valid = AlphabetFromObject(value);
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
//# sourceMappingURL=alphabet.js.map