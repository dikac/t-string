import ValueOf from "@dikac/t-value/value-of/value-of";
import NotEmpty from "../boolean/not-empty";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * array version, create a string message, by constructing subject, predicate, object
 *
 * combine subject, predicate, object to create whole sentence
 */
export default class Sentences implements ValueOf<string>, Validatable {

    /**
     * @param valid
     * @param subject
     * @param predicate
     * @param object
     */
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
