import ValueOf from "@dikac/t-value/value-of/value-of";
import NotEmpty from "../boolean/not-empty";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Trim from "../trim";

export default class Sentence implements ValueOf<string>, Value<string>, Validatable {

    constructor(
        public valid : boolean,
        public value : string = 'value',
        public expectation: {
            invalid : string,
            valid : string
        } = {
            invalid : 'is not',
            valid : 'is'
        },
        public type : string = 'valid'
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

        messages.push(this.value);

        messages.push(this.valid ? this.expectation.valid : this.expectation.invalid);

        messages.push(this.type);

        messages = messages.filter(NotEmpty).map((message)=>Trim(message));

        return messages.join(' ');
    }

}
