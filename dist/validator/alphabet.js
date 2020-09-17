import AlphabetValidatable from "../validatable/alphabet";
export default class Alphabet {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new AlphabetValidatable(value, this.message);
    }
}
//# sourceMappingURL=alphabet.js.map