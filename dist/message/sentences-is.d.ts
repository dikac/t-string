import ValueOf from "@dikac/t-value/value-of/value-of";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default class SentencesIs implements ValueOf<string>, Value<string[]>, Validatable {
    valid: boolean;
    value: string[];
    expectation: {
        invalid: string[];
        valid: string[];
    };
    type: string[];
    constructor(valid: boolean, value?: string[], expectation?: {
        invalid: string[];
        valid: string[];
    }, type?: string[]);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
