import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
export default class Sentences implements ValueOf<string>, Validatable {
    valid: boolean;
    subject: string[];
    predicate: {
        invalid: string[];
        valid: string[];
    };
    object: string[];
    constructor(valid: boolean, subject?: string[], predicate?: {
        invalid: string[];
        valid: string[];
    }, object?: string[]);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
