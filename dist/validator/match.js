import MatchValidatable from "../validatable/match";
export default class Match {
    constructor(pattern, message) {
        this.pattern = pattern;
        this.message = message;
    }
    validate(value) {
        return new MatchValidatable(value, this.pattern, this.message);
    }
}
//# sourceMappingURL=match.js.map