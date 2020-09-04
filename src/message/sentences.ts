import ValueOf from "@dikac/t-value/value-of/value-of";
import NotEmpty from "../boolean/not-empty";
import Validatable from "@dikac/t-validatable/validatable";

export default class Sentences implements ValueOf<string>, Validatable {

    constructor(
        public valid : boolean,
        public subject : string[] = [],
        public predicate : {invalid : string[], valid : string[]} = {invalid : [], valid : []},
        public object : string[] = []
    ) {
    }

    valueOf(): string {

        return this.message;
    }

    toString() : string {

        return this.message;
    }

    get message() : string {

        let messages : string[] = [];

        messages.push(...this.subject);

        messages.push(...(this.valid ? this.predicate.valid : this.predicate.invalid));

        messages.push(...this.object);

        messages = messages.filter(NotEmpty);

        return messages.join(' ');
    }

}
