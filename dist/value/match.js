export default class Match {
    constructor(value, pattern) {
        this.value = value;
        this.pattern = pattern;
        let match = value.match(pattern);
        this.valid = match !== null;
        this.match = match ? match : [];
    }
    toString() {
        return this.value;
    }
    valueOf() {
        return this.value;
    }
}
//# sourceMappingURL=match.js.map