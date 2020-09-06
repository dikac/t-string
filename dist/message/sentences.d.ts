import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * array version, create a string message, by constructing subject, predicate, object
 *
 * combine subject, predicate, object to create whole sentence
 */
export default class Sentences implements ValueOf<string>, Validatable {
    valid: boolean;
    subject: string[];
    predicate: {
        invalid: string[];
        valid: string[];
    };
    object: string[];
    /**
     * @param valid
     * @param subject
     * @param predicate
     * @param object
     */
    constructor(valid: boolean, subject?: string[], predicate?: {
        invalid: string[];
        valid: string[];
    }, object?: string[]);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
