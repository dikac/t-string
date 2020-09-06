import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * create a string message, by constructing subject, predicate, object
 *
 * combine subject, predicate, object to create whole sentence
 */
export default class Sentence implements ValueOf<string>, Validatable {
    valid: boolean;
    subject: string;
    predicate: {
        invalid: string;
        valid: string;
    };
    object: string;
    /**
     * @param valid
     * @param subject {default : 'value'}
     * @param predicate {default : {invalid : 'is not', valid : 'is'}}
     * @param object {default : 'valid'}
     */
    constructor(valid: boolean, subject?: string, predicate?: {
        invalid: string;
        valid: string;
    }, object?: string);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
